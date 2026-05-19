<?php
require_once __DIR__ . "/../../utils/cors.php";
require_once __DIR__ . "/../../utils/auth.php";
require_once __DIR__ . "/../../config/database.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    send_json(["success" => false, "message" => "Metoda nuk lejohet."], 405);
}

$user = require_auth();
$data = get_json_input();

$serviceId = (int)($data["service_id"] ?? 0);

if ($serviceId <= 0) {
    send_json(["success" => false, "message" => "service_id është i detyrueshëm."], 400);
}

try {
    $db = (new Database())->connect();

    $serviceStmt = $db->prepare("SELECT * FROM services WHERE id = :id LIMIT 1");
    $serviceStmt->execute([":id" => $serviceId]);
    $service = $serviceStmt->fetch();

    if (!$service) {
        send_json(["success" => false, "message" => "Shërbimi nuk ekziston."], 404);
    }

    $db->beginTransaction();

    $subStmt = $db->prepare("
        INSERT INTO user_services (user_id, service_id)
        VALUES (:user_id, :service_id)
    ");
    $subStmt->execute([
        ":user_id" => $user["id"],
        ":service_id" => $serviceId
    ]);

    $subscriptionId = (int)$db->lastInsertId();

    $billCode = "BILL-" . date("YmdHis") . "-" . $user["id"];
    $issuedDate = date("Y-m-d");
    $dueDate = date("Y-m-d", strtotime("+15 days"));

    $billStmt = $db->prepare("
        INSERT INTO bills (bill_code, user_id, service_id, amount, status, issued_date, due_date)
        VALUES (:bill_code, :user_id, :service_id, :amount, 'Papaguar', :issued_date, :due_date)
    ");
    $billStmt->execute([
        ":bill_code" => $billCode,
        ":user_id" => $user["id"],
        ":service_id" => $serviceId,
        ":amount" => $service["price"],
        ":issued_date" => $issuedDate,
        ":due_date" => $dueDate
    ]);

    $billId = (int)$db->lastInsertId();

    $itemStmt = $db->prepare("
        INSERT INTO bill_items (bill_id, description, quantity, price)
        VALUES (:bill_id, :description, 1, :price)
    ");
    $itemStmt->execute([
        ":bill_id" => $billId,
        ":description" => "Abonim: " . $service["name"],
        ":price" => $service["price"]
    ]);

    $db->commit();

    send_json([
        "success" => true,
        "message" => "Abonimi u krijua dhe fatura u gjenerua.",
        "subscription_id" => $subscriptionId,
        "bill" => [
            "id" => $billId,
            "bill_code" => $billCode,
            "amount" => $service["price"],
            "status" => "Papaguar",
            "issued_date" => $issuedDate,
            "due_date" => $dueDate
        ]
    ], 201);

} catch (Throwable $e) {
    if (isset($db) && $db->inTransaction()) {
        $db->rollBack();
    }

    send_json([
        "success" => false,
        "message" => "Gabim gjatë krijimit të abonimit.",
        "error" => $e->getMessage()
    ], 500);
}

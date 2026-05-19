<?php
require_once __DIR__ . "/../../utils/cors.php";
require_once __DIR__ . "/../../utils/auth.php";
require_once __DIR__ . "/../../config/database.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    send_json(["success" => false, "message" => "Metoda nuk lejohet."], 405);
}

$user = require_auth();
$data = get_json_input();

$billId = (int)($data["bill_id"] ?? 0);
$paymentMethod = $data["payment_method"] ?? "Kartë Krediti";

$allowedMethods = ["Kartë Krediti", "Kartë Debiti", "PayPal", "Transfertë Bankare"];

if ($billId <= 0) {
    send_json(["success" => false, "message" => "bill_id është i detyrueshëm."], 400);
}

if (!in_array($paymentMethod, $allowedMethods, true)) {
    send_json(["success" => false, "message" => "Metoda e pagesës nuk është e vlefshme."], 400);
}

try {
    $db = (new Database())->connect();

    $billStmt = $db->prepare("
        SELECT * FROM bills
        WHERE id = :id AND user_id = :user_id
        LIMIT 1
    ");
    $billStmt->execute([
        ":id" => $billId,
        ":user_id" => $user["id"]
    ]);

    $bill = $billStmt->fetch();

    if (!$bill) {
        send_json(["success" => false, "message" => "Fatura nuk u gjet."], 404);
    }

    if ($bill["status"] === "Paguar") {
        send_json(["success" => false, "message" => "Kjo faturë është paguar më parë."], 409);
    }

    $db->beginTransaction();

    $trxCode = "TRX-" . date("YmdHis") . "-" . $user["id"];

    $trxStmt = $db->prepare("
        INSERT INTO transactions (trx_code, user_id, bill_id, payment_method, amount, status)
        VALUES (:trx_code, :user_id, :bill_id, :payment_method, :amount, 'Sukses')
    ");
    $trxStmt->execute([
        ":trx_code" => $trxCode,
        ":user_id" => $user["id"],
        ":bill_id" => $billId,
        ":payment_method" => $paymentMethod,
        ":amount" => $bill["amount"]
    ]);

    $transactionId = (int)$db->lastInsertId();

    $updateBill = $db->prepare("UPDATE bills SET status = 'Paguar' WHERE id = :id");
    $updateBill->execute([":id" => $billId]);

    $db->commit();

    send_json([
        "success" => true,
        "message" => "Pagesa u krye me sukses.",
        "transaction" => [
            "id" => $transactionId,
            "trx_code" => $trxCode,
            "amount" => $bill["amount"],
            "status" => "Sukses"
        ]
    ], 201);

} catch (Throwable $e) {
    if (isset($db) && $db->inTransaction()) {
        $db->rollBack();
    }

    send_json([
        "success" => false,
        "message" => "Gabim gjatë pagesës.",
        "error" => $e->getMessage()
    ], 500);
}

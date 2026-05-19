<?php
require_once __DIR__ . "/../../utils/cors.php";
require_once __DIR__ . "/../../utils/auth.php";
require_once __DIR__ . "/../../config/database.php";

$user = require_auth();

$billId = (int)($_GET["id"] ?? 0);

if ($billId <= 0) {
    send_json(["success" => false, "message" => "Bill ID mungon."], 400);
}

try {
    $db = (new Database())->connect();

    $billStmt = $db->prepare("
        SELECT 
            bills.*,
            services.name AS service_name,
            services.category AS service_category
        FROM bills
        LEFT JOIN services ON services.id = bills.service_id
        WHERE bills.id = :id
          AND bills.user_id = :user_id
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

    $itemsStmt = $db->prepare("SELECT * FROM bill_items WHERE bill_id = :bill_id");
    $itemsStmt->execute([":bill_id" => $billId]);

    send_json([
        "success" => true,
        "bill" => $bill,
        "items" => $itemsStmt->fetchAll()
    ]);
} catch (Throwable $e) {
    send_json([
        "success" => false,
        "message" => "Gabim gjatë marrjes së detajeve të faturës.",
        "error" => $e->getMessage()
    ], 500);
}

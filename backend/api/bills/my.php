<?php
require_once __DIR__ . "/../../utils/cors.php";
require_once __DIR__ . "/../../utils/auth.php";
require_once __DIR__ . "/../../config/database.php";

$user = require_auth();

try {
    $db = (new Database())->connect();

    $stmt = $db->prepare("
        SELECT 
            bills.*,
            services.name AS service_name,
            services.category AS service_category
        FROM bills
        LEFT JOIN services ON services.id = bills.service_id
        WHERE bills.user_id = :user_id
        ORDER BY bills.created_at DESC
    ");
    $stmt->execute([":user_id" => $user["id"]]);

    send_json([
        "success" => true,
        "bills" => $stmt->fetchAll()
    ]);
} catch (Throwable $e) {
    send_json([
        "success" => false,
        "message" => "Gabim gjatë marrjes së faturave.",
        "error" => $e->getMessage()
    ], 500);
}

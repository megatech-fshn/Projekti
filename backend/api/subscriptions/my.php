<?php
require_once __DIR__ . "/../../utils/cors.php";
require_once __DIR__ . "/../../utils/auth.php";
require_once __DIR__ . "/../../config/database.php";

$user = require_auth();

try {
    $db = (new Database())->connect();

    $stmt = $db->prepare("
        SELECT 
            user_services.id AS subscription_id,
            user_services.activated_at,
            services.id AS service_id,
            services.name,
            services.category,
            services.price,
            services.speed,
            services.data,
            services.features
        FROM user_services
        INNER JOIN services ON services.id = user_services.service_id
        WHERE user_services.user_id = :user_id
        ORDER BY user_services.activated_at DESC
    ");
    $stmt->execute([":user_id" => $user["id"]]);

    send_json([
        "success" => true,
        "subscriptions" => $stmt->fetchAll()
    ]);
} catch (Throwable $e) {
    send_json([
        "success" => false,
        "message" => "Gabim gjatë marrjes së abonimeve.",
        "error" => $e->getMessage()
    ], 500);
}

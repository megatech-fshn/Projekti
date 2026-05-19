<?php
require_once __DIR__ . "/../../utils/cors.php";
require_once __DIR__ . "/../../config/database.php";
require_once __DIR__ . "/../../utils/response.php";
require_once __DIR__ . "/../../utils/auth.php";

$token = get_bearer_token();

if (!$token) {
    send_json(["success" => false, "message" => "Token mungon."], 401);
}

try {
    $db = (new Database())->connect();

    $stmt = $db->prepare("DELETE FROM sessions WHERE token = :token");
    $stmt->execute([":token" => $token]);

    send_json([
        "success" => true,
        "message" => "Logout u krye me sukses."
    ]);
} catch (Throwable $e) {
    send_json([
        "success" => false,
        "message" => "Gabim gjatë logout.",
        "error" => $e->getMessage()
    ], 500);
}

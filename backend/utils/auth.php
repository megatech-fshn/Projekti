<?php
require_once __DIR__ . "/../config/database.php";
require_once __DIR__ . "/response.php";

function get_bearer_token(): ?string {
    $headers = function_exists("getallheaders") ? getallheaders() : [];

    $authHeader = $headers["Authorization"] ?? $headers["authorization"] ?? null;

    if (!$authHeader && isset($_SERVER["HTTP_AUTHORIZATION"])) {
        $authHeader = $_SERVER["HTTP_AUTHORIZATION"];
    }

    if (!$authHeader || !preg_match('/Bearer\s+(.+)/', $authHeader, $matches)) {
        return null;
    }

    return trim($matches[1]);
}

function require_auth(): array {
    $token = get_bearer_token();

    if (!$token) {
        send_json([
            "success" => false,
            "message" => "Token mungon. Ju lutem bëni login."
        ], 401);
    }

    $db = (new Database())->connect();

    $stmt = $db->prepare("
        SELECT 
            users.id,
            users.email,
            users.role,
            users.status,
            profiles.first_name,
            profiles.last_name,
            profiles.phone,
            profiles.address,
            profiles.customer_type
        FROM sessions
        INNER JOIN users ON users.id = sessions.user_id
        LEFT JOIN profiles ON profiles.user_id = users.id
        WHERE sessions.token = :token
          AND sessions.expires_at > NOW()
        LIMIT 1
    ");
    $stmt->execute([":token" => $token]);
    $user = $stmt->fetch();

    if (!$user) {
        send_json([
            "success" => false,
            "message" => "Session i pavlefshëm ose i skaduar."
        ], 401);
    }

    if ($user["status"] !== "Aktiv") {
        send_json([
            "success" => false,
            "message" => "Llogaria nuk është aktive."
        ], 403);
    }

    return $user;
}

function require_admin(): array {
    $user = require_auth();

    if ($user["role"] !== "admin") {
        send_json([
            "success" => false,
            "message" => "Akses i lejuar vetëm për admin."
        ], 403);
    }

    return $user;
}

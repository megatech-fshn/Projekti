<?php
require_once __DIR__ . "/../../utils/cors.php";
require_once __DIR__ . "/../../config/database.php";
require_once __DIR__ . "/../../utils/response.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    send_json(["success" => false, "message" => "Metoda nuk lejohet."], 405);
}

$data = get_json_input();

$email = trim($data["email"] ?? "");
$password = (string)($data["password"] ?? "");
$remember = !empty($data["remember"]);

if ($email === "" || $password === "") {
    send_json([
        "success" => false,
        "message" => "Email dhe password janë të detyrueshme."
    ], 400);
}

try {
    $db = (new Database())->connect();

    $stmt = $db->prepare("
        SELECT 
            users.id,
            users.email,
            users.password,
            users.role,
            users.status,
            profiles.first_name,
            profiles.last_name,
            profiles.phone,
            profiles.address,
            profiles.customer_type
        FROM users
        LEFT JOIN profiles ON profiles.user_id = users.id
        WHERE users.email = :email
        LIMIT 1
    ");
    $stmt->execute([":email" => $email]);
    $user = $stmt->fetch();

    if (!$user || !password_verify($password, $user["password"])) {
        send_json([
            "success" => false,
            "message" => "Email ose password i gabuar."
        ], 401);
    }

    if ($user["status"] !== "Aktiv") {
        send_json([
            "success" => false,
            "message" => "Llogaria nuk është aktive."
        ], 403);
    }

    $token = bin2hex(random_bytes(32));
    $expiresAt = $remember
        ? date("Y-m-d H:i:s", strtotime("+30 days"))
        : date("Y-m-d H:i:s", strtotime("+1 day"));

    $sessionStmt = $db->prepare("
        INSERT INTO sessions (user_id, token, remember, expires_at)
        VALUES (:user_id, :token, :remember, :expires_at)
    ");
    $sessionStmt->execute([
        ":user_id" => $user["id"],
        ":token" => $token,
        ":remember" => $remember ? 1 : 0,
        ":expires_at" => $expiresAt
    ]);

    unset($user["password"]);

    send_json([
        "success" => true,
        "message" => "Login u krye me sukses.",
        "token" => $token,
        "expires_at" => $expiresAt,
        "user" => $user
    ]);

} catch (Throwable $e) {
    send_json([
        "success" => false,
        "message" => "Gabim gjatë login.",
        "error" => $e->getMessage()
    ], 500);
}

<?php
require_once __DIR__ . "/../../utils/cors.php";
require_once __DIR__ . "/../../utils/auth.php";
require_once __DIR__ . "/../../config/database.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    send_json(["success" => false, "message" => "Metoda nuk lejohet."], 405);
}

$user = require_auth();
$data = get_json_input();

$firstName = trim($data["first_name"] ?? "");
$lastName = trim($data["last_name"] ?? "");
$phone = trim($data["phone"] ?? "");
$address = trim($data["address"] ?? "");
$customerType = $data["customer_type"] ?? "Individual";

if (!in_array($customerType, ["Individual", "Business"], true)) {
    $customerType = "Individual";
}

try {
    $db = (new Database())->connect();

    $stmt = $db->prepare("
        UPDATE profiles
        SET first_name = :first_name,
            last_name = :last_name,
            phone = :phone,
            address = :address,
            customer_type = :customer_type
        WHERE user_id = :user_id
    ");
    $stmt->execute([
        ":first_name" => $firstName ?: null,
        ":last_name" => $lastName ?: null,
        ":phone" => $phone ?: null,
        ":address" => $address ?: null,
        ":customer_type" => $customerType,
        ":user_id" => $user["id"]
    ]);

    send_json([
        "success" => true,
        "message" => "Profili u përditësua me sukses."
    ]);
} catch (Throwable $e) {
    send_json([
        "success" => false,
        "message" => "Gabim gjatë përditësimit të profilit.",
        "error" => $e->getMessage()
    ], 500);
}

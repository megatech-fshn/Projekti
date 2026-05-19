<?php
require_once __DIR__ . "/../../utils/cors.php";
require_once __DIR__ . "/../../config/database.php";
require_once __DIR__ . "/../../utils/response.php";

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    send_json(["success" => false, "message" => "Metoda nuk lejohet."], 405);
}

$data = get_json_input();

/*
Databaza ekzistuese:
- users: id, email, password, role, status, created_at
- profiles: id, user_id, first_name, last_name, phone, address, customer_type

Prandaj NUK insertojmë më kolonën `name` te users.
Emri ruhet te tabela `profiles`.
*/

$email = trim($data["email"] ?? "");
$password = (string)($data["password"] ?? "");
$role = $data["role"] ?? "user";

$firstName = trim($data["first_name"] ?? "");
$lastName = trim($data["last_name"] ?? "");

// Nëse frontend dërgon vetëm `name`, e ndajmë automatikisht në first_name / last_name.
if ($firstName === "" && isset($data["name"])) {
    $fullName = trim((string)$data["name"]);
    $parts = preg_split('/\s+/', $fullName, 2);
    $firstName = $parts[0] ?? "";
    $lastName = $parts[1] ?? "";
}

$phone = trim($data["phone"] ?? "");
$address = trim($data["address"] ?? "");
$customerType = $data["customer_type"] ?? "Individual";

if ($email === "" || $password === "") {
    send_json([
        "success" => false,
        "message" => "Email dhe password janë të detyrueshme."
    ], 400);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    send_json([
        "success" => false,
        "message" => "Email nuk është i vlefshëm."
    ], 400);
}

if (strlen($password) < 6) {
    send_json([
        "success" => false,
        "message" => "Password duhet të ketë të paktën 6 karaktere."
    ], 400);
}

if (!in_array($role, ["user", "admin"], true)) {
    $role = "user";
}

if (!in_array($customerType, ["Individual", "Business"], true)) {
    $customerType = "Individual";
}

try {
    $db = (new Database())->connect();

    $check = $db->prepare("SELECT id FROM users WHERE email = :email LIMIT 1");
    $check->execute([":email" => $email]);

    if ($check->fetch()) {
        send_json([
            "success" => false,
            "message" => "Ky email është regjistruar më parë."
        ], 409);
    }

    $db->beginTransaction();

    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $db->prepare("
        INSERT INTO users (email, password, role, status)
        VALUES (:email, :password, :role, 'Aktiv')
    ");
    $stmt->execute([
        ":email" => $email,
        ":password" => $hashedPassword,
        ":role" => $role
    ]);

    $userId = (int)$db->lastInsertId();

    $profileStmt = $db->prepare("
        INSERT INTO profiles (user_id, first_name, last_name, phone, address, customer_type)
        VALUES (:user_id, :first_name, :last_name, :phone, :address, :customer_type)
    ");
    $profileStmt->execute([
        ":user_id" => $userId,
        ":first_name" => $firstName ?: null,
        ":last_name" => $lastName ?: null,
        ":phone" => $phone ?: null,
        ":address" => $address ?: null,
        ":customer_type" => $customerType
    ]);

    $db->commit();

    send_json([
        "success" => true,
        "message" => "Regjistrimi u krye me sukses.",
        "user" => [
            "id" => $userId,
            "email" => $email,
            "role" => $role,
            "status" => "Aktiv",
            "profile" => [
                "first_name" => $firstName,
                "last_name" => $lastName,
                "phone" => $phone,
                "address" => $address,
                "customer_type" => $customerType
            ]
        ]
    ], 201);

} catch (Throwable $e) {
    if (isset($db) && $db->inTransaction()) {
        $db->rollBack();
    }

    send_json([
        "success" => false,
        "message" => "Gabim gjatë regjistrimit.",
        "error" => $e->getMessage()
    ], 500);
}

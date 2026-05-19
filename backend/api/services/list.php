<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER["REQUEST_METHOD"] === "OPTIONS") {
    http_response_code(200);
    exit;
}

try {
    $host = "localhost";
    $db_name = "megatech";
    $username = "root";
    $password = "";
    $port = "3306";

    $conn = new PDO(
        "mysql:host=$host;port=$port;dbname=$db_name;charset=utf8mb4",
        $username,
        $password
    );

    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $query = "
        SELECT 
            id,
            name,
            category,
            price,
            speed,
            data,
            features
        FROM services
        ORDER BY 
            FIELD(category, 'Internet', 'Mobile', 'Combo', 'Business', 'Free'),
            price ASC
    ";

    $stmt = $conn->prepare($query);
    $stmt->execute();

    $services = $stmt->fetchAll(PDO::FETCH_ASSOC);

    echo json_encode([
        "success" => true,
        "services" => $services
    ], JSON_UNESCAPED_UNICODE);

} catch (PDOException $e) {
    http_response_code(500);

    echo json_encode([
        "success" => false,
        "message" => "Gabim gjatë marrjes së shërbimeve.",
        "error" => $e->getMessage()
    ], JSON_UNESCAPED_UNICODE);
}
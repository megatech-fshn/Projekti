<?php
function send_json($data, int $statusCode = 200): void {
    http_response_code($statusCode);
    header("Content-Type: application/json; charset=UTF-8");
    echo json_encode($data, JSON_UNESCAPED_UNICODE);
    exit;
}

function get_json_input(): array {
    $raw = file_get_contents("php://input");
    $data = json_decode($raw, true);

    if (!is_array($data)) {
        return [];
    }

    return $data;
}

function require_fields(array $data, array $fields): void {
    foreach ($fields as $field) {
        if (!isset($data[$field]) || trim((string)$data[$field]) === "") {
            send_json([
                "success" => false,
                "message" => "Mungon fusha: {$field}"
            ], 400);
        }
    }
}

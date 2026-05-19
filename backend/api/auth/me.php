<?php
require_once __DIR__ . "/../../utils/cors.php";
require_once __DIR__ . "/../../utils/auth.php";

$user = require_auth();

send_json([
    "success" => true,
    "user" => $user
]);

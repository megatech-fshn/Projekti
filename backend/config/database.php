<?php
class Database {
    private string $host = "127.0.0.1";
    private string $db_name = "megatech";
    private string $username = "root";
    private string $password = "";
    private string $charset = "utf8mb4";
    private int $port = 3306;

    public function connect(): PDO {
        $dsn = "mysql:host={$this->host};port={$this->port};dbname={$this->db_name};charset={$this->charset}";

        $pdo = new PDO($dsn, $this->username, $this->password, [
            PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
            PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
            PDO::ATTR_EMULATE_PREPARES => false,
        ]);

        return $pdo;
    }
}

<?php
$host = "autorack.proxy.rlwy.net";
$port = "38918"; // Add the port number
$usr = "root";
$pass = "cIDkfpxVDQUgruPWDAXGHvkllBMNFOfC";
$db = "railway";
$dsn = "mysql:host=$host;port=$port;dbname=$db;charset=utf8"; // Include the port in the DSN
require_once "database/users.php";
require_once "database/controller.php";

try{
    $pdo = new PDO($dsn, $usr, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
    echo $e->getMessage();
}
$users = new User($pdo);
$controller = new Controller($pdo);
$doctor = new User($pdo);

?>

<?php
$host = "localhost";
$usr = "root";
$pass = "";
$db = "supmed";
$dsn = "mysql:host=$host;dbname=$db;charset=utf8";
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
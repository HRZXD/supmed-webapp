<?php
$host = "localhost";
$usr = "root";
$pass = "";
$db = "supmed";
$dsn = "mysql:host=$host;dbname=$db;charset=utf8";
// require_once "db/controller.php";
require_once "database/users.php";

try{
    $pdo = new PDO($dsn, $usr, $pass);
}catch(PDOException $e){
    echo $e->getMessage();
}

// $controller = new Controller($pdo);
$users = new User($pdo);

$users->insertUser("root","12345");
?>
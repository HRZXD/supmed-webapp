<?php
$host = "localhost";
$usr = "root";
$pass = "";
$db = "supmed";
$dsn = "mysql:host=$host;dbname=$db;charset=utf8";
require_once "database/users.php";

try{
    $pdo = new PDO($dsn, $usr, $pass);
    $conn = mysqli_connect($host, $usr, $pass , $db);
    // $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
}catch(PDOException $e){
    echo $e->getMessage();
}
$users = new User($pdo);
?>
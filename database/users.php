<?php
class User{
    private $db;
    function __construct($conn){
        $this->db=$conn;
    }
    function insertUser($un,$ps){
        try{
            $result = $this->getUserByUsername($un);
            if($result["usNum"]>0){
                return false;
            }else{
                $cv_pass = md5($ps.$un);
                $sql = "INSERT INTO doctor(username,password) VALUES (:username,:password)";
                $stmt = $this->db->prepare($sql);
                $stmt->bindParam(":username",$un);
                $stmt->bindParam(":password",$cv_pass);
                $stmt->execute();
                return true;
            }
        }catch(PDOException $e){
            echo $e->getMessage();
            return false;
        }
    }
    function getUserByUsername($username){
        try{
            $sql = "SELECT COUNT(*) as usNum FROM doctor WHERE username = :username";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(":username",$username);
            $stmt->execute();
            $result = $stmt->fetch();
            return $result;
        }catch(PDOException $e){
            echo $e->getMessage();
            return false;
        }
    }
    function checkUser($un,$ps){
        try{
            $sql = "SELECT * FROM doctor WHERE username = :username AND password = :password";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(":username",$un);
            $stmt->bindParam(":password",$ps);
            $stmt->execute();
            $result = $stmt->fetch();
            return $result;
        }catch(PDOException $e){
            echo $e->getMessage();
            return false;
        }
    }
}
?>
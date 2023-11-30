<?php
class User{
    private $db;
    function __construct($conn){
        $this->db=$conn;
    }
    function insertUser($un,$dcname,$ps){
        try{
            $result = $this->getUserByUsername($dcname);
            if($result["usNum"]>0){
                return false;
            }else{
                $cv_pass = md5($ps.$un);
                $sql = "INSERT INTO doctor(u_id,username,password) VALUES (:u_id,:username,:password)";
                $stmt = $this->db->prepare($sql);
                $stmt->bindParam(":u_id",$un);
                $stmt->bindParam(":username",$dcname);
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
    function checkUser($un, $ps){
        try {
            $sql = "SELECT u_id, username FROM doctor WHERE u_id = :u_id AND password = :password";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(":u_id", $un);
            $stmt->bindParam(":password", $ps);
            $stmt->execute();
            $result = $stmt->fetch();
    
            if ($result) {
                $_SESSION['username'] = $result['username'];
            }
    
            return $result;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }
    // function checkUsers($un,$ps){
    //     try{
    //         $sql = "SELECT * FROM doctor WHERE u_id = :u_id AND password = :password";
    //         $stmt = $this->db->prepare($sql);
    //         $stmt->bindParam(":u_id",$un);
    //         $stmt->bindParam(":password",$ps);
    //         $stmt->execute();
    //         $result = $stmt->fetch();
    //         return $result;
    //     }catch(PDOException $e){
    //         echo $e->getMessage();
    //         return false;
    //     }
    // }
}
?>
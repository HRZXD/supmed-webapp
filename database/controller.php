<?php
class Controller{
    private $db;
    function __construct($conn){
        $this->db=$conn;
    }
    function getDetails($user_id){
        try {
            $sql = "SELECT * FROM patient WHERE user_id = :user_id";
            $stmt = $this->db->prepare($sql);
            $stmt->bindParam(":user_id", $user_id, PDO::PARAM_STR);
            $stmt->execute();
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            return $result;
        } catch (PDOException $e) {
            echo $e->getMessage();
            return false;
        }
    }

}



?>
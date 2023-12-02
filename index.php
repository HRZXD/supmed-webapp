<?php

require_once "layout/header.php";
require_once "database/connect.php";
require_once "layout/check_admin.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $inputUserID = $_POST["search"];
    $query = "SELECT * FROM patient WHERE user_id = :user_id";
    $statement = $pdo->prepare($query);
    $statement->bindParam(":user_id", $inputUserID, PDO::PARAM_STR);
    $statement->execute();
    if ($statement->rowCount() > 0) {
        header("Location: old-record.php?user_id=". urlencode($inputUserID));
        exit();
    } else {
        header("Location: record.php");
        exit();
    }
}
?>

<img src="img/banner.jpg" alt="hostipal" width="100%" height="700px">
<br><br><br><br>
    <div class="contain1 mb-5">
        <center><h1>ค้นหาประวัติผู้ป่วย</h1></center>
        <div class="card mx-auto" style="width: 40em;">
            <form method="POST">
                <div class="input-group mb-3 pt-5 pr-5 pl-5" id="search">
                <div class="input-group-prepend">
                    <span class="input-group-text b" id="basic-addon1"><i class="fas fa-user ms-3"></i></span>
                </div>
                <input style="background-color: #EDEDED;" type="text" class="form-control"  placeholder="ID CARD NUMBER" aria-label="Username" aria-describedby="basic-addon1" name="search">
                </div>
                <center><input type="submit" name="submit" value="ค้นหาประวัติ" class="btn btn-outline-success mb-4"></center>
            </form>
        </div>
    </div>
</body>
</html>
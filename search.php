<?php
require_once "database/connect.php";
require_once "layout/header.php";

?>

    <div class="container">
        <h1>id number</h1>
        <form method="post">
            <input type="text" name="search" placeholder="search id" size="25">
            <input type="submit" name="submit">
        </form>
    </div>
    <?php
        // if(isset($_POST['submit'])){
        //     $search = $_POST['search'];
        //     $sql = "SELECT * from patient WHERE id = '$search'";
        //     $result = mysqli_query($conn, $sql);
        //     if($result){
        //         $num = mysqli_num_rows($result);
        //         echo $num;
        //     }
        // }
    
    
    ?>
</body>
</html>



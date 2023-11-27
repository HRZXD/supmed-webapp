<?php 
    $title = "Form Page";
    require_once "layout/header.php";
    require_once "database/connect.php";
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        $username = $_POST["username"];
        $password = $_POST["password"];
        $cv_password = md5($password.$username);
        $result = $users->checkUser($username,$cv_password);
        if(!$result){
            echo '<div class="alert alert-danger">Error Username or Password</div>';
        }else{
            $_SESSION['username'] = $username;
            $_SESSION['userid'] = $result['id'];
            header('Location:index.php');
            // echo "sucessfully logged in";
        }
    }
?>
        <h1 class="text-center"><?php echo "Login"?></h1>
        <form method="POST" action="<?php echo htmlentities($_SERVER['PHP_SELF'])?>">
            <div class="form-group">
                <label for="username">Username</label>
                <input type="text" name="username" value="<?php if($_SERVER["REQUEST_METHOD"]=="POST") echo $_POST["username"];?>" class="form-control">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" name="password" class="form-control">
            </div>
            <input type="submit" name="submit" value="Login" class="btn btn-primary my-3">
        </form>
    </div>
</body>
</html>
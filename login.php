<?php 
    $title = "Form Page";
    require_once "layout/header.php";
    require_once "database/connect.php";
    if ($_SERVER["REQUEST_METHOD"]=="POST") {
        $username = $_POST["username"];
        $password = $_POST["password"];
        $cv_password = md5($password.$username);
        $result = $users->checkUser($username, $cv_password);
        if (!$result) {
            echo '<div class="alert alert-danger">Error Username or Password</div>';
        } else {
            $_SESSION['username'] = $result['username'];
            $_SESSION['userid'] = $result['u_id'];
            header('Location:index.php');
        }
    }
?>
    <section class="sections">
        <div class="login-box">
            <form method="POST" action="<?php echo htmlentities($_SERVER['PHP_SELF'])?>">
                <h1 class="h1-login-text"><div class="login-text">Login</div></h1>
                <div class="input-box">
                    <span class="icon">
                        <ion-icon name="person"></ion-icon>
                    </span>
                    <label for="username" class="user-label">User ID</label>
                    <input type="text" name="username" value="<?php if($_SERVER["REQUEST_METHOD"]=="POST") echo $_POST["username"];?>">
                </div>
                <div class="input-box">
                    <span class="icon-key">
                        <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="&#240;&#159;&#166;&#134; icon &#34;vpn key&#34;">
                            <path id="Vector" d="M15.5811 12.3171C14.411 9.00379 10.9622 6.7744 7.10695 7.53805C4.28634 8.10464 1.99537 10.3587 1.40415 13.1793C0.394146 17.946 4.01537 22.1707 8.62195 22.1707C11.8367 22.1707 14.5711 20.1138 15.5811 17.2439H20.939V19.7073C20.939 21.0622 22.0476 22.1707 23.4024 22.1707C24.7573 22.1707 25.8659 21.0622 25.8659 19.7073V17.2439C27.2207 17.2439 28.3293 16.1354 28.3293 14.7805C28.3293 13.4256 27.2207 12.3171 25.8659 12.3171H15.5811ZM8.62195 17.2439C7.26708 17.2439 6.15854 16.1354 6.15854 14.7805C6.15854 13.4256 7.26708 12.3171 8.62195 12.3171C9.97683 12.3171 11.0854 13.4256 11.0854 14.7805C11.0854 16.1354 9.97683 17.2439 8.62195 17.2439Z" fill="black"/>
                            </g>
                        </svg>
                    </span>
                    <label for="password" class="password-label">Password</label>
                    <input type="password" name="password">
                </div>
                <input type="submit" name="submit" value="Login" class="button">
            </form>
        </div>
    </section>
    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
    <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
</body>
</html>
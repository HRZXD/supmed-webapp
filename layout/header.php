<?php

require_once "session.php"

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SUPMED</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="css/record1.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Prompt:wght@300&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="css/loginstyle1.css">
    <link rel="stylesheet" href="css/nav-bar.css">
    <link rel="stylesheet" href="css/main.css">
</head>

<body>
    <div class="nav-bar">
        <div class="icon-home">
            <svg xmlns="http://www.w3.org/2000/svg" width="41" height="40" viewBox="0 0 41 40" fill="none">
                <path d="M17.0834 31.2044V22.9928H23.9167V31.2044C23.9167 32.1077 24.6855 32.8468 25.625 32.8468H30.75C31.6896 32.8468 32.4584 32.1077 32.4584 31.2044V19.7081H35.3625C36.1484 19.7081 36.5242 18.772 35.9263 18.2792L21.6446 5.91245C20.9955 5.35405 20.0046 5.35405 19.3555 5.91245L5.0738 18.2792C4.49296 18.772 4.85171 19.7081 5.63755 19.7081H8.54171V31.2044C8.54171 32.1077 9.31046 32.8468 10.25 32.8468H15.375C16.3146 32.8468 17.0834 32.1077 17.0834 31.2044Z" fill="white" />
            </svg>
        </div>
        <?php if (!isset($_SESSION["userid"])) { ?>
            <div class="icon-user">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M19.6226 3.27039C10.5962 3.27039 3.27045 10.5961 3.27045 19.6225C3.27045 28.6489 10.5962 35.9746 19.6226 35.9746C28.6489 35.9746 35.9747 28.6489 35.9747 19.6225C35.9747 10.5961 28.6489 3.27039 19.6226 3.27039ZM19.6226 8.17602C22.337 8.17602 24.5282 10.3672 24.5282 13.0816C24.5282 15.7961 22.337 17.9873 19.6226 17.9873C16.9081 17.9873 14.7169 15.7961 14.7169 13.0816C14.7169 10.3672 16.9081 8.17602 19.6226 8.17602ZM19.6226 31.396C15.5345 31.396 11.9207 29.3029 9.81129 26.1306C9.86034 22.8766 16.3521 21.0942 19.6226 21.0942C22.8766 21.0942 29.3848 22.8766 29.4338 26.1306C27.3244 29.3029 23.7106 31.396 19.6226 31.396Z" fill="white" />
                </svg>
            </div>
        <?php } else { ?>
            <li class="dropdown list-group move-pos position-absolute">
                <a class="dropdown-item dropdown-toggle bgcustom" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"><?php echo $_SESSION['username']; ?></a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a class="dropdown-item text-danger" href="logout.php">Logout</a></li>
                </ul>
            </li>
            <div class="icon-user">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                    <path d="M19.6226 3.27039C10.5962 3.27039 3.27045 10.5961 3.27045 19.6225C3.27045 28.6489 10.5962 35.9746 19.6226 35.9746C28.6489 35.9746 35.9747 28.6489 35.9747 19.6225C35.9747 10.5961 28.6489 3.27039 19.6226 3.27039ZM19.6226 8.17602C22.337 8.17602 24.5282 10.3672 24.5282 13.0816C24.5282 15.7961 22.337 17.9873 19.6226 17.9873C16.9081 17.9873 14.7169 15.7961 14.7169 13.0816C14.7169 10.3672 16.9081 8.17602 19.6226 8.17602ZM19.6226 31.396C15.5345 31.396 11.9207 29.3029 9.81129 26.1306C9.86034 22.8766 16.3521 21.0942 19.6226 21.0942C22.8766 21.0942 29.3848 22.8766 29.4338 26.1306C27.3244 29.3029 23.7106 31.396 19.6226 31.396Z" fill="white" />
                </svg>
            </div>
        <?php } ?>
    </div>
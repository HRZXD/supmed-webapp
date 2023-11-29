<?php

require_once "layout/session.php";
session_destroy();
header("Location:login.php")

?>
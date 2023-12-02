<?php

require_once "layout/header.php";
require_once "database/controller.php";
require_once "database/connect.php";
require_once "layout/check_admin.php";
$userID = $_GET["user_id"];
$result = $controller->getDetails($userID);
$sql = "SELECT * FROM vaccine WHERE user_id = :user_id";
$stmt = $pdo->prepare($sql);
$stmt->bindParam(':user_id', $userID, PDO::PARAM_INT);
$stmt->execute();
$vaccineData = $stmt->fetchAll(PDO::FETCH_ASSOC);

?>
<br>
<br>
<div class="button-back"><a href="old-record.php?user_id=<?php echo $userID;?>"><button>Back</button></a>
</div>
<div class="contain-main-vaccine">
    <div class="container-vaccine">
        <div class="top-con">
            <div class="text-topic-vaccine">
                <p class="record-text">ประวัติการฉีดวัคซีน</p>
                <p class="fullname"><?php echo $result['fname']," ",$result['lname'];?></p>
            </div>
        </div>
        <br> <br>

        <?php if (empty($vaccineData)) : ?>
            <!-- Display a message if no vaccine data is available -->
            <div class="sub-container-vaccine">
                <div class="top-sub"></div>
                <div class="vaccine-detail">
                    <p>No vaccine data available</p>
                </div>
            </div>
        <?php else : ?>
            <!-- Display vaccine details if data is available -->
            <?php foreach ($vaccineData as $vaccine) : ?>
                <div class="sub-container-vaccine">
                    <div class="top-sub"></div>
                    <div class="vaccine-detail">
                        <p>ชื่อวัคซีน : <?php echo $vaccine['nm_vac']; ?></p>
                        <p>เข็มที่ : <?php echo $vaccine['num_vac']; ?></p>
                        <p>ฉีดเมื่อวันที่ : <?php echo $vaccine['date_vac']; ?></p>
                    </div>
                    <hr class="bar-hr">
                    <div class="vaccine-detail">
                        <p>หมายเลข : <?php echo $vaccine['id_vac']; ?></p>
                        <p>ฉีดโดยหน่วยงาน : <?php echo $vaccine['agency_vac']; ?></p>
                    </div>
                </div>
                <br> <br> <br>
            <?php endforeach; ?>
        <?php endif; ?>
    </div>
</div>
</body>

</html>
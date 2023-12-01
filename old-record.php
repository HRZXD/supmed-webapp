<?php

require_once "layout/header.php";
require_once "database/controller.php";
require_once "database/connect.php";

$userID = $_GET["user_id"];
$result = $controller->getDetails($userID);
// print_r($result);
?>
    <br />
    <br />
    <div class="old-record-contain">
      <div class="text-header">
        <p class="text-in-contain">ประวัติผู้ป่วย</p>
        <span></span>
      </div>
      <br/>
      <p class="text-in-contain">ชื่อผู้ป่วย</p>
      <div class="fullname-data">
        <input type="text" class="data" disabled value="<?php echo $result['fname'];?>"/>
        <input type="text" class="data" disabled value="<?php echo $result['lname'];?>"/>
      </div>
      <br />
      <div class="d-w-h">
        <div>
          <p class="text-in-contain" >วัน/เดือน/ปี ที่เกิด</p>
          <input type="text" class="data" disabled value="<?php echo $result['birthday'];?>"/>
        </div>
        <div>
          <p class="text-in-contain">น้ำหนัก</p>
          <div class="display-d-w-h">
            <input type="text" class="data-w-h" disabled value="<?php echo $result['weight'];?>"/>
            <p style="margin: 0%" class="text-in-contain" >กิโลกรัม</p>
          </div>
        </div>
        <div>
          <p class="text-in-contain">ส่วนสูง</p>
          <div class="display-d-w-h">
            <input type="text" class="data-w-h" disabled value="<?php echo $result['height'];?>"/>
            <p style="margin: 0%" class="text-in-contain">เซนติเมตร</p>
          </div>
        </div>
      </div>
      <br />
      <div class="display-deails">
        <div>
          <p class="text-in-contain">วันที่เข้ารับการรักษาครั้งล่าสุด</p>
          <input type="text" class="data" disabled value="<?php echo $result['day_latest'];?>"/>
        </div>
        <div>
          <p class="text-in-contain">โรงพยาบาล</p>
          <input type="text" class="data" disabled value="<?php echo $result['hs_name'];?>"/>
        </div>
        <div>
          <p class="text-in-contain">แผนก</p>
          <input type="text" class="data" disabled value="<?php echo $result['department'];?>"/>
        </div>
        <div>
          <p class="text-in-contain">แพทย์ผู้ดูแล</p>
          <input type="text" class="data" disabled value="<?php echo $result['doc_name'];?>"/>
        </div>
        <div>
          <p class="text-in-contain">หมายเลขบัตรของแพทย์</p>
          <input type="text" class="data" disabled value="<?php echo $result['doc_id'];?>"/>
        </div>
        <div>
          <p class="text-in-contain">สัญญาณชีพจร</p>
          <input type="text" class="data" disabled value="<?php echo $result['pulse'];?>"/>
        </div>
      </div>
      <br />
      <div>
        <p class="text-in-contain">ผลการวินิจฉัย</p>
        <textarea name="ผลการวินิจฉัย" cols="30" rows="10" class="data-b" disabled ><?php echo $result['results'];?></textarea>
      </div>
      <div>
        <p class="text-in-contain">การรับยา</p>
        <textarea name="การรับยา" cols="30" rows="10" class="data-b" disabled><?php echo $result['med_recieve'];?></textarea>
      </div>
      <br/>
      <div class="display-deails">
        <div>
          <p class="text-in-contain">ผู้จัดยา</p>
          <input type="text" class="data" disabled/ value="<?php echo $result['meder_name'];?>">
        </div>
        <div>
          <p class="text-in-contain">หมายเลขของผู้จัดยา</p>
          <input type="text" class="data" disabled/ value="<?php echo $result['meder_id'];?>">
        </div>
      </div>
      <br />
      <div class="button-for-seedata">
        <button class="button-for-clickdata">ผล Lab</button>
        <button class="button-for-clickdata">ผล X-Ray</button>
        <button class="button-for-clickdata">ผล CT Scan</button>
      </div>
      <br />
      <div class="display-history">
        <div>
          <p class="text-in-contain">ประวัติการรักษา</p>
          <div class="history">
            <button class="button-for-clickdata">การฉีดวัคซีน</button>
            <button class="button-for-clickdata">การรักษา</button>
          </div>
        </div>
        <div>
          <p class="text-in-contain">การนัดหมาย</p>
          <input type="text" class="data" disabled value="<?php echo $result['appointment'];?>"/>
        </div>
      </div>
      <br />
      <div>
        <p>การติดตามอาการ</p>
        <textarea name="การติดตามอาการ" cols="30" rows="10" class="data-b" disabled><?php echo $result['tracking'];?></textarea>
      </div>
      <br />
      <div>
        <p class="text-in-contain">ยาอันตราย</p>
        <textarea name="ยาอันตราย" cols="30" rows="10" class="data-b" disabled><?php echo $result['danger_med'];?></textarea>
      </div>
      <br />
      <div>
        <p class="text-in-contain">การทานยาต่อเนื่อง</p>
        <textarea name="การทานยาต่อเนื่อง" cols="30" rows="10" class="data-b" disabled><?php echo $result['med_continuous'];?></textarea>
      </div>
    </div>
</body>
</html>
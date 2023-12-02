<?php

require_once "layout/header.php";
require_once "layout/check_admin.php";

?>

<div class="container-record">
  <div class="text-header">
    <h3>กรอกประวัติผู้ป่วย</h3>
    <span></span>
  </div>
  <p>ชื่อผู้ป่วย</p>
  <div class="input-n">
    <input type="text" id="name-in" class="in-n" disabled>
    <input type="text" id="sur-in" class="in-n" disabled>
  </div>
  <div class="date-field">
    <div class="date-in">
      <div class="input-d">
        <p>วัน/เดือน/ปี ที่เกิด</p>
        <input type="text" id="date" class="in-dmy" disabled>
      </div>
      <div class="input-d">
        <p>น้ำหนัก</p>
        <input type="text" id="widht" class="in-d" disabled>
        <label for="date">กิโลกรัม</label>
      </div>
      <div class="input-d">
        <p>ส่วนสูง</p>
        <input type="text" id="height" class="in-d" disabled>
        <label for="date">เซนติเมตร</label>
      </div>
    </div>
  </div>
  <div class="disease-field">
    <div class="disease-in">
      <p>โรคประจำตัว/อาการ</p>
      <textarea name="text" id="disease" cols="75%" rows="7" disabled class="textarea-dis"></textarea>
    </div>
  </div>
  <div class="history-m-field">
    <p>ประวัติการเเพ้</p>
    <div class="history-m-in">
      <div>
        <p>ยาที่เเพ้</p>
        <input type="text" id="med" class="in-m" disabled>
      </div>
      <div>
        <p>อาหารที่เเพ้</p>
        <input type="text" id="food" class="in-m" disabled>
      </div>
    </div>
  </div>

  <div class="treatment-field">
    <div class="treatment-in">
      <p>สิทธิการรักษา</p>
      <input type="text" id="treatment" class="in-t" disabled>
    </div>
  </div>
  <center><a href="treat-user.php"><input type="submit" name="submit" value="ไปหน้าถัดไป" class="btn btn-outline-success mt-3"></a></center>
</div>
</body>
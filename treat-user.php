<?php

require_once "layout/header.php";

?>
<br>
<br>
<br>
<div class="contain-treat">
        <form>
            <div class="top-con">
                    <p class="text-main">กรอกข้อมูลคนไข้ส่วนการรักษา</p>
            </div>
            <div class="sub-container-treat">
                <div>
                    <p class="tag-p-alls">ส่งตัวไปที่แผนกเพื่อรักษา</p>
                    <div class="select-choice">
                        <select class="option-in-selection">
                            <option></option>
                            <option></option>
                        </select>
                        <select class="option-in-selection">
                            <option></option>
                            <option></option>
                        </select>
                        <select class="option-in-selection">
                            <option></option>
                            <option></option>
                        </select>
                    </div>
                </div>
                <br>
                <div>
                    <p class="tag-p-alls">ส่งตัวเพื่อรับยา/เข้าพบจิตเวช</p>
                    <div class="div-display-flex">
                        <div class="icon-for-input"></div>
                        <div class="icon-for-input"></div>
                    </div>
                </div>
                <br>
                <div class="div-display-flex">
                    <div>
                        <p>การวินิจฉัย</p>
                        <textarea name="data-label" id="" cols="30" rows="10" class="data-label"></textarea>
                    </div>
                    <div>
                        <p class="tag-p-alls">วันที่นัดหมาย</p>
                        <div class="D-M-Y">
                            <input type="text" class="dmy" value="DD">
                            <input type="text" class="dmy" value="MM">
                            <input type="text" class="dmy" value="YEAR">
                        </div>
                    </div>
                </div>
                <br>
                <div>
                    <p class="tag-p-alls">อาการ</p>
                    <textarea name="data-label" id="" cols="30" rows="10" class="data-label"></textarea>
                </div>
                <br>
                <div class="lab">
                    <div class="flex-contain">
                        <div>
                            <p class="result-import">ผล CT Scan</p>
                            <p class="result-import">ผล X-Ray</p>
                            <p class="result-import">ผล Lab</p>
                        </div>
                        <div>
                            <p class="result-import">+</p>
                            <p class="result-import">+</p>
                            <p class="result-import">+</p>
                        </div>
                    </div>
                </div>
                <br>
                <p class="tag-p-alls">การจ่ายยา</p>
                <div class="div-display-flex">
                    <div>
                        <p class="tag-p-alls">ชื่อยา</p>
                        <input type="text" value="สุดหล่อ" class="drug-name">
                    </div>
                    <div>
                        <p class="tag-p-alls">จำนวนยา</p>
                        <div class="div-display-flex">
                            <input type="text" value="สุดหล่อ" class="drug-quantity">
                            <p class="tag-p-alls">+</p>
                        </div>
                    </div>
                </div>
            </div>
            <input type="submit" name="submit" value="ยืนยันและส่ง" class="btn btn-success btn-custom-success">
        </form>
        <br> <br> <br>
    </div>
</body>
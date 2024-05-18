import React from "react";
import "./data.css";

function Data() {
  return (
    <div className="data-container">
      <h1 className="search-engine">ค้นหาประวัติผู้ป่วย</h1>
      <form action="">
        <input type="text" placeholder="กรอกชื่อผู้ป่วย" />
        <button type="submit">ค้นหาประวัติ</button>
      </form>
      <div className="record-details">
        <h4 className="title-details">ประวัติผู้ป่วย</h4>
        <p className="text-in-contain">ชื่อผู้ป่วย</p>
        <div className="fullname-data">
          <input type="text" className="data" disabled value="" />
          <input type="text" className="data" disabled value="" />
        </div>
        <br />
        <div className="d-w-h">
          <div>
            <p className="text-in-contain">วัน/เดือน/ปี ที่เกิด</p>
            <input type="text" className="data" disabled value="" />
          </div>
          <div>
            <p className="text-in-contain">น้ำหนัก</p>
            <div className="display-d-w-h">
              <input type="text" className="data-w-h" disabled value="" />
              <p className="text-in-contain">กิโลกรัม</p>
            </div>
          </div>
          <div>
            <p className="text-in-contain">ส่วนสูง</p>
            <div className="display-d-w-h">
              <input type="text" className="data-w-h" disabled value="" />
              <p className="text-in-contain">เซนติเมตร</p>
            </div>
          </div>
        </div>
        <br />
        <div className="display-details">
          <div>
            <p className="text-in-contain">วันที่เข้ารับการรักษาครั้งล่าสุด</p>
            <input type="text" className="data" disabled value="" />
          </div>
          <div>
            <p className="text-in-contain">โรงพยาบาล</p>
            <input type="text" className="data" disabled value="" />
          </div>
          <div>
            <p className="text-in-contain">แผนก</p>
            <input type="text" className="data" disabled value="" />
          </div>
          <div>
            <p className="text-in-contain">แพทย์ผู้ดูแล</p>
            <input type="text" className="data" disabled value="" />
          </div>
          <div>
            <p className="text-in-contain">หมายเลขบัตรของแพทย์</p>
            <input type="text" className="data" disabled value="" />
          </div>
          <div>
            <p className="text-in-contain">สัญญาณชีพจร</p>
            <input type="text" className="data" disabled value="" />
          </div>
        </div>
        <br />
        <div>
          <p className="text-in-contain">ผลการวินิจฉัย</p>
          <textarea
            name="diagnosis"
            cols="30"
            rows="10"
            className="data-b"
            disabled
          ></textarea>
        </div>
        <div>
          <p className="text-in-contain">การรับยา</p>
          <textarea
            name="medication"
            cols="30"
            rows="10"
            className="data-b"
            disabled
          ></textarea>
        </div>
        <br />
        <div className="display-details">
          <div>
            <p className="text-in-contain">ผู้จัดยา</p>
            <input type="text" className="data" disabled value="" />
          </div>
          <div>
            <p className="text-in-contain">หมายเลขของผู้จัดยา</p>
            <input type="text" className="data" disabled value="" />
          </div>
        </div>
        <br />
        <div className="button-for-seedata">
          <button className="button-for-clickdata">ผล Lab</button>
          <button className="button-for-clickdata">ผล X-Ray</button>
          <button className="button-for-clickdata">ผล CT Scan</button>
        </div>
        <br />
        <div className="display-history">
          <div>
            <p className="text-in-contain">ประวัติการรักษา</p>
            <div className="history">
              <form action="">
                <input type="hidden" name="user_id" />
                <button className="button-for-clickdata">การฉีดวัคซีน</button>
              </form>
              <button className="button-for-clickdata">การรักษา</button>
            </div>
          </div>
          <div>
            <p className="text-in-contain">การนัดหมาย</p>
            <input type="text" className="data" disabled value="" />
          </div>
        </div>
        <br />
        <div>
          <p>การติดตามอาการ</p>
          <textarea
            name="follow-up"
            cols="30"
            rows="10"
            className="data-b"
            disabled
          ></textarea>
        </div>
        <br />
        <div>
          <p className="text-in-contain">ยาอันตราย</p>
          <textarea
            name="dangerous-medication"
            cols="30"
            rows="10"
            className="data-b"
            disabled
          ></textarea>
        </div>
        <br />
        <div>
          <p className="text-in-contain">การทานยาต่อเนื่อง</p>
          <textarea
            name="continuous-medication"
            cols="30"
            rows="10"
            className="data-b"
            disabled
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default Data;

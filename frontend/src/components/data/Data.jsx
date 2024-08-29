import React from "react";
import "./data.css";
import { TextInput, Button } from "flowbite-react";

function Data() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      {/* Search Section */}
      <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6 mb-10">
        <h2 className="text-2xl font-semibold text-center mb-6">
          ค้นหาประวัติผู้ป่วย
        </h2>
        <div className="flex flex-col items-center">
          <input
            type="text"
            placeholder="ID CARD NUMBER"
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <button className="mt-4 ml-4 px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
            ค้นหาประวัติ
          </button>
        </div>
      </div>

      {/* Patient Details Section */}
      <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-8">
        <div className="bg-gray-50 p-6 rounded-lg shadow-inner">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">ชื่อผู้ป่วย</label>
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">นามสกุล</label>
              <input
                type="text"
                placeholder="Surname"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">วัน/เดือน/ปี เกิด</label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">น้ำหนัก (กิโลกรัม)</label>
              <input
                type="number"
                placeholder="Weight"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">ส่วนสูง (เซนติเมตร)</label>
              <input
                type="number"
                placeholder="Height"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">
                วันที่เข้ารับการรักษาครั้งล่าสุด
              </label>
              <input
                type="date"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">โรงพยาบาล</label>
              <input
                type="text"
                placeholder="Hospital"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">แผนก</label>
              <input
                type="text"
                placeholder="Department"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">แพทย์ผู้ดูแล</label>
              <input
                type="text"
                placeholder="Doctor"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">หมายเลขบัตรของแพทย์</label>
              <input
                type="text"
                placeholder="Doctor's ID"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">สัญญาณชีพ</label>
              <input
                type="text"
                placeholder="Vital Signs"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">ผลการวินิจฉัย</label>
            <textarea
              placeholder="Diagnosis results"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              rows="4"
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">การรับยา</label>
              <input
                type="text"
                placeholder="Medication"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">ผู้จ่ายยา</label>
              <input
                type="text"
                placeholder="Pharmacist"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 mb-6">
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              ผล Lab
            </button>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              ผล X-Ray
            </button>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              ผล CT Scan
            </button>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">ประวัติการรักษา</label>
            <textarea
              placeholder="Treatment History"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              rows="4"
            ></textarea>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">การติดตามอาการ</label>
              <input
                type="text"
                placeholder="Follow-up"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">ยาขันตราย</label>
              <input
                type="text"
                placeholder="Dangerous Drugs"
                className="w-full px-4 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">การทานยาต่อเนื่อง</label>
            <textarea
              placeholder="Continuous Medication"
              className="w-full px-4 py-2 border border-gray-300 rounded-md"
              rows="4"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;

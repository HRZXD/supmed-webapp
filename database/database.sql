--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `id` int(11) NOT NULL,
  `u_id` int(13) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`id`, `u_id`, `username`, `password`) VALUES
(4, 126588, 'ณัชฐา จิรพงษ์', 'dbdca49722c8a3deb0094163a7da7c6b'),
(5, 126895, 'วรรณ ชินวัตร', '8ad1a49a58f65d2322322e9a1c47f834');

-- --------------------------------------------------------

--
-- Table structure for table `patient`
--

CREATE TABLE `patient` (
  `user_id` int(13) NOT NULL,
  `fname` varchar(255) NOT NULL,
  `lname` varchar(255) NOT NULL,
  `birthday` date NOT NULL,
  `weight` int(11) NOT NULL,
  `height` int(11) NOT NULL,
  `day_latest` date NOT NULL,
  `hs_name` varchar(255) NOT NULL,
  `department` varchar(255) NOT NULL,
  `doc_name` varchar(255) NOT NULL,
  `doc_id` int(11) NOT NULL,
  `pulse` int(11) NOT NULL,
  `results` text NOT NULL,
  `med_recieve` text NOT NULL,
  `meder_name` varchar(255) NOT NULL,
  `meder_id` int(11) NOT NULL,
  `appointment` text NOT NULL,
  `tracking` text NOT NULL,
  `danger_med` text NOT NULL,
  `med_continuous` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `patient`
--

INSERT INTO `patient` (`user_id`, `fname`, `lname`, `birthday`, `weight`, `height`, `day_latest`, `hs_name`, `department`, `doc_name`, `doc_id`, `pulse`, `results`, `med_recieve`, `meder_name`, `meder_id`, `appointment`, `tracking`, `danger_med`, `med_continuous`) VALUES
(80907, 'สมใจ', 'งามวงวาน', '1991-11-22', 52, 167, '2014-03-01', 'โรงพยาบาลสิริชัย', 'แผนกกระดูกและข้อ', 'วิลาสินี', 200204, 110, 'มีอาการปวดระดับ9 พบกระดูกแตกระเอียด', 'ไอบูโพรเฟน (ibuprofen) 830 mg', 'ยานาธร', 73812, 'กำลังรักษา', 'กำลังรักษา', 'anaphylaxis', 'ไม่มี'),
(700, 'นนทวัตต์', 'หนูแดง', '1990-05-07', 60, 165, '2023-12-03', 'โรงพยาบาลวรันยากรณ์', 'แผนกศัลยกรรม', 'องอาจ', 99999, 143, 'มีอาการปวดบริเวณอัณฑะ มีอาการบวมอย่างมาก', 'ไม่ได้จ่ายยา', '-', 0, 'กำลังรักษา', 'กำลังรักษา', 'แพ้ยาสลบ (Malignant Hyperthermia)', 'ไม่มี');

-- --------------------------------------------------------

--
-- Table structure for table `vaccine`
--

CREATE TABLE `vaccine` (
  `user_id` int(13) NOT NULL,
  `nm_vac` text NOT NULL,
  `num_vac` int(11) NOT NULL,
  `date_vac` text NOT NULL,
  `id_vac` int(11) NOT NULL,
  `agency_vac` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `vaccine`
--

INSERT INTO `vaccine` (`user_id`, `nm_vac`, `num_vac`, `date_vac`, `id_vac`, `agency_vac`) VALUES
(80907, 'GARDASIL 9', 1, '2014-3-1', 11101, 'โรงพยาบาลสิริชัย'),
(700, 'พิษสุนัขบ้า(PCECV)', 1, '2018-10-6', 489592, 'โรงพยาบาลสีแดง'),
(700, 'พิษสุนัขบ้า(PCECV)', 2, '2019-10-6', 481526, 'โรงพยาบาลสีแดง'),
(700, 'พิษสุนัขบ้า(PCECV)', 3, '2020-10-9', 659299, 'โรงพยาบาลสีแดง'),
(700, 'พิษสุนัขบ้า(PCECV)', 4, '2021-11-6', 848952, 'โรงพยาบาลสีแดง'),
(700, 'พิษสุนัขบ้า(PCECV)', 5, '2022-10-6', 594848, 'โรงพยาบาลสีแดง'),
(700, 'พิษสุนัขบ้า(PCECV)', 6, '2023-12-6', 696969, 'โรงพยาบาลสีแดง');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
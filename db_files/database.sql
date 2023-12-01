CREATE TABLE `doctor` (
  `id` int(11) NOT NULL,
  `u_id` int(13) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Users For Test password 123456
--

INSERT INTO `doctor` (`id`, `u_id`, `username`, `password`) VALUES
(1, 125, 'admin2', 'd39d9979f71ac0f80759ddcdcd2309ed');

--
-- Another table
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
(12345, 'Johna', 'Cenda', '1990-10-15', 90, 186, '2023-01-04', 'Hospital', 'lapdwa', 'Janea', 4564, 69, 'adsdjkasjdkwioajidsj', 'mdkasjiasjdioasjidas', 'Janea', 14868, '2024-12-15', 'akosdoadsdasd', 'asdasdasdasd', 'ufahuenfjhauidfh');
COMMIT;
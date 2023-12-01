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
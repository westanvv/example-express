-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: mariadb:3306
-- Generation Time: Oct 24, 2017 at 07:57 PM
-- Server version: 10.2.8-MariaDB-10.2.8+maria~jessie
-- PHP Version: 7.0.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `example-db`
--
CREATE DATABASE IF NOT EXISTS `example-db` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `example-db`;

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `msg` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `title`, `msg`) VALUES
(1, 'Brunch this weekend?', 'I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?'),
(2, 'Summer BBQ', 'Wish I could come, but I&apos;m out of town this weekend.'),
(3, 'Oui oui', 'Do you have Paris recommendations? Have you ever been?'),
(4, 'Birdthday gift', 'Do you have any ideas what we can get Heidi for her birthday? How about a pony?'),
(5, 'Recipe to try', 'We should eat this: grated squash. Corn and tomatillo tacos.'),
(6, 'Brendan Lim', 'I&apos;ll be in your neighborhood doing errands this weekend. Do you want to grab brunch?');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

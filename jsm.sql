-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: jsm
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `t_department`
--

DROP TABLE IF EXISTS `t_department`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_department` (
  `id` char(255) NOT NULL,
  `department_code` varchar(255) NOT NULL,
  `department_name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_department`
--

LOCK TABLES `t_department` WRITE;
/*!40000 ALTER TABLE `t_department` DISABLE KEYS */;
INSERT INTO `t_department` VALUES ('3afd9fdb-6825-4fb7-89fc-eb380734e082','FI','Finance'),('6c001bcb-041e-4a0e-8f89-9a8c58036633','OP','Operational'),('8b08e52c-a7f3-4a2d-b514-b3a56374d4be','Admin','Administration'),('94525272-9974-4531-8818-2ca7879d61a0','IT','Information and Technology');
/*!40000 ALTER TABLE `t_department` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_employee`
--

DROP TABLE IF EXISTS `t_employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_employee` (
  `id` char(255) NOT NULL,
  `employee_name` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `phone_number` varchar(20) NOT NULL,
  `department_id` char(255) DEFAULT NULL,
  `level_id` char(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `department_id` (`department_id`),
  KEY `level_id` (`level_id`),
  CONSTRAINT `t_employee_ibfk_1` FOREIGN KEY (`department_id`) REFERENCES `t_department` (`id`),
  CONSTRAINT `t_employee_ibfk_2` FOREIGN KEY (`level_id`) REFERENCES `t_level` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_employee`
--

LOCK TABLES `t_employee` WRITE;
/*!40000 ALTER TABLE `t_employee` DISABLE KEYS */;
INSERT INTO `t_employee` VALUES ('085d4ec1-9d22-4fc3-8fa4-f0f205dd62ce','Nama Karyawan','username','email','$2b$10$Ze1k3XvA4rjaXFgcDHo8BejZvYL.1r.E2F2X.RwQZAmSjzVsLFCye','6221','94525272-9974-4531-8818-2ca7879d61a0','31538b4b-8942-497f-8066-33db39262d63','2023-07-31 04:50:48','2023-07-31 04:50:48'),('1f192df8-6cc4-4e47-830b-46d45c065ad0','Admin Staff','adminst','staff@afmin.com','$2b$10$LkskkCdZb/AE69VaXUlz8OobQP8Pit0uL1DnCSJdQA51bTSrxY99y','6221','8b08e52c-a7f3-4a2d-b514-b3a56374d4be','7e4272f5-8af6-450b-b752-6db80ca6b1b8','2023-07-31 10:30:51','2023-07-31 10:30:51'),('3556a353-7442-4e46-ab98-0c9b2b6c5fbf','Tyas Susanto','tyasusan','tyas@mail.com','$2b$10$Pc6qf1/oPKLIGJwrlCcf/.PGUundXW4Vi3cOPzI64Lv5vtBHl8Ojq','6221','94525272-9974-4531-8818-2ca7879d61a0','7e4272f5-8af6-450b-b752-6db80ca6b1b8','2023-07-31 10:21:24','2023-07-31 10:21:24'),('5a9f3a6a-3ac5-40d6-8654-f4ddab506653','Operational Direktur','opdir','op@director.com','$2b$10$iN7MWaoFfOALdxIYUCXCdu1Qthk8KyKFr7.lxp9si63q18xfSpy4C','6221','6c001bcb-041e-4a0e-8f89-9a8c58036633','f65b30b2-ed74-4931-b5b4-c425b4f82b6b','2023-07-31 10:32:42','2023-07-31 10:32:42'),('eb2b7349-3042-4302-93e1-549b3291e090','Manager Finance','mfinance','manager@finance.com','$2b$10$T.oOkn5NAA6ROL.twSIuLu3WoHBXE3lZ8xevYAFusFctWgJF4UtV6','6221','3afd9fdb-6825-4fb7-89fc-eb380734e082','5d18fd55-a4ac-4d0b-b22c-44c52b5562c5','2023-07-31 10:27:07','2023-07-31 10:27:07');
/*!40000 ALTER TABLE `t_employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `t_level`
--

DROP TABLE IF EXISTS `t_level`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `t_level` (
  `id` varchar(255) NOT NULL,
  `level_code` varchar(255) NOT NULL,
  `level_name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `t_level`
--

LOCK TABLES `t_level` WRITE;
/*!40000 ALTER TABLE `t_level` DISABLE KEYS */;
INSERT INTO `t_level` VALUES ('31538b4b-8942-497f-8066-33db39262d63','ADM','Administrator'),('5d18fd55-a4ac-4d0b-b22c-44c52b5562c5','MGR','Manager'),('7e4272f5-8af6-450b-b752-6db80ca6b1b8','STF','Staff'),('f65b30b2-ed74-4931-b5b4-c425b4f82b6b','DRT','Director');
/*!40000 ALTER TABLE `t_level` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-31 17:51:02

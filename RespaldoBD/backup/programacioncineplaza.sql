-- MariaDB dump 10.17  Distrib 10.4.11-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: programacioncineplaza
-- ------------------------------------------------------
-- Server version	10.4.11-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `distribuidor`
--

DROP TABLE IF EXISTS `distribuidor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `distribuidor` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `responsable` varchar(50) DEFAULT NULL,
  `direccion` varchar(60) DEFAULT NULL,
  `telefono` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `distribuidor`
--

LOCK TABLES `distribuidor` WRITE;
/*!40000 ALTER TABLE `distribuidor` DISABLE KEYS */;
INSERT INTO `distribuidor` VALUES (7,'ANDES FILM','LA PAZ','MARIBEL PEREZ','25144758'),(8,'DIAMOND FILMS','COCHABAMABA','CARLOS','3558475'),(9,'MANFER FILMS','SANTA CRUZ 2° ANILLO','FERNANDA','29519195'),(10,'DISTRIFILMS','XXXX','XXXXXX','0000000'),(11,'MEDIA WORLD','SANTA CRUZ','ROLANDO','000000000');
/*!40000 ALTER TABLE `distribuidor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pelicula`
--

DROP TABLE IF EXISTS `pelicula`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `pelicula` (
  `IDPeli` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) DEFAULT NULL,
  `formato` varchar(5) DEFAULT NULL,
  `subDob` varchar(12) DEFAULT NULL,
  `duracion` int(11) DEFAULT NULL,
  `clasificacion` varchar(30) DEFAULT NULL,
  `idDistro` int(11) DEFAULT NULL,
  `nrosemana` int(11) NOT NULL DEFAULT 1,
  PRIMARY KEY (`IDPeli`),
  KEY `idDistro` (`idDistro`),
  CONSTRAINT `pelicula_ibfk_1` FOREIGN KEY (`idDistro`) REFERENCES `distribuidor` (`ID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pelicula`
--

LOCK TABLES `pelicula` WRITE;
/*!40000 ALTER TABLE `pelicula` DISABLE KEYS */;
INSERT INTO `pelicula` VALUES (-1,'seleccione...',NULL,NULL,NULL,NULL,NULL,1),(5,'SONIC','2D','DOBLADO',105,'APTO PARA TODO PUBLICO',7,1),(6,'SONIC','3D','DOBLADO',105,'APTO PARA TODO PUBLICO',7,1),(7,'SCOOB','3D','DOBLADO',10,'APTO PARA TODO PUBLICO',7,1),(8,'SCOOB','2D','DOBLADO',10,'APTO PARA TODO PUBLICO',7,1),(9,'TENET','2D','DOBLADO',100,'MAYORES DE 14 AÑOS',7,1),(10,'TENET','3D','DOBLADO',100,'APTO PARA TODO PUBLICO',7,1);
/*!40000 ALTER TABLE `pelicula` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `peliprogra`
--

DROP TABLE IF EXISTS `peliprogra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `peliprogra` (
  `IDPeli` int(11) NOT NULL,
  `IDProg` int(11) NOT NULL,
  PRIMARY KEY (`IDPeli`,`IDProg`),
  KEY `IDProg` (`IDProg`),
  CONSTRAINT `peliprogra_ibfk_1` FOREIGN KEY (`IDPeli`) REFERENCES `pelicula` (`IDPeli`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `peliprogra_ibfk_2` FOREIGN KEY (`IDProg`) REFERENCES `programacion` (`IDProg`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `peliprogra`
--

LOCK TABLES `peliprogra` WRITE;
/*!40000 ALTER TABLE `peliprogra` DISABLE KEYS */;
INSERT INTO `peliprogra` VALUES (-1,5),(-1,6),(-1,7),(-1,9),(-1,10),(-1,15),(-1,16),(-1,17),(-1,19),(-1,20),(-1,25),(-1,26),(-1,27),(-1,29),(-1,30),(5,8),(5,14),(5,24),(6,2),(6,13),(6,23),(7,12),(7,21),(8,11),(8,18),(9,1),(9,3),(9,4),(9,22),(9,28);
/*!40000 ALTER TABLE `peliprogra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `programacion`
--

DROP TABLE IF EXISTS `programacion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `programacion` (
  `IDProg` int(11) NOT NULL AUTO_INCREMENT,
  `NroSala` int(11) DEFAULT 1,
  `hora` varchar(6) NOT NULL,
  `horafin` varchar(6) NOT NULL,
  `fechaInicio` date NOT NULL,
  `fechaFinal` date DEFAULT NULL,
  `tep` int(11) NOT NULL DEFAULT 0,
  PRIMARY KEY (`IDProg`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `programacion`
--

LOCK TABLES `programacion` WRITE;
/*!40000 ALTER TABLE `programacion` DISABLE KEYS */;
INSERT INTO `programacion` VALUES (1,1,'10:00','11:40','2020-10-15','2020-10-21',10),(2,1,'11:50','13:35','2020-10-15','2020-10-21',20),(3,1,'13:55','15:35','2020-10-15','2020-10-21',10),(4,1,'15:45','17:25','2020-10-15','2020-10-21',20),(5,1,'19:30','25:25','2020-10-15','2020-10-21',0),(6,1,'25:25','25:25','2020-10-15','2020-10-21',0),(7,1,'25:25','25:25','2020-10-15','2020-10-21',0),(8,1,'17:45','19:30','2020-10-15','2020-10-21',0),(9,1,'25:25','25:25','2020-10-15','2020-10-21',0),(10,1,'25:25','25:25','2020-10-15','2020-10-21',0),(11,2,'10:30','10:40','2020-10-15','2020-10-21',20),(12,2,'11:00','11:10','2020-10-15','2020-10-21',10),(13,2,'11:20','13:05','2020-10-15','2020-10-21',20),(14,2,'13:25','15:10','2020-10-15','2020-10-21',30),(15,2,'15:50','25:25','2020-10-15','2020-10-21',0),(16,2,'25:25','25:25','2020-10-15','2020-10-21',0),(17,2,'25:25','25:25','2020-10-15','2020-10-21',0),(18,2,'15:40','15:50','2020-10-15','2020-10-21',0),(19,2,'25:25','25:25','2020-10-15','2020-10-21',0),(20,2,'25:25','25:25','2020-10-15','2020-10-21',0),(21,3,'10:30','10:40','2020-10-15','2020-10-21',30),(22,3,'11:10','12:50','2020-10-15','2020-10-21',30),(23,3,'13:20','15:05','2020-10-15','2020-10-21',30),(24,3,'15:35','17:20','2020-10-15','2020-10-21',10),(25,3,'19:10','25:25','2020-10-15','2020-10-21',0),(26,3,'25:25','25:25','2020-10-15','2020-10-21',0),(27,3,'25:25','25:25','2020-10-15','2020-10-21',0),(28,3,'17:30','19:10','2020-10-15','2020-10-21',0),(29,3,'25:25','25:25','2020-10-15','2020-10-21',0),(30,3,'25:25','25:25','2020-10-15','2020-10-21',0);
/*!40000 ALTER TABLE `programacion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(60) NOT NULL,
  `Email` varchar(60) NOT NULL,
  `Password` varchar(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'Jose','xxabyssxx@gmail.com','$2y$10$hwU5Ia.lbrZRs5lZAQc9NeMSI6QdkHicw.yT1ygz1rFyMOQ15Fs1O'),(4,'admin','admin@admin','$2y$10$9SvApL1xqtoBGVHDeKcKz.fayVvul8nLJl0qlmJhSUlXHdmNvGxJu'),(5,'Mario','admin','$2y$10$mO64Fg0XomXm3ghnPumjWuyfG0rD0QHSAQlBaRpJvXgm.Ek29w7/6');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-10-22 13:08:26

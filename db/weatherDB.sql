CREATE DATABASE  IF NOT EXISTS `weatherdb` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `weatherdb`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: weatherdb
-- ------------------------------------------------------
-- Server version	5.7.18-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cities`
--

DROP TABLE IF EXISTS `cities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cities` (
  `idcity` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `country` varchar(100) DEFAULT NULL,
  `countryCode` varchar(3) NOT NULL,
  `imgURL` longtext,
  PRIMARY KEY (`idcity`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cities`
--

LOCK TABLES `cities` WRITE;
/*!40000 ALTER TABLE `cities` DISABLE KEYS */;
INSERT INTO `cities` VALUES (625144,'Minsk','Belarus','BLR','img/minsk.jpg'),(703448,'Kiev','Ukrain','UKR','img/kiev.jpg'),(2643744,'London','Great Britain','GBR','img/london.jpg'),(2950159,'Berlin','Germany','DEU','img/berlin.jpg');
/*!40000 ALTER TABLE `cities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `info`
--

DROP TABLE IF EXISTS `info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `info` (
  `idinfo` int(11) NOT NULL AUTO_INCREMENT,
  `date` varchar(45) NOT NULL,
  `avarage_temp` varchar(45) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `idcity` int(11) DEFAULT '0',
  `imageUrl` longtext,
  `iduser` int(11) DEFAULT '0',
  PRIMARY KEY (`idinfo`),
  KEY `id_city_idx` (`idcity`),
  KEY `id_user_idx` (`iduser`),
  CONSTRAINT `id_city` FOREIGN KEY (`idcity`) REFERENCES `cities` (`idcity`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `id_user` FOREIGN KEY (`iduser`) REFERENCES `users` (`iduser`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `info`
--

LOCK TABLES `info` WRITE;
/*!40000 ALTER TABLE `info` DISABLE KEYS */;
INSERT INTO `info` VALUES (1,'18-05-2017','15','GREAT',NULL,NULL,NULL),(2,'19-05-2017','20','SUPER',NULL,NULL,NULL),(3,'27/07/2017','12','Bad, really bad',2643744,NULL,NULL),(4,'15/08/2017','12','dsfsdfs',2643744,NULL,NULL),(5,'21/08/2017','12','Description',625144,NULL,NULL),(6,'05/09/2017','12','Dsadsafds',2643744,'tulips.jpg',NULL);
/*!40000 ALTER TABLE `info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `iduser` int(11) NOT NULL,
  `username` varchar(20) NOT NULL,
  `password` char(60) NOT NULL,
  PRIMARY KEY (`iduser`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'qwerty','123456'),(2,'123','$2a$10$lRU1rKuEJI9V9C7cmru2VutkLEnmWRnvf.N7Kg/S/Juy84ocLShpi'),(3,'abc','$2a$10$hRxA7ud309wjucV7DMtZGeCB.7pOqYg7.j6.eLxkWP/rnHH2HunFK'),(4,'katya','$2a$10$mKJEcWSFf524xtxFeyJZ8OuCFPPFmxfmZEyxGr75zMVOKzfDT2SHO'),(8,'admin','$2a$10$4kMkx.ApA7OsG1rsRu.rHOCiywL7xJ5b9eapQOtQLWiPUoF6SRZoi'),(9,'qulix','$2a$10$fwisThWlbiRex65SRYWs9eegAY3OeR.euVaQy8gC6L7Uoaat5/.Gi'),(10,'johny_depp','$2a$10$cI4XciTWMKZYDZXs/gVCuu4J55IefJZOdYgm1W8onEN90AlWNOTAC');
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

-- Dump completed on 2017-09-07 12:29:49

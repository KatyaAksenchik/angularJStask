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
  PRIMARY KEY (`idinfo`),
  KEY `id_city_idx` (`idcity`),
  CONSTRAINT `id_city` FOREIGN KEY (`idcity`) REFERENCES `cities` (`idcity`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `info`
--

LOCK TABLES `info` WRITE;
/*!40000 ALTER TABLE `info` DISABLE KEYS */;
INSERT INTO `info` VALUES (1,'18-05-2017','15','GREAT',NULL,NULL),(2,'19-05-2017','20','SUPER',NULL,NULL),(3,'27/07/2017','12','Bad, really bad',2643744,NULL),(4,'15/08/2017','12','dsfsdfs',2643744,NULL),(5,'21/08/2017','12','Description',625144,NULL),(6,'05/09/2017','12','Dsadsafds',2643744,'tulips.jpg'),(7,'06/09/2017','12','sdsdfsdf',703448,'[object Object]'),(8,'11/09/2017','12','qwwdeqw',2643744,'hydrangeas.jpg'),(9,'05/09/2017','21','dfsdfdfsdf',625144,'desert.jpg'),(10,'05/09/2017','21','sdfsdfs',625144,'penguins.jpg'),(11,'05/09/2017','12','asdasfas',2643744,'penguins.jpg'),(12,'05/09/2017','13','dfsdfs',625144,'penguins.jpg');
/*!40000 ALTER TABLE `info` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-09-05 16:06:04

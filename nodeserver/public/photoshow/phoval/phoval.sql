/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : vueapp

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-08-10 16:44:15
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `phoval`
-- ----------------------------
DROP TABLE IF EXISTS `phoval`;
CREATE TABLE `phoval` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `img1` varchar(255) NOT NULL,
  `img2` varchar(255) NOT NULL,
  `img3` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of phoval
-- ----------------------------
INSERT INTO `phoval` VALUES ('1', 'http://116.62.108.19/public/photoshow/phoval/gf1_1.jpg', 'http://116.62.108.19/public/photoshow/phoval/gf1_2.jpg', 'http://116.62.108.19/public/photoshow/phoval/gf1_3.jpg');
INSERT INTO `phoval` VALUES ('2', 'http://116.62.108.19/public/photoshow/phoval/gf2_1.jpg', 'http://116.62.108.19/public/photoshow/phoval/gf2_2.jpg', 'http://116.62.108.19/public/photoshow/phoval/gf3_3.jpg');
INSERT INTO `phoval` VALUES ('3', 'http://116.62.108.19/public/photoshow/phoval/gf3_1.jpg', 'http://116.62.108.19/public/photoshow/phoval/gf3_2.jpg', 'http://116.62.108.19/public/photoshow/phoval/gf3_3.jpg');
INSERT INTO `phoval` VALUES ('4', 'http://116.62.108.19/public/photoshow/phoval/gf4_1.jpg', 'http://116.62.108.19/public/photoshow/phoval/gf4_2.jpg', 'http://116.62.108.19/public/photoshow/phoval/gf4_3.jpg');
INSERT INTO `phoval` VALUES ('5', 'http://116.62.108.19/public/photoshow/phoval/jz1_1.jpg', 'http://116.62.108.19/public/photoshow/phoval/jz1_2.jpg', 'http://116.62.108.19/public/photoshow/phoval/jz1_3.jpg');
INSERT INTO `phoval` VALUES ('6', 'http://116.62.108.19/public/photoshow/phoval/jz2_1.jpg', 'http://116.62.108.19/public/photoshow/phoval/jz2_2.jpg', 'http://116.62.108.19/public/photoshow/phoval/jz2_3.jpg');
INSERT INTO `phoval` VALUES ('7', 'http://116.62.108.19/public/photoshow/phoval/jz3_1.jpg', 'http://116.62.108.19/public/photoshow/phoval/jz3_2.jpg', 'http://116.62.108.19/public/photoshow/phoval/jz3_3.jpg');
INSERT INTO `phoval` VALUES ('8', 'http://116.62.108.19/public/photoshow/phoval/dm1_1.jpg', 'http://116.62.108.19/public/photoshow/phoval/dm1_2.jpg', 'http://116.62.108.19/public/photoshow/phoval/dm1_3.jpg');
INSERT INTO `phoval` VALUES ('9', 'http://116.62.108.19/public/photoshow/phoval/dm2_1.jpg', 'http://116.62.108.19/public/photoshow/phoval/dm2_2.jpg', 'http://116.62.108.19/public/photoshow/phoval/dm2_3.jpg');
INSERT INTO `phoval` VALUES ('10', 'http://116.62.108.19/public/photoshow/phoval/dm3_1.jpg', 'http://116.62.108.19/public/photoshow/phoval/dm3_2.jpg', 'http://116.62.108.19/public/photoshow/phoval/dm3_3.jpg');

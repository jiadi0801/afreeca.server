/*
Navicat MySQL Data Transfer

Source Server         : afreeca@22306
Source Server Version : 50720
Source Host           : 192.168.182.85:22306
Source Database       : afreeca

Target Server Type    : MYSQL
Target Server Version : 50720
File Encoding         : 65001

Date: 2017-12-13 15:32:00
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `af_project`
-- ----------------------------
DROP TABLE IF EXISTS `af_project`;
CREATE TABLE `af_project` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `proj_id` varchar(100) DEFAULT NULL,
  `proj_name` varchar(200) DEFAULT NULL,
  `desci` text,
  `create_user_id` varchar(100) DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `modify_time` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of af_project
-- ----------------------------

-- ----------------------------
-- Table structure for `af_request`
-- ----------------------------
DROP TABLE IF EXISTS `af_request`;
CREATE TABLE `af_request` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `req_id` varchar(100) DEFAULT NULL,
  `req_name` varchar(200) DEFAULT NULL,
  `req_url` text,
  `req_method` varchar(20) DEFAULT NULL,
  `desci` varchar(200) DEFAULT NULL,
  `formdata` text,
  `content_type` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of af_request
-- ----------------------------

-- ----------------------------
-- Table structure for `af_request_response`
-- ----------------------------
DROP TABLE IF EXISTS `af_request_response`;
CREATE TABLE `af_request_response` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `req_id` varchar(100) DEFAULT NULL,
  `res_id` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of af_request_response
-- ----------------------------

-- ----------------------------
-- Table structure for `af_response`
-- ----------------------------
DROP TABLE IF EXISTS `af_response`;
CREATE TABLE `af_response` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `res_id` varchar(100) DEFAULT NULL,
  `res_name` varchar(200) DEFAULT NULL,
  `desci` text,
  `body` text,
  `status_code` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of af_response
-- ----------------------------

-- ----------------------------
-- Table structure for `af_tag_req`
-- ----------------------------
DROP TABLE IF EXISTS `af_tag_req`;
CREATE TABLE `af_tag_req` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `req_id` varchar(100) DEFAULT NULL,
  `tagname` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COMMENT='api归属哪个tag\r\ntag可以当分组\r\n可以当页面';

-- ----------------------------
-- Records of af_tag_req
-- ----------------------------

-- ----------------------------
-- Table structure for `sys_user`
-- ----------------------------
DROP TABLE IF EXISTS `sys_user`;
CREATE TABLE `sys_user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(100) DEFAULT NULL,
  `username` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `nickname` varchar(100) DEFAULT NULL,
  `erp` varchar(100) DEFAULT NULL,
  `create_time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of sys_user
-- ----------------------------
INSERT INTO `sys_user` VALUES ('2', null, 'public', '4c9184f37cff01bcdc32dc486ec36961', '公开账号', null, '2017-12-13 15:23:29');
INSERT INTO `sys_user` VALUES ('4', null, 'jiadi0801', '6a14918b1096ed3546cdd79eec672a71', 'jiadi0801', 'liujia573', '2017-12-13 15:27:35');

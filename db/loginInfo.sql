DROP DATABASE IF EXISTS login_info;

CREATE DATABASE login_info;

USE login_info;

CREATE TABLE login (
    user_name VARCHAR(30) NOT NULL,
    user_password VARCHAR(40) NOT NULL,
);

INSERT INTO usernames (user_name)
VALUES ("matclar");

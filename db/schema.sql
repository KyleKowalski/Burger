CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
  burger_id int AUTO_INCREMENT,
  burger_name varchar(30) NOT NULL,
  burger_eaten BOOLEAN NOT NULL DEFAULT FALSE,
  burger_date TIMESTAMP NULL,
  PRIMARY KEY(burger_id)
);
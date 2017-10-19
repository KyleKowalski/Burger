CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  eaten BOOLEAN DEFAULT FALSE,
  PRIMARY KEY(id)
);
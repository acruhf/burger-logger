-- Create the burgers_db.
-- Switch to or use the burgers_db.
-- Create a burgers table with these fields:
-- id: an auto incrementing int that serves as the primary key.
-- burger_name: a string.
-- devoured: a boolean.
DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured boolean NOT NULL DEFAULT false,
    PRIMARY KEY (id)
);
DROP DATABASE IF EXISTS rgca_db;
CREATE DATABASE rgca_db;

USE rgca_db;

CREATE TABLE rgca_db (
<<<<<<< HEAD
   id INT AUTO_INCREMENT NOT NULL,
   user_name VARCHAR(255) NOT NULL,
   devoured BOOLEAN DEFAULT false,
   createdAt TIMESTAMP NOT NULL,
   PRIMARY KEY(id)
=======
    id INT AUTO_INCREMENT NOT NULL,
    user_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL,
    PRIMARY KEY(id) 
>>>>>>> master
);
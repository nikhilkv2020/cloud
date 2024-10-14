-- Create the database
CREATE DATABASE simple_website_db;

-- Use the database
USE simple_website_db;

-- Create the 'users' table to store user data
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

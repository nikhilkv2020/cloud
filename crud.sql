INSERT INTO users (name, email)
VALUES ('John Doe', 'john.doe@example.com');

SELECT * FROM users;

UPDATE users
SET email = 'new.email@example.com'
WHERE id = 1;

DELETE FROM users
WHERE id = 1;

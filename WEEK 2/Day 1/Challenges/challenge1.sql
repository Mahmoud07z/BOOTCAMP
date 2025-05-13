DROP TABLE IF EXISTS actors;

CREATE TABLE actors (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    age INT,
    number_oscars INT
);
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES 
    ('Matt', 'Damon', 50, 2),
    ('George', 'Clooney', 60, 3),
    ('Brad', 'Pitt', 55, 1),
    ('Angelina', 'Jolie', 45, 1),
    ('Leonardo', 'DiCaprio', 47, 1);
SELECT * FROM actors;
SELECT COUNT(*) FROM actors;
INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES ('Tom', 'Hanks', NULL, NULL);
SELECT * FROM actors;
SELECT * FROM actors WHERE number_oscars > 2;
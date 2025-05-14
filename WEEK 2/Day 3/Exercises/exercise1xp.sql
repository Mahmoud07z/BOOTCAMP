SELECT * FROM language;
SELECT 
    f.title, 
    f.description, 
    l.name AS language_name
FROM 
    film f
JOIN 
    language l ON f.language_id = l.language_id;
SELECT 
    f.title, 
    f.description, 
    l.name AS language_name
FROM 
    language l
LEFT JOIN 
    film f ON f.language_id = l.language_id;
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Add some films
INSERT INTO new_film (name) VALUES 
('Interstellar'),
('Inception'),
('The Matrix');
CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER REFERENCES language(language_id),
    title VARCHAR(100),
    score INTEGER CHECK (score >= 1 AND score <= 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
SELECT * FROM new_film;
SELECT * FROM language;
INSERT INTO customer_review (film_id, language_id, title, score, review_text)
VALUES
(1, 1, 'Amazing Sci-fi', 9, 'One of the best space films ever.'),
(2, 2, 'Mind-bending Thriller', 10, 'Nolan at his best.');
DELETE FROM new_film WHERE id = 1;
SELECT * FROM customer_review;
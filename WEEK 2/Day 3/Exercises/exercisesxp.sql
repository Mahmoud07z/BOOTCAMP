-- exercise 1
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

-- exercise 2
SELECT * FROM language;
UPDATE film
SET language_id = 2
WHERE film_id IN (1, 2);
INSERT INTO customer (store_id, first_name, last_name, email, address_id, active, create_date)
VALUES (1, 'John', 'Doe', 'john.doe@example.com', 9999, true, NOW());
DROP TABLE IF EXISTS customer_review;
SELECT COUNT(*) AS outstanding_rentals
FROM rental
WHERE return_date IS NULL;
SELECT f.title, f.rental_rate
FROM rental r
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE r.return_date IS NULL
ORDER BY f.rental_rate DESC
LIMIT 30;
SELECT f.title
FROM film f
JOIN film_actor fa ON f.film_id = fa.film_id
JOIN actor a ON fa.actor_id = a.actor_id
WHERE a.first_name = 'Penelope' AND a.last_name = 'Monroe'
  AND f.description ILIKE '%sumo%';
SELECT title
FROM film
WHERE length < 60 AND rating = 'R';
SELECT DISTINCT f.title
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN payment p ON r.rental_id = p.rental_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
  AND p.amount > 4.00
  AND r.rSELECT DISTINCT f.title
FROM customer c
JOIN rental r ON c.customer_id = r.customer_id
JOIN inventory i ON r.inventory_id = i.inventory_id
JOIN film f ON i.film_id = f.film_id
WHERE c.first_name = 'Matthew' AND c.last_name = 'Mahan'
  AND (f.title ILIKE '%boat%' OR f.description ILIKE '%boat%')
ORDER BY f.replacement_cost DESC
LIMIT 1;
eturn_date BETWEEN '2005-07-28' AND '2005-08-01';
SELECT DISTINCT f.film_id, f.title, f.rating
FROM film f
JOIN inventory i ON f.film_id = i.film_id
LEFT JOIN rental r ON i.inventory_id = r.inventory_id
WHERE f.rating IN ('G', 'PG')
  AND (r.return_date IS NOT NULL OR r.rental_id IS NULL);
CREATE TABLE children_waitlist (
    waitlist_id SERIAL PRIMARY KEY,
    film_id INTEGER NOT NULL REFERENCES film(film_id),
    child_name VARCHAR(100) NOT NULL,
    request_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
SELECT
  f.film_id,
  f.title,
  COUNT(w.waitlist_id) AS number_of_waiting_children
FROM film f
JOIN children_waitlist w ON f.film_id = w.film_id
WHERE f.rating IN ('G', 'PG')
GROUP BY f.film_id, f.title
ORDER BY number_of_waiting_children DESC;
INSERT INTO children_waitlist (film_id, child_name) VALUES
(1, 'Alice'),
(1, 'Bob'),
(2, 'Charlie');

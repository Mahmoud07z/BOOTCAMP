-- 1. Select all columns from the "customer" table
SELECT * FROM customer;

-- 2. Display full name using an alias
SELECT first_name || ' ' || last_name AS full_name FROM customer;

-- 3. Get all distinct account creation dates
SELECT DISTINCT create_date FROM customer;

-- 4. Get all customer details ordered by first name descending
SELECT * FROM customer ORDER BY first_name DESC;

-- 5. Get film details ordered by rental rate ascending
SELECT film_id, title, description, release_year, rental_rate
FROM film
ORDER BY rental_rate ASC;

-- 6. Address and phone number of customers living in Texas
SELECT address, phone
FROM address
WHERE district = 'Texas';

-- 7. Movie details where film_id is 15 or 150
SELECT *
FROM film
WHERE film_id IN (15, 150);

-- 8. Check if favorite movie exists
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title = 'Your Favorite Movie'; -- replace with actual title

-- 9. Find movies starting with first 2 letters of your favorite movie
SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title ILIKE 'Yo%'; -- replace 'Yo' with first 2 letters of your title

-- 10. Find 10 cheapest movies
SELECT *
FROM film
ORDER BY rental_rate ASC
LIMIT 10;

-- 11. Find next 10 cheapest movies (without LIMIT bonus)
SELECT *
FROM film f1
WHERE 10 = (
    SELECT COUNT(*)
    FROM film f2
    WHERE f2.rental_rate < f1.rental_rate
)
ORDER BY rental_rate ASC;

-- 12. Join customer and payment tables
SELECT c.first_name, c.last_name, p.amount, p.payment_date
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY c.customer_id;

-- 13. Movies not in inventory
SELECT *
FROM film
WHERE film_id NOT IN (
    SELECT DISTINCT film_id FROM inventory
);

-- 14. Find which city is in which country
SELECT city.city, country.country
FROM city
JOIN country ON city.country_id = country.country_id;

-- 15. Seller performance report
SELECT c.customer_id, c.first_name, c.last_name, p.amount, p.payment_date, p.staff_id
FROM customer c
JOIN payment p ON c.customer_id = p.customer_id
ORDER BY p.staff_id;

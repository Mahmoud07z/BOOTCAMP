import requests
import psycopg2
import random

DB_NAME = "ChallengeDay4"
USER = "postgres"
PASSWORD = "Miles2003"
HOST = "localhost"
PORT = "5432"

try:
    conn = psycopg2.connect(
        dbname=DB_NAME,
        user=USER,
        password=PASSWORD,
        host=HOST,
        port=PORT
    )
    cursor = conn.cursor()
    print("✅ Database connected successfully!")
except Exception as e:
    print("❌ Connection error:", e)
    exit()

create_table_query = '''
CREATE TABLE IF NOT EXISTS countries (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100),
    capital VARCHAR(100),
    flag TEXT,
    subregion VARCHAR(100),
    population BIGINT
);
'''
cursor.execute(create_table_query)
conn.commit()


url = "https://restcountries.com/v3.1/all"
response = requests.get(url)

if response.status_code == 200:
    all_countries = response.json()
    selected = random.sample(all_countries, 10)

    for country in selected:
        name = country.get('name', {}).get('common', 'N/A')
        capital = country.get('capital', ['N/A'])[0]
        flag = country.get('flags', {}).get('png', '')
        subregion = country.get('subregion', 'N/A')
        population = country.get('population', 0)

        cursor.execute('''
            INSERT INTO countries (name, capital, flag, subregion, population)
            VALUES (%s, %s, %s, %s, %s)
        ''', (name, capital, flag, subregion, population))

    conn.commit()
    print("✅ 10 random countries inserted successfully.")
else:
    print("❌ Failed to fetch data from API.")


cursor.close()
conn.close()

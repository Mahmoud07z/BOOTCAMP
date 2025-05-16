#testing
import psycopg2

DB_NAME = "dvdrental"
USER = "postgres"
PASSWORD = "Miles2003"
HOST = "localhost"
PORT = "5432"

try:
    connection = psycopg2.connect(
        dbname=DB_NAME,
        user=USER,
        password=PASSWORD,
        host=HOST,
        port=PORT
    )
    print("Connected successfully!")

    cursor = connection.cursor()
    cursor.execute("SELECT version();")
    result = cursor.fetchone()
    print(result[0])

except Exception as e:
    print("Connection error:")
    try:
        print(str(e))
    except:
        print(str(e).encode('utf-8', errors='ignore').decode('utf-8'))

finally:
    if 'connection' in locals() and connection:
        connection.close()
        print("Connection closed.")

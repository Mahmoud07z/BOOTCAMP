import psycopg2

DB_NAME = "restaurant"
USER = "postgres"
PASSWORD = "Miles2003"
HOST = "localhost"
PORT = "5432"

def get_connection():
    return psycopg2.connect(
        dbname=DB_NAME,
        user=USER,
        password=PASSWORD,
        host=HOST,
        port=PORT
    )

class MenuItem:
    def __init__(self, name, price):
        self.name = name
        self.price = price

    def save(self):
        conn = get_connection()
        cur = conn.cursor()
        cur.execute(
            "INSERT INTO Menu_Items (item_name, item_price) VALUES (%s, %s)",
            (self.name, self.price)
        )
        conn.commit()
        cur.close()
        conn.close()

    def delete(self):
        conn = get_connection()
        cur = conn.cursor()
        cur.execute(
            "DELETE FROM Menu_Items WHERE item_name = %s",
            (self.name,)
        )
        conn.commit()
        cur.close()
        conn.close()

    def update(self, new_name, new_price):
        conn = get_connection()
        cur = conn.cursor()
        cur.execute(
            "UPDATE Menu_Items SET item_name = %s, item_price = %s WHERE item_name = %s",
            (new_name, new_price, self.name)
        )
        conn.commit()
        cur.close()
        conn.close()
        self.name = new_name
        self.price = new_price      

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

class MenuManager:

    @classmethod
    def get_by_name(cls, name):
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("SELECT item_name, item_price FROM Menu_Items WHERE item_name = %s", (name,))
        result = cur.fetchone()
        cur.close()
        conn.close()
        if result:
            from menu_item import MenuItem
            return MenuItem(result[0], result[1])
        return None

    @classmethod
    def all_items(cls):
        conn = get_connection()
        cur = conn.cursor()
        cur.execute("SELECT item_name, item_price FROM Menu_Items")
        results = cur.fetchall()
        cur.close()
        conn.close()
        return results
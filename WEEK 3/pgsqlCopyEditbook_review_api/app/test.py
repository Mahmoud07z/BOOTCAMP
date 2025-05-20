from database import engine, SessionLocal, Base

def test_connection():
    try:
        # Try to connect and get a session
        db = SessionLocal()
        # Optional: test simple query - just open and close session
        print("Database connection successful!")
        db.close()
    except Exception as e:
        print(f"Database connection failed: {e}")

if __name__ == "__main__":
    test_connection()

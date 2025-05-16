from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import psycopg2
from typing import List

app = FastAPI()


conn = psycopg2.connect(
    dbname="Day5project",
    user="postgres",
    password="Miles2003",
    host="localhost",
    port="5432"
)
cursor = conn.cursor()


class User(BaseModel):
    name: str
    email: str
    age: int

@app.post("/users/")
def add_user(user: User):
    try:
        cursor.execute(
            "INSERT INTO users (name, email, age) VALUES (%s, %s, %s)",
            (user.name, user.email, user.age)
        )
        conn.commit()
        return {"message": "User added successfully"}
    except Exception as e:
        conn.rollback()
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/users/")
def get_users():
    cursor.execute("SELECT * FROM users")
    results = cursor.fetchall()
    return results

@app.delete("/users/{user_id}")
def delete_user(user_id: int):
    cursor.execute("DELETE FROM users WHERE id = %s", (user_id,))
    conn.commit()
    return {"message": "User deleted successfully"}

@app.put("/users/{user_id}")
def update_user(user_id: int, user: User):
    cursor.execute(
        "UPDATE users SET name = %s, email = %s, age = %s WHERE id = %s",
        (user.name, user.email, user.age, user_id)
    )
    conn.commit()
    return {"message": "User updated successfully"}

from fastapi import FastAPI, Request, Depends, HTTPException, status
from fastapi.middleware.cors import CORSMiddleware
from starlette.middleware.base import BaseHTTPMiddleware
from jose import jwt, JWTError
from typing import Dict

SECRET_KEY = "your-secret"
ALGORITHM = "HS256"

app = FastAPI()

# Auth Middleware to check JWT in Authorization header
class AuthMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        public_paths = ["/login", "/signup", "/docs", "/openapi.json"]
        if any(request.url.path.startswith(path) for path in public_paths):
            return await call_next(request)

        token = request.headers.get("Authorization")
        if not token:
            raise HTTPException(status_code=403, detail="No auth token provided")

        try:
            scheme, jwt_token = token.split()
            if scheme.lower() != "bearer":
                raise HTTPException(status_code=403, detail="Invalid token scheme")

            payload = jwt.decode(jwt_token, SECRET_KEY, algorithms=[ALGORITHM])
            request.state.user = payload
        except (JWTError, ValueError):
            raise HTTPException(status_code=403, detail="Invalid or expired token")

        return await call_next(request)

app.add_middleware(AuthMiddleware)

# Dependency: get current user from request.state.user
def get_current_user(request: Request) -> Dict:
    if not hasattr(request.state, "user"):
        raise HTTPException(status_code=403, detail="User not authenticated")
    return request.state.user

# Dependency: check if current user is admin
def get_admin_user(request: Request) -> Dict:
    user = get_current_user(request)
    if user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Admin access required")
    return user

# Example public route
@app.post("/signup")
def signup():
    # Implement user signup logic here
    return {"msg": "Signup endpoint"}

@app.post("/login")
def login():
    # Implement login logic here, return JWT token
    return {"msg": "Login endpoint"}

# Authenticated user route
@app.get("/me")
def read_me(user: Dict = Depends(get_current_user)):
    return {"user": user}

# Admin only route example: delete a user
@app.delete("/users/{user_id}")
def delete_user(user_id: int, admin: Dict = Depends(get_admin_user)):
    # Implement user deletion logic here
    return {"msg": f"User {user_id} deleted by admin {admin['username']}"}

# Other routes (books, reviews) would go here similarly
# Use Depends(get_current_user) for user auth, Depends(get_admin_user) for admin-only access


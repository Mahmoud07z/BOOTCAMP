from fastapi import Request, HTTPException
from starlette.middleware.base import BaseHTTPMiddleware
from jose import jwt, JWTError

# Match this to the SECRET_KEY and ALGORITHM in auth.py
SECRET_KEY = "my-very-secret-key"
ALGORITHM = "HS256"

class AuthMiddleware(BaseHTTPMiddleware):
    async def dispatch(self, request: Request, call_next):
        # Allow public endpoints
        public_paths = ["/login", "/signup", "/docs", "/openapi.json"]
        if any(request.url.path.startswith(path) for path in public_paths):
            return await call_next(request)

        token = request.headers.get("Authorization")
        if not token:
            raise HTTPException(status_code=403, detail="Authorization token missing")

        try:
            scheme, jwt_token = token.split()
            if scheme.lower() != "bearer":
                raise HTTPException(status_code=403, detail="Invalid token scheme")

            payload = jwt.decode(jwt_token, SECRET_KEY, algorithms=[ALGORITHM])
            request.state.user = payload  # 👈 Store user info in request.state
        except (JWTError, ValueError):
            raise HTTPException(status_code=403, detail="Invalid or expired token")

        return await call_next(request)

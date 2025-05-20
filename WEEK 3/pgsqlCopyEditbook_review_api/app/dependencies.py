# app/dependencies.py

from fastapi import Request, HTTPException
from typing import Dict

def get_current_user(request: Request) -> Dict:
    if not hasattr(request.state, "user"):
        raise HTTPException(status_code=403, detail="User not authenticated")
    return request.state.user

def get_admin_user(request: Request) -> Dict:
    user = get_current_user(request)
    if user.get("role") != "admin":
        raise HTTPException(status_code=403, detail="Admin access required")
    return user

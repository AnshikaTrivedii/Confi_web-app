from fastapi import APIRouter
from .auth import router as auth_router
from .token import router as token_router
from .products import router as products_router
from .controllers import router as controllers_router
from .hardware import router as hardware_router
from .organisations import router as organisations_router
from .quotes import router as quotes_router

api_router = APIRouter()

api_router.include_router(auth_router)
api_router.include_router(token_router)
api_router.include_router(products_router)
api_router.include_router(controllers_router)
api_router.include_router(hardware_router)
api_router.include_router(organisations_router)
api_router.include_router(quotes_router) 
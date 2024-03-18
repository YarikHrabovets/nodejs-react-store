import { ADMIN_ROUTE, CART_ROUTE, INDEX_ROUTE, LOGIN_ROUTE, PRODUCT_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from './utils/constants'
import Admin from './pages/Admin'
import Cart from './pages/Cart'
import Shop from './pages/Shop'
import Auth from './pages/Auth'
import Product from './pages/Product'
import Index from './pages/Index'

export const authRoutes = [
    {
        path: CART_ROUTE,
        Component: Cart
    }
]

export const adminRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    }
]

export const publicRoutes = [
    {
        path: INDEX_ROUTE,
        Component: Index
    },
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: PRODUCT_ROUTE + '/:id',
        Component: Product
    }
]
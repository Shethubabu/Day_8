import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../features/cart/cartSlice"
import wishlistReducer from "../features/wishlist/wishlistSlice"
import authReducer from "../features/auth/authSlice"
import ordersReducer from "../features/orders/orderSlice"

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    auth: authReducer,
    orders: ordersReducer, 
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
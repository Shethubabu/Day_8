import { Heart, ShoppingCart, Package } from "lucide-react"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../../app/store"
import { logout } from "../../features/auth/authSlice"

export default function Navbar() {
  const dispatch = useDispatch()
  const user = useSelector((state: RootState) => state.auth.user)
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items)

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      
      <Link to="/" className="flex items-center gap-2">
        <h1 className="text-3xl font-bold text-blue-600 tracking-tight">
          SmartShop
        </h1>
      </Link>

   
      <div className="flex-1 mx-6">
        <input
          type="text"
          placeholder="Search products..."
          className="w-full rounded-lg border border-gray-300 px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      
      <div className="flex items-center gap-5">
        
        <Link to="/wishlist" className="relative hover:text-pink-500 transition-colors">
          <Heart size={22} />
          {wishlistItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs px-1 rounded-full">
              {wishlistItems.length}
            </span>
          )}
        </Link>

        
        <Link to="/cart" className="relative hover:text-blue-600 transition-colors">
          <ShoppingCart size={22} />
          {cartItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs px-1 rounded-full">
              {cartItems.length}
            </span>
          )}
        </Link>

       
        <Link to="/orders" className="hover:text-gray-700 transition-colors">
          <Package size={22} />
        </Link>

       
        {user ? (
          <div className="flex items-center gap-3">
            <span className="font-semibold">{user.name}</span>
            <button
              onClick={() => dispatch(logout())}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition-colors"
            >
              Logout
            </button>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link
              to="/login"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="border border-blue-600 text-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition-colors"
            >
              Signup
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
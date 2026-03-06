import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../app/store"
import { removeFromWishlist } from "../features/wishlist/wishlistSlice"
import { addToCart } from "../features/cart/cartSlice"

export default function Wishlist() {
  const wishlistItems = useSelector((state: RootState) => state.wishlist.items)
  const dispatch = useDispatch()

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Wishlist</h1>

      {wishlistItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <p className="text-gray-500 text-lg">Your wishlist is empty</p>
          <a href="/products" className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors">Browse Products</a>
        </div>
      ) : (
        <div className="space-y-4">
          {wishlistItems.map(item => (
            <div key={item.id} className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-contain rounded" />
                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-500">Price: ${item.price}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <button onClick={() => dispatch(addToCart(item))} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">Add to Cart</button>
                <button onClick={() => dispatch(removeFromWishlist(item.id))} className="text-red-500 font-semibold hover:underline">Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
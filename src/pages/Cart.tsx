import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../app/store"
import { removeFromCart } from "../features/cart/cartSlice"

export default function Cart() {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch()
  const total = cartItems.reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <p className="text-gray-500 text-lg">Your cart is empty</p>
          <a href="/products" className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors">Start Shopping</a>
        </div>
      ) : (
        <div className="space-y-4">
          {cartItems.map(item => (
            <div key={item.id} className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="w-20 h-20 object-contain rounded" />
                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-gray-500">Quantity: {item.quantity || 1}</p>
                  <p className="text-gray-500">Price: ${item.price}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-2">
                <p className="text-blue-600 font-bold text-lg">${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                <button onClick={() => dispatch(removeFromCart(item.id))} className="text-red-500 font-semibold hover:underline">Remove</button>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="text-right mt-6 text-xl font-bold text-gray-800">
            Total: ${total.toFixed(2)}
          </div>

          <button className="mt-4 bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700 transition-colors">Proceed to Checkout</button>
        </div>
      )}
    </div>
  )
}
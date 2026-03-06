import { useSelector } from "react-redux"
import type { RootState } from "../app/store"

export default function Orders() {
  const orders = useSelector((state: RootState) => state.orders.items)

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Your Orders</h1>

      {orders.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-20">
          <p className="text-gray-500 text-lg">You have no orders yet</p>
          <a href="/products" className="mt-4 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition-colors">Start Shopping</a>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map(order => (
            <div key={order.id} className="bg-white shadow-md p-4 rounded-lg flex justify-between items-center hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4">
                <img src={order.image} alt={order.productName} className="w-20 h-20 object-contain rounded" />
                <div>
                  <h3 className="font-semibold text-gray-800">{order.productName}</h3>
                  <p className="text-gray-500">Quantity: {order.quantity}</p>
                  <p className="text-gray-500">Status: {order.status}</p>
                </div>
              </div>
              <div className="text-blue-600 font-bold text-lg">${order.price}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
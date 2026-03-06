import { useParams } from "react-router-dom"
import { useState } from "react"
import { useDispatch } from "react-redux"

import { addToCart } from "../features/cart/cartSlice"
import { addToWishlist } from "../features/wishlist/wishlistSlice"
import { useProduct } from "../services/productApi"

export default function PDP() {
  const { id } = useParams()
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(1)

  const { data: product, isLoading, isError } = useProduct(id!)

  if (isLoading)
    return <p className="text-center mt-10">Loading product...</p>

  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">
        Failed to load product
      </p>
    )

  if (!product)
    return <p className="text-center mt-10">Product not found</p>

  const handleAddToCart = () =>
    dispatch(addToCart({ ...product, quantity }))

  const handleAddToWishlist = () =>
    dispatch(addToWishlist(product))

  return (
    <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-10 bg-gray-50 rounded-lg shadow-md">
      
      
      <div className="flex justify-center items-center">
        <img
          src={product.image}
          alt={product.title}
          className="h-96 object-contain rounded shadow-md"
        />
      </div>

     
      <div className="flex flex-col justify-between space-y-6">
        <h1 className="text-3xl font-bold text-gray-800">
          {product.title}
        </h1>

        <p className="text-gray-600">{product.description}</p>

        <p className="text-sm text-gray-500">
          Category: {product.category}
        </p>

        <p className="text-2xl font-bold text-blue-600">
          ${product.price}
        </p>

        
        <div className="flex items-center gap-3 mt-2">
          <span className="font-semibold">Quantity:</span>

          <button
            onClick={() =>
              setQuantity((prev) => Math.max(1, prev - 1))
            }
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            -
          </button>

          <span className="px-3">{quantity}</span>

          <button
            onClick={() => setQuantity((prev) => prev + 1)}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
          >
            +
          </button>
        </div>

       
        <div className="flex gap-4 mt-4">
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Add to Cart
          </button>

          <button
            onClick={handleAddToWishlist}
            className="flex-1 bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
          >
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  )
}
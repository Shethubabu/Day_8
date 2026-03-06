import type { Product } from "../../types/product"
import { useDispatch } from "react-redux"
import { addToCart } from "../../features/cart/cartSlice"
import { addToWishlist } from "../../features/wishlist/wishlistSlice"
import { Link } from "react-router-dom"

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const dispatch = useDispatch()

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow p-4 flex flex-col">
      
      <Link
        to={`/product/${product.id}`}
        className="flex-1 flex flex-col items-center justify-center"
      >
        <img
          src={product.image}
          alt={product.title}
          className="h-48 object-contain mb-4"
        />

        <h3 className="font-semibold text-lg text-gray-800">
          {product.title}
        </h3>
      </Link>

      <p className="text-blue-600 font-bold text-xl mt-2">
        ${product.price}
      </p>

      <div className="mt-3 flex gap-2">
        <button
          onClick={() => dispatch(addToCart(product))}
          className="flex-1 bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Add to Cart
        </button>

        <button
          onClick={() => dispatch(addToWishlist(product))}
          className="flex-1 bg-pink-500 text-white py-2 rounded hover:bg-pink-600"
        >
          Wishlist
        </button>
      </div>
    </div>
  )
}
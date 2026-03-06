import { useState } from "react"
import { useProducts } from "../services/productApi"
import ProductCard from "../components/product/ProductCard"
import FeaturedHero from "../components/hero/Featured"

export default function PLP() {
  const { data, isLoading, isError } = useProducts()
  const [search, setSearch] = useState("")

  if (isLoading)
    return <p className="text-center mt-10">Loading products...</p>

  if (isError)
    return (
      <p className="text-center mt-10 text-red-500">
        Failed to load products
      </p>
    )

  const filtered = (data || []).filter((p: any) =>
    (p.title || "").toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="max-w-7xl mx-auto p-6">
      <FeaturedHero />

      <input
        type="text"
        placeholder="Search products..."
        className="w-full md:w-1/2 border rounded-lg px-4 py-2 mb-6 shadow-sm"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filtered.length > 0 ? (
          filtered.map((p: any) => (
            <ProductCard key={p._id} product={p} />
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500 mt-10">
            No products found
          </p>
        )}
      </div>
    </div>
  )
}
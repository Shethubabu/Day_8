import ProductCard from "../product/ProductCard"
import { useProducts } from "../../services/productApi"

export default function FeaturedHero() {
  const { data, isLoading } = useProducts()
  if (isLoading) return null
  const featured = data.slice(0, 4) // first 4 products

  return (
    <section className="max-w-7xl mx-auto mb-10 p-6 bg-blue-50 rounded-lg flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <h2 className="text-4xl font-bold text-blue-600 mb-2">SmartShop Featured</h2>
        <p className="text-gray-700">Best deals and trending products just for you!</p>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {featured.map((p: any) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
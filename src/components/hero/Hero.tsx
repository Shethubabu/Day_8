import { Link } from "react-router-dom"

export default function Hero(){

  return(

    <section className="bg-blue-600 text-white p-16 text-center rounded-lg">

      <h1 className="text-5xl font-bold mb-4">
        Welcome to Smart Shop
      </h1>

      <p className="text-lg mb-6">
        Discover amazing products at best prices
      </p>

      <Link
      to="/products"
      className="bg-white text-blue-600 px-6 py-3 rounded font-semibold"
      >
        Shop Now
      </Link>

    </section>

  )

}
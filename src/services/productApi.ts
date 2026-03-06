import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const fetchProducts = async ()=>{

  const res = await axios.get(
    "https://ecom-prisma-backend-1.onrender.com/api/products"
  )

  return res.data
}

export const useProducts = ()=>{

  return useQuery({
    queryKey:["products"],
    queryFn:fetchProducts
  })

}
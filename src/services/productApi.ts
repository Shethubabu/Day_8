import axios from "axios"
import { useQuery } from "@tanstack/react-query"

const API = "https://ecom-prisma-backend-1.onrender.com/api/products"

// Fetch all products
const fetchProducts = async () => {
  const res = await axios.get(API)
  return res.data
}

export const useProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts
  })
}

// Fetch single product
const fetchProduct = async (id: string) => {
  const res = await axios.get(`${API}/${id}`)
  return res.data
}

export const useProduct = (id: string) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProduct(id),
    enabled: !!id
  })
}
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import Layout from "../components/layout/Layout"


import PLP from "../pages/PLP"
import PDP from "../pages/PDP"
import Cart from "../pages/Cart"
import Wishlist from "../pages/Wishlist"
import Orders from "../pages/Orders"

import Login from "../features/auth/Login"
import Signup from "../features/auth/Signup"

import { useSelector } from "react-redux"
import type { RootState } from "../app/store"

export default function AppRoutes() {
  const user = useSelector((state: RootState) => state.auth.user)

  return (
    <BrowserRouter>
      <Layout>
        <Routes>

          <Route path="/" element={<Navigate to="/products" replace />} />

          <Route path="/products" element={<PLP />} />

          <Route path="/product/:id" element={<PDP />} />

          <Route path="/cart" element={<Cart />} />

          <Route path="/wishlist" element={<Wishlist />} />

          
          <Route
            path="/orders"
            element={user ? <Orders /> : <Navigate to="/login" replace />}
          />

          <Route
            path="/login"
            element={!user ? <Login /> : <Navigate to="/products" replace />}
          />

          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/products" replace />}
          />

          <Route path="*" element={<p className="text-center mt-20">Page Not Found</p>} />

        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
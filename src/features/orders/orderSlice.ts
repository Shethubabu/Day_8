import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface Order {
  id: number
  productName: string
  quantity: number
  price: number
  image: string
  status: string
}

interface OrdersState {
  items: Order[]
}

const initialState: OrdersState = {
  items: [] // initially empty
}

const ordersSlice = createSlice({
  name: "orders",
  initialState,
  reducers: {
    addOrder: (state, action: PayloadAction<Order>) => {
      state.items.push(action.payload)
    },
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.items = action.payload
    },
    clearOrders: (state) => {
      state.items = []
    },
  },
})

export const { addOrder, setOrders, clearOrders } = ordersSlice.actions
export default ordersSlice.reducer
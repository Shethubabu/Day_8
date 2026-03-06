import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

import { Provider } from "react-redux"
import { store } from "./app/store"

import { QueryClient,QueryClientProvider }
from "@tanstack/react-query"

import AppRoutes from "./routes/AppRoutes"

const queryClient=new QueryClient()

ReactDOM.createRoot(
document.getElementById("root")!
).render(

<Provider store={store}>

<QueryClientProvider client={queryClient}>

<AppRoutes/>

</QueryClientProvider>

</Provider>

)
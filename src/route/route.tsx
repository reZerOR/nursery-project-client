import App from "@/App";
import AddProduct from "@/pages/AddProduct";
import Home from "@/pages/Home";
import Products from "@/pages/Products";
import { createBrowserRouter } from "react-router-dom";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path:"/",
          element: <Home/>
        },
        {
          path:"add-product",
          element: <AddProduct/>
        },
        {
          path:"Products",
          element: <Products/>
        }
      ]
    },
  ]);
import App from "@/App";
import AddProduct from "@/pages/AddProduct";
import CartPage from "@/pages/Cart";
import CheckoutForm from "@/pages/Checkout";
import Home from "@/pages/Home";
import Manage from "@/pages/Manage";
import ProductDetail from "@/pages/ProductDetails";
import Products from "@/pages/Products";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "checkout",
        element: <CheckoutForm />,
      },
      {
        path: "manage",
        element: <Manage />,
      },
    ],
  },
]);

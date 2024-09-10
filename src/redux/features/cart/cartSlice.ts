import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TCartProduct {
  _id: string;
  title: string;
  price: number;
  imageUrl: string;
  category: string;
  availableQuantity: number; // Max quantity available for this product
  quantity: number; // Quantity in cart
}

interface TCart {
  products: TCartProduct[];
  total: number;
}

const initialState: TCart = {
  products: [],
  total: 0,
};

// calculate the total of products
const recalculateTotal = (products: TCartProduct[]) => {
  return products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCart: (state, action: PayloadAction<TCartProduct>) => {
      const product = action.payload;
      const existingProduct = state.products.find((p) => p._id === product._id);

      if (existingProduct) {
        // If product exists and hasn't reached available quantity, increase quantity
        if (existingProduct.quantity < existingProduct.availableQuantity) {
          existingProduct.quantity += 1;
        }
      } else {
        // If product doesn't exist, add to cart with quantity 1, but ensure available quantity is >= 1
        if (product.availableQuantity > 0) {
          state.products.push({ ...product, quantity: 1 });
        }
      }

      state.total = recalculateTotal(state.products);
    },
    deleteProduct: (state, action: PayloadAction<string>) => {
      const productId = action.payload;
      // Remove the product
      state.products = state.products.filter((p) => p._id !== productId);

      state.total = recalculateTotal(state.products);
    },
    updateCart: (
      state,
      action: PayloadAction<{ productId: string; type: "inc" | "dec" }>
    ) => {
      const { productId, type } = action.payload;
      const productToUpdate = state.products.find((p) => p._id === productId);

      if (productToUpdate) {
        if (type === "inc") {
          // Increase quantity by 1, but not beyond availableQuantity
          if (productToUpdate.quantity < productToUpdate.availableQuantity) {
            productToUpdate.quantity += 1;
          }
        } else if (type === "dec") {
          // Decrease quantity by 1, but ensure it doesn't go below 1
          if (productToUpdate.quantity > 1) {
            productToUpdate.quantity -= 1;
          }
        }
      }

      state.total = recalculateTotal(state.products);
    },
    clearCart: (state) => {
      state.products = [];
      state.total = 0;
    },
  },
});

export const { addCart, deleteProduct, updateCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

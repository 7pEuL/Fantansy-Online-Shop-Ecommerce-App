import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isWishlistOpen: false,
  wishlist: [],
  items: [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },

    addToWishlist: (state, action) => {
      state.wishlist = [...state.wishlist, action.payload.item];
    },

    setIsWishlistOpen: (state) => {
      state.isWishlistOpen = !state.isWishlistOpen;
    },
  },
});

export const { setItems, addToWishlist, setIsWishlistOpen } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;

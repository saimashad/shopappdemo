import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

export const CartSlice = createSlice({
  name: "cart",
  reducers: {
    add: (state, action) => {
      state.push(action.payload); // action.payload kya darshata hai yaha pe... jo bhi tumne input parameter me send kiya hoga na, wo.
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
  initialState,
});

export const { add, remove } = CartSlice.actions;
export default CartSlice.reducer;

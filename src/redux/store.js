import { configureStore } from '@reduxjs/toolkit'
import cartReducer from "./slice.js"
export default configureStore({
  reducer: {
    Cart: cartReducer
    // counter: cartReducer
  }
})
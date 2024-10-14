import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'Cart',
  initialState: {
    cart:[]
    
  },
  reducers: {
   
      addtoCart: (state,action)=> {
        const cartData = action.payload
     
        console.log(cartData,"RUNNUNG")

        cartData.quantity*cartData.data.price

        state.cart.push(action.payload)
        
    },
    removeItem: (state,action)=> {
      // const cartData = action.payload
      console.log(action,"RUNNUNG")
      const deleteCart = state.cart.find((cart)=>cart.data.id == action.payload )
      


      state.cart.pop(deleteCart)
      
  },

}
})

// Action creators are generated for each case reducer function
export const { addtoCart,removeItem } = cartSlice.actions

export default cartSlice.reducer
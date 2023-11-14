import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userslice',
  initialState: {
    user : null,
    baseurl : 'https://abhileshkumar.pythonanywhere.com/', 
    // baseurl : 'http://127.0.0.1:8000/',
    logincross : null,
    signupcropss : null,
    cart : localStorage.getItem('cart') === null ? {} : JSON.parse(localStorage.getItem('cart')) ,
    totalSum: localStorage.getItem('totalSum') === null? 0:localStorage.getItem('totalSum'),
    sum: localStorage.getItem('sum') === null? 0:localStorage.getItem('sum')
  },
  reducers: {
    getUser : (state,action)=>{
        state.user = action.payload
    },
    getLoginCross : (state,action) =>{
      state.logincross =action.payload
    },
    getSignupCross : (state,action)=>{
      state.signupcropss = action.payload
    },
    getCart : (state,action)=>{
      const { id, qty, name, price } = action.payload;
      if (state.cart[id] !==undefined) {
        state.cart[id].qty += qty;
      } else {
        state.cart[id] = { qty, name, price };
      }
      state.totalSum = Object.values(state.cart).reduce((acc, item) => acc + (item.qty * item.price), 0);
      state.sum = Object.values(state.cart).reduce((acc, item) => acc + item.qty, 0);
      
      localStorage.setItem('cart', JSON.stringify(state.cart));
      localStorage.setItem('totalSum',state.totalSum)
      localStorage.setItem('sum',state.sum)
    },
    getRemove : (state,action) =>{
      const {id} = action.payload
      if(state.cart[id]!==undefined){
        state.cart[id].qty -=1
      }
      if(state.cart[id].qty===0){
        delete state.cart[id]
      }

      state.totalSum = Object.values(state.cart).reduce((acc, item) => acc + (item.qty * item.price), 0);
      state.sum = Object.values(state.cart).reduce((acc, item) => acc + item.qty, 0);

      localStorage.setItem('cart', JSON.stringify(state.cart));
      localStorage.setItem('totalSum',state.totalSum)
      localStorage.setItem('sum',state.sum)
    },

  }
})

// Action creators are generated for each case reducer function
export const { getUser,getLoginCross,getSignupCross,getCart,getRemove } = userSlice.actions

export default userSlice.reducer
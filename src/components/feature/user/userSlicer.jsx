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
    sum: localStorage.getItem('sum') === null? 0:localStorage.getItem('sum'),
    token : localStorage.getItem('realToken') ? JSON.parse(localStorage.getItem('realToken')) : null,
    hiddenmobileview: 'hidden',
    handlereset : null,
    handleResetEmail : null,
    searchItem : false,
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
    getSum : (state,action) =>{
      state.sum = action.payload
    },
    getTotalSum : (state,action) =>{
      state.totalSum = action.payload
    },
    getCartData : (state,action)=>{
      state.cart = action.payload
      state.totalSum = Object.values(state.cart).reduce((acc, item) => acc + (item.qty * item.price), 0);
      state.sum = Object.values(state.cart).reduce((acc, item) => acc + item.qty, 0);
      localStorage.setItem('cart', JSON.stringify(state.cart));
      localStorage.setItem('totalSum',state.totalSum)
      localStorage.setItem('sum',state.sum)
    },
    getEmptyData : (state,action) =>{
      state.cart = action.payload
    },

    getToken : (state,action) =>{
      state.token = action.payload
    },
    getMobileView : (state,action) =>{
      const valu = action.payload 
      console.log(valu)
      if(valu==='hidden'){
        state.hiddenmobileview = ''
      }else {
        state.hiddenmobileview = 'hidden'
      }
    },
    getHandleReset : (state,action) =>{
      state.handlereset = action.payload
    },
    getHandleResetEmail : (state,action)=>{
      state.handleResetEmail = action.payload
    },
    getSeatchItem : (state,action)=>{
      state.searchItem = action.payload
    }
  }
})

// Action creators are generated for each case reducer function
export const { getUser,getLoginCross,getSignupCross,getCart,getRemove,getSum,getCartData,getEmptyData,getTotalSum,getToken,getMobileView,getHandleReset,getHandleResetEmail,getSeatchItem } = userSlice.actions

export default userSlice.reducer
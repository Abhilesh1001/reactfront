import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'userslice',
  initialState: {
    user : null,
    baseurl : 'https://abhileshkumar.pythonanywhere.com/', 
    // baseurl : 'http://127.0.0.1:8000/',
    logincross : null,
    signupcropss : null
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
    } 
  }
})

// Action creators are generated for each case reducer function
export const { getUser,getLoginCross,getSignupCross } = userSlice.actions

export default userSlice.reducer
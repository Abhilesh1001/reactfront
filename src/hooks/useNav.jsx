import { useState } from "react"
import {useDispatch,useSelector} from 'react-redux'
import {getLoginCross,getSignupCross} from '../components/feature/user/userSlicer'

export function useNav(){
  const  {logincross,signupcropss} = useSelector((state)=>state.user)
  const dispatch = useDispatch()

  const handleLogin = ()=>{
    dispatch(getLoginCross(`${logincross==="login"?null:"login"}`))
  }
  const handleSignup = ()=>{
    dispatch(getSignupCross(`${signupcropss==="signup"?null:"signup"}`))
  }
    return {handleLogin,handleSignup,logincross,signupcropss}
}
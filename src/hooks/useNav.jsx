import { useState } from "react"

export function useNav(){

  const [login,setLogin] = useState(false)
  const [signup,setSignup] = useState(false)
  const handleLogin = ()=>{
    setLogin(true)
  }
  const handleSignup = ()=>{
    setSignup(true)
  }
    return {handleLogin,handleSignup,login,signup}
}
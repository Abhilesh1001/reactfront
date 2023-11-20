import { useState,useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, getLoginCross, getSum, getCartData, getEmptyData, getTotalSum,getToken } from '../../components/feature/user/userSlicer'
import { useNavigate } from 'react-router-dom'

//user login 
export const useLogin = (data, dispatch) => {
  // let [authToken,setUserAuthToken] = useState(()=>localStorage.getItem('realToken') ? JSON.parse(localStorage.getItem('realToken')) : null)
  const {token:authToken} = useSelector((state)=>state.user)


  const { baseurl, user, cart } = useSelector((state) => state.user)
  const [logindata, setLoginData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [errordata, setError] = useState('')
  const navigate = useNavigate()
  const disptch = useDispatch()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    localStorage.removeItem('token')
    try {
      setLoading(true)
      const res = await axios.post(`${baseurl}cus/authlogin/`, data)
      // console.log(res.data.token.access)
      // console.log(res.data.msg)
      localStorage.setItem('realToken',JSON.stringify(res.data.token))
      localStorage.setItem('token', res.data.token.access)

      // setUserAuthToken(res.data.token)
      setLoginData(res.data.msg)
      setError(null)
      disptch(getToken(res.data.token))
      setLoading(false)
      dispatch({ type: 'EMAIL', value: "" })
      dispatch({ type: 'PASSWORD', value: "" })
      disptch(getLoginCross(false))

    } catch (error) {
      setLoginData(null)
      setError("Email Id or Password Wrong")
      setLoading(false)
      // console.log('error', error.message)
    }

    Profile()
    // receiving data from cart as per user 

    let token = localStorage.getItem('token')
    // console.log(data.email)
    try {
      let response = await axios.get(`${baseurl}newshop/cartGet/${data.email}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      // console.log('getitem', response.data)

      if (response.data.item_json !== undefined) {
        disptch(getCartData(JSON.parse(response.data.item_json)))
      } else {

      }

    } catch (errors) {
      console.log('loginError', errors)
    }


    navigate('/')

  }

  const Profile = async () => {
    let token = localStorage.getItem('token')
    try {
      let response = await axios.get(`${baseurl}cus/authuserpro`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      let res = response.data
      // console.log(res)
      disptch(getUser(res))
      localStorage.setItem('user', JSON.stringify(response.data))
      // console.log('responsedata',res)
      dispatch({ type: 'EMAIL', value: "" })
      dispatch({ type: 'PASSWORD', value: "" })
    } catch (error) {
      console.log(error)
    }
  }

  // updata Token 



useEffect(( ) =>{
  let time = 1000 * 60 * 4

  let interval = setInterval(()=>{
      if(authToken !== null){
          updataToken()
      }
  },time)
  return ()=>clearInterval(interval)
},[authToken])

const updataToken  = async () =>{
  // console.log('updata token called')
  // console.log(authToken.refresh)
 
  // console.log(data2)
  
  let response = await fetch(`${baseurl}cus/api/token/refresh/`,{
      method : 'POST',
      headers : {
          'Content-Type':'application/json'
      },
      body : JSON.stringify({'refresh':authToken?.refresh})
     })
  
    //  console.log()
     let data = await response.json()
    //  console.log(data)
   let newData = {
      refresh :authToken?.refresh,
      access  : data.access
   } 
   if(response.status===200){
      //  setUserAuthToken(newData)
      disptch(getToken(newData))
       localStorage.setItem('realToken',JSON.stringify(newData))
       localStorage.setItem('token',data.access)
   }else{
    handleLogout()
   }

   
  // console.log('data',JSON.parse({'refresh':authToken}))
}





  //    logout 

  const handleLogout = async () => {
    let gettoken = localStorage.getItem('token')
    let data = {
      item_json: JSON.stringify(cart),
      user: parseInt(user.id)
    }
    // console.log(data, gettoken)
    try {
      const response = await axios.post(`${baseurl}newshop/cartCreate/`, data, {
        headers: {
          Authorization: `Bearer ${gettoken}`
        }
      })
      // console.log('posted success', response.data)
    } catch (errors) {
      const email = user.email
      // console.log(cart)
      let data = {
        item_json: JSON.stringify(cart)
      }
      // console.log(errors)
      try {
        const response = await axios.put(`${baseurl}newshop/cartData/${email}`, data, {
          headers: {
            Authorization: `Bearer ${gettoken}`
          }
        })
        // console.log('in error section', response)
      } catch (errors) {
        console.log('errorput', errors)
      }
    }
    localStorage.clear()
    disptch(getSum(0))
    disptch(getUser(null))
    disptch(getTotalSum(0))
    disptch(getEmptyData({}))
    disptch(getToken(null))
    // setUserAuthToken(null)

  }

  function handleLogin() {
    disptch(getLoginCross(false))
  }

  return { handleSubmit, logindata, errordata, loading, handleLogout, handleLogin }
}

// export default useCusfetch

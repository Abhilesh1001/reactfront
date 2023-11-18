import { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getUser, getLoginCross, getSum, getCartData, getEmptyData, getTotalSum } from '../../components/feature/user/userSlicer'
import { useNavigate } from 'react-router-dom'

//user login 
export const useLogin = (data, dispatch) => {
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
    setTimeout(() => {
      localStorage.clear()
      localStorage.clear()
      disptch(getSum(0))
      disptch(getUser(null))
      disptch(getTotalSum(0))
      disptch(getEmptyData({}))
      alert('Your session has expired please login again')
    }, 1200000);

    try {
      setLoading(true)
      const res = await axios.post(`${baseurl}cus/authlogin/`, data)
      // console.log(res.data.token.access)
      // console.log(res.data.msg)
      localStorage.setItem('token', res.data.token.access)
      setLoginData(res.data.msg)
      setError(null)
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

  }

  function handleLogin() {
    disptch(getLoginCross(false))
  }

  return { handleSubmit, logindata, errordata, loading, handleLogout, handleLogin }
}

// export default useCusfetch

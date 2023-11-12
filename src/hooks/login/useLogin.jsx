import { useState } from 'react'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import { getUser,getLoginCross } from '../../components/feature/user/userSlicer'
import {useNavigate} from 'react-router-dom'



//user login 
export const useLogin = (data,dispatch) => {
    const [logindata, setLoginData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [errordata, setError] = useState('')
    const navigate = useNavigate()
    const disptch = useDispatch()
    const {baseurl} = useSelector((state)=>state.user)
    const handleSubmit = async (e) => {
        console.log('ok')
        e.preventDefault()
        setLoading(true)
        localStorage.removeItem('token')
        try {
            setLoading(true)
            const res = await axios.post(`${baseurl}cus/authlogin/`, data)
            // console.log(res.data.token.access)
            // console.log(res.data.msg)
            localStorage.setItem('token', res.data.token.access)
            setLoginData(res.data.msg)
            setError(null)
            setLoading(false)
            dispatch({type:'EMAIL',value : ""})
            dispatch({type:'PASSWORD',value : ""})
            disptch(getLoginCross(false))
        } catch (error) {
            setLoginData(null)
            setError("Email Id or Password Wrong")
            setLoading(false)
            // console.log('error', error.message)
        }

        Profile()
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
            console.log(res)
            disptch(getUser(res))
            localStorage.setItem('user',JSON.stringify(response.data))
            // console.log('responsedata',res)
            dispatch({type:'EMAIL',value : ""})
            dispatch({type:'PASSWORD',value : ""})
        } catch (error) {
            console.log(error)
        }
    }

    function handleLogout (){
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        disptch(getUser(null))
    }

    function handleLogin () {
        disptch(getLoginCross(false))
    }

    return { handleSubmit,logindata,errordata,loading,handleLogout,handleLogin }
}

// export default useCusfetch

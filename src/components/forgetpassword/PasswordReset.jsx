import React,{useState} from 'react'
import Loading from '../loading/Loading'
import {useSelector,useDispatch} from 'react-redux'
import axios from 'axios'
import {getHandleReset} from '../feature/user/userSlicer'

const PasswordReset = () => {

    const {baseurl,handlereset} = useSelector((state)=>state.user)
    const [password ,setPassword] = useState('')
    const [password2,setPassword2] = useState('')
    const [message,setMessage] = useState()
    const [nonfielderror,setNenoFieldError] = useState()
    const [error,setError] = useState()
    const [loading,setLoading] = useState(false)
    const dispatch = useDispatch()
     
    const handleSubmit = async (e) =>{
        e.preventDefault()
        setLoading(true)
        const data = {
            password : password,
            password2 : password2
        }
        // console.log(data)
        try {
            
            let token = localStorage.getItem('token')
            const res =  await axios.post(`${baseurl}cus/changepassword/`,data,{
                headers : {
                    Authorization : `Bearer ${token}`
                }
            })
            setLoading(false)
            setMessage(res.data.msg)
            setPassword('')
            setPassword2('')
        }catch(error){
            setNenoFieldError(error?.response?.data?.errors?.non_field_errors)
            setError(error?.response?.data?.errors)
            setLoading(false)
        }
    }

    const handleCross =() =>{
        dispatch(getHandleReset(false))
    }


  return (
    <div className='absolute w-full rounded top-[60px] '>     
    <div className='w-full flex items-center justify-center'>            
    <form className='border-2 border-slate-400 p-2 bg-slate-200 dark:bg-black relative rounded' onSubmit={handleSubmit}>
    <div className='absolute right-10 top-5 bg-white dark:bg-black pl-1 pr-1 rounded text-xl'><i className="ri-close-line cursor-pointer" onClick={handleCross}></i></div>
    <div className='flex justify-center w-full'>
            {loading && <Loading />}
        </div>
        {nonfielderror && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-red-600">{nonfielderror[0]?.charAt(0).toUpperCase() + nonfielderror[0].slice(1)}</div>}
        {message && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-green-700">{message}</div>} 
        <label className="block"> 
            <label>Reset Form</label>
            <span className="block text-lg font-mediu" >Password</span>
            <input type="password" className="xl:w-96 lg:w-80 md:w-72 w-52 h-10 mt-4 rounded-md dark:bg-slate-600 p-2"  value={password}onChange={(e)=>setPassword(e.target.value)} required />
            <span className="block text-lg font-mediu"  >Confirmed Password</span>
            <input type="password" className="xl:w-96 lg:w-80 md:w-72 w-52 h-10 mt-4 rounded-md dark:bg-slate-600 p-2" value={password2}  onChange={(e)=>setPassword2(e.target.value)} required/>
            <div className='w-full flex justify-between' >
            <button type='submit'  className=' bg-gray-300 p-2 rounded mt-4 hover:bg-slate-50 dark:bg-slate-600 dark:hover:bg-gray-600'>Submit</button>
            </div>
        </label>
    </form>
    </div>
</div>
  )
}

export default PasswordReset
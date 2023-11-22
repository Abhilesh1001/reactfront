import React,{useState} from 'react'
import Loading from '../loading/Loading'
import {useSelector,useDispatch} from 'react-redux'
import {getHandleReset, getHandleResetEmail} from '../feature/user/userSlicer'
import axios from 'axios'


const ResetForgetPassword = () => {
    const {baseurl} = useSelector((state)=>state.user) 
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')
    const [error,setError] = useState('')
    const [loading,setLoading] = useState(false)
    const dispatch = useDispatch()
    const handleSubmit = async (e)=>{
        setLoading(true)
        e.preventDefault()
        console.log('ok')
        const data = {
            email : email 
        }
        try{
            const response = await axios.post(`${baseurl}cus/send-reset-password/`,data)
        const res = response?.data 
         setMessage(res?.msg)   
        console.log(res)
        setLoading(false)
        setEmail('')
            
        }catch(error){
            console.log(error)
            setError(error?.response?.data?.errors?.non_field_errors)
            setLoading(false)
            setEmail('')
        }
        
    }
    const handleCross =() =>{
        dispatch(getHandleResetEmail(false))
    }



  return (
    <div className='absolute w-full rounded top-[60px] '>     
    <div className='w-full flex items-center justify-center'>            
    <form className='border-2 border-slate-400 p-2 bg-slate-200 dark:bg-black relative rounded' onSubmit={handleSubmit}>
    <div className='absolute right-10 top-5 bg-white dark:bg-black pl-1 pr-1 rounded text-xl'><i className="ri-close-line cursor-pointer" onClick={handleCross}></i></div>
    <div className='flex justify-center w-full'>
            {loading && <Loading />}
        </div>
        {error && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-red-600">{error}</div>}
      {message && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-green-700">{message}</div>}    

        <label className="block"> 
            <label>Reset Forget Password Form</label>
            <span className="block text-lg font-mediu" >Enter Email</span>
            <input type="email" className="xl:w-96 lg:w-80 md:w-72 w-52 h-10 mt-4 rounded-md dark:bg-slate-600 p-2"  value={email} onChange={(e) => setEmail(e.target.value)} required />
        
            <div className='w-full flex justify-between' >
            <button type='submit'  className=' bg-gray-300 p-2 rounded mt-4 hover:bg-slate-50 dark:bg-slate-600 dark:hover:bg-gray-600'>Submit</button>
            </div>
        </label>
    </form>
    </div>
</div>
  )
}

export default ResetForgetPassword
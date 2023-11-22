import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import Loading from '../loading/Loading'


const ResetPasswordWithUidToken = () => {

    const { baseurl } = useSelector((state) => state.user)
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const [loading,setLoading] = useState(false)
    const { id, token } = useParams()
    // console.log(id,token)
    const handleSubmit = async (e) => {
        setLoading(true)
        e.preventDefault()
        // console.log("ok")

        const data = {
            password: password,
            password2: password2
        }
        try {
            const response = await axios.post(`${baseurl}cus/send-reset-password/${id}/${token}/`, data)
            const res = response.data.msg
            // console.log('response', res)
            setPassword('')
            setPassword2('')
            setMessage(res)
            setLoading(false)
        }

        catch (error) {
            // console.log('error', error?.response?.data?.errors?.non_field_errors)
            setError(error?.response?.data?.errors?.non_field_errors)
            setLoading(false)
        }
    }




  return ( 
    <div className='w-full'>
        <div className='h-[650px]'>
    <div className='absolute w-full rounded top-[80px] '>    
    <div className='w-full flex items-center justify-center'>            
    <form className='border-2 border-slate-400 p-2 bg-slate-200 dark:bg-black relative rounded' onSubmit={handleSubmit}>
    <div className='flex justify-center w-full'>
            {loading && <Loading />}
            {error && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-red-600">{error}</div>} 
      {message && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-green-700">{message}</div>}
        </div>
        <label className="block"> 
            <label>Reset Form</label>
            <span className="block text-lg font-mediu" >New Password</span>
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
</div>
</div>
  )
}

export default ResetPasswordWithUidToken
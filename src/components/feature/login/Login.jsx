import React, {useReducer} from 'react'
import './style.css'
import {reducer,initialState} from '../../reducer/loginreducer'
import { useLogin } from '../../../hooks/login/useLogin'
import Loading from '../../loading/Loading'
import {getHandleResetEmail,getLoginCross} from '../user/userSlicer' 
import {useSelector,useDispatch} from 'react-redux'


const Login = () => {
    const [data,dispatch] = useReducer(reducer,initialState)
    const {handleSubmit,logindata,errordata,loading,handleLogin} = useLogin(data,dispatch)
    const {handleResetEmail} = useSelector((state)=>state.user)
    const disp = useDispatch()
    console.log(handleResetEmail)

    const handleResetEmailForget = () =>{
        disp(getLoginCross(false))
        disp(getHandleResetEmail(`${handleResetEmail==='handleResetEmail'? null:'handleResetEmail'}`))
      }
    
    return (
        <div className='absolute w-full rounded top-[60px] '>
           
            <div className='w-full flex items-center justify-center'>            
            <form className='border-2 border-slate-400 p-2 bg-slate-200 dark:bg-black relative rounded' onSubmit={handleSubmit}>
            <div className='absolute right-10 top-5 bg-white dark:bg-black pl-1 pr-1 rounded text-xl'><i className="ri-close-line cursor-pointer" onClick={handleLogin}></i></div>
            <div className='flex justify-center w-full'>
                    {loading && <Loading />}
                </div>
                {logindata && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-green-700">{logindata}</div>}
                {errordata && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-red-600">{errordata}</div>}
                <label className="block"> 
                    <label>Login Form</label>
                    <span className="block text-lg font-mediu" >Email</span>
                    <input type="email" className="xl:w-96 lg:w-80 md:w-72 w-52 h-10 mt-4 rounded-md dark:bg-slate-600 p-2" onChange={(e)=>dispatch({type:'EMAIL',value : e.target.value})} required />
                    <span className="block text-lg font-mediu"  >Password</span>
                    <input type="password" className="xl:w-96 lg:w-80 md:w-72 w-52 h-10 mt-4 rounded-md dark:bg-slate-600 p-2"  onChange={(e)=>dispatch({type:'PASSWORD',value : e.target.value})} required/>
                    <div className='w-full flex justify-between' >
                    <button type='submit' className=' bg-gray-300 p-2 rounded mt-4 hover:bg-slate-50 dark:bg-slate-600 dark:hover:bg-gray-600'>Submit</button>
                    <button type='button' onClick={handleResetEmailForget} className=' bg-gray-300 p-2 rounded mt-4 hover:bg-slate-50  dark:bg-slate-600 dark:hover:bg-gray-600'>Forget Password</button>
                    </div>
                </label>
            </form>
            </div>
        </div>
    )
}

export default Login
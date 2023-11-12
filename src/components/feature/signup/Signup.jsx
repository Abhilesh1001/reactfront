import React, { useReducer } from 'react'
import { useSignup } from '../../../hooks/signup/useSignup'
import { intialtState, reducer } from '../../reducer/reducersugnup'
import Loading from '../../loading/Loading'


const Signup = () => {
   
    const [data, dispatch] = useReducer(reducer, intialtState)
    const { handleSubmit, signdata, nonfielderror, error, loading,handleSignup } = useSignup(data, dispatch)

    return (
        <div className='w-full h-[600px] bg-slate-200  absolute dark:bg-gray-800 rounded top-[60px]'>
            <div className='absolute right-10 text-xl'><i className="ri-close-line cursor-pointer" onClick={handleSignup}></i></div>
            <div className='w-full flex items-center justify-center'>
               
                <form className='border-2 border-slate-400 p-2 mt-4 rounded' onSubmit={handleSubmit}>
                <div className='flex justify-center w-full'>
                    {loading && <Loading />}
                </div>
                {signdata && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-green-700">{signdata}</div>}
                {nonfielderror && <div className="mt-2 bg-blue-300 rounded flex justify-center p-2 text-lg text-red-600">{nonfielderror}</div>}
                    <div className='ml-2 mr-2'>
                        <div className='w-full flex justify-center'><label htmlFor="SIgnup" className='text-xl'>Signup</label></div>
                        <label className="block">
                            <span className="block text-lg font-mediu">Name</span>
                            <input type="text" className="w-96 h-10 mt-4 rounded-md dark:bg-slate-600 p-2" value={data.name} onChange={(e) => dispatch({ type: 'NAME', value: e.target.value })} required />
                            <span className="block text-lg font-mediu">Email</span>
                            <input type="email" className="w-96 h-10 mt-4 rounded-md dark:bg-slate-600 p-2" value={data.email} onChange={(e) => dispatch({ type: 'EMAIL', value: e.target.value })} required />
                            <span className="block text-lg font-mediu">Password</span>
                            <input type="password" className="w-96 h-10 mt-4 rounded-md dark:bg-slate-600 p-2" value={data.password} onChange={(e) => dispatch({ type: 'PASSWORD', value: e.target.value })} required />
                            <span className="block text-lg font-mediu">Confirm Password</span>
                            <input type="password" className="w-96 h-10 mt-4 rounded-md dark:bg-slate-600 p-2" value={data.password2} onChange={(e) => dispatch({ type: 'PASSWORD2', value: e.target.value })} required />
                            <div><input type="checkbox" className="mt-4 rounded-md dark:bg-slate-600 p-2" checked={data.tc} onChange={(e) => dispatch({ type: 'CHECKED', value: e.target.checked })} required />
                                Do you want to signup up
                            </div>
                            <div className='w-full flex justify-between' >
                                <button type='submit' className=' bg-gray-300 p-2 rounded mt-4 hover:bg-slate-50 dark:bg-slate-600 dark:hover:bg-gray-600'>Submit</button>
                            </div>
                        </label>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Signup
import React from 'react'

const Signup = () => {
  return (
    <div className='w-full h-[500px] bg-slate-200  absolute dark:bg-gray-800 rounded top-[100px]'>
            <div className='w-full flex items-center justify-center'>            
            <form>
                <label className="block">
                    <span className="block text-lg font-mediu">Name</span>
                    <input type="text" class="w-96 h-10 mt-4 rounded-md dark:bg-slate-600 p-2" />
                    <span className="block text-lg font-mediu">Email</span>
                    <input type="email" class="w-96 h-10 mt-4 rounded-md dark:bg-slate-600 p-2" />
                    <span className="block text-lg font-mediu">Password</span>
                    <input type="password" class="w-96 h-10 mt-4 rounded-md dark:bg-slate-600 p-2" />
                    <span className="block text-lg font-mediu">Confirm Password</span>
                    <input type="password" class="w-96 h-10 mt-4 rounded-md dark:bg-slate-600 p-2" />
                    <div><input type="checkbox" class="mt-4 rounded-md dark:bg-slate-600 p-2" />
                     Do you want to signup up 
                    </div>
                    <div className='w-full flex justify-between' >
                    <button type='button' className=' bg-gray-300 p-2 rounded mt-4 hover:bg-slate-50 dark:bg-slate-600 dark:hover:bg-gray-600'>Submit</button>
                    </div>
                </label>
            </form>
            </div>
        </div>
  )
}

export default Signup
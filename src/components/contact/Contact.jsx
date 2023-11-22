import React,{useReducer} from 'react'
import {initialState,reducer} from '../reducer/contactreducer'
import {useContact} from '../../hooks/contact/useContact'


const Contact = () => {
    const [data,dispatch] = useReducer(reducer,initialState)
    const {hanldeSubmit} = useContact(data,dispatch)
    
  return (
    <div className='homecom' >
        <div className='margin'>
            <div className='text-4xl ml-10 mt-5'>Contact Us</div>
                <form onSubmit={hanldeSubmit}>
                <div className='md:ml-10 mt-5 flex flex-col  xl:w-[50%] lg:w-[80%] '>
                <label htmlFor="name" className='mt-2 p-1 rounded text-lg'>Name</label>
                <input  type="text" onChange={(e)=>dispatch({type:"NAME",value:e.target.value})}  className='mt-2 p-1 rounded text-lg  dark:bg-slate-600 ' />
                <label htmlFor="email" className='mt-2 p-1 rounded text-lg'>Email</label>
                <input  type="text" className='mt-2 p-1 rounded text-lg  dark:bg-slate-600 ' onChange={(e)=>dispatch({type:"EMAIL",value : e.target.value})} />
                <label htmlFor="phone" className='mt-2 p-1 rounded text-lg'>Phone</label>
                <input  type="text" className='mt-2 p-1 rounded text-lg  dark:bg-slate-600 ' onChange={(e)=>dispatch({type:"PHONE",value:e.target.value})} />
                <label htmlFor="desc" className='mt-2 p-1 rounded text-lg'>Tell How May help you</label>
                <textarea  type="text" className='mt-2 p-1 rounded text-lg  dark:bg-slate-600 ' onChange={(e)=>dispatch({type:"DESC",value:e.target.value})} />
                <div><button type='submit' className='mt-4 p-2 rounded text-lg bg-slate-200 dark:bg-slate-600' >Submit</button></div>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Contact
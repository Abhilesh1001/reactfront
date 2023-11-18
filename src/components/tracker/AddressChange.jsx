import React,{useReducer, useState} from 'react'
import { useAdressChange } from '../../hooks/tracer/useAdressChange'
import {initialState,reducer} from '../reducer/changeadressreducer'

const AddressChange = ({adressData}) => {
    const [data,dispatch] = useReducer(reducer,initialState)
   const {handleChageAdress,inputfiled } = useAdressChange(adressData,dispatch)
    return (
        <>
            <div className='w-full '>
                <div className='text-xl'>
                    Adress Details</div>
                <div className='bg-slate-200 p-2 dark:bg-gray-700 rounded'>

                    <div className='my-2'>Name :  {inputfiled!=="input" ? <span className='' >{adressData.name}</span>  : <input value={data.name} onChange={(e)=>dispatch({type:"NAME",value:e.target.value})} className='rounded'  />}  </div>

                    <div className='my-2'>Email : {inputfiled!=="input" ? <span className='' >{adressData.email}</span> : <input value={data.email} onChange={(e)=>dispatch({type:"EMAIL",value:e.target.value})} className='rounded'  />}</div>

                    <div className='my-2'>Adrress1 : {inputfiled!=="input" ? adressData.adress1 : <input value={data.address1} onChange={(e)=>dispatch({type:"ADDRESS",value:e.target.value})} className='rounded w-[80%]'  />}</div>

                    <div className='my-2'>Adrress2 : {inputfiled!=="input" ? adressData.adress2:  <input value={data.address2} onChange={(e)=>dispatch({type:"ADDRESS2",value:e.target.value})} className='rounded w-[80%]'  /> }</div>

                    <div className='my-2'>City : {inputfiled!=="input" ? adressData.city:<input value={data.city} onChange={(e)=>dispatch({type:"CITY",value:e.target.value})} className='rounded w-[80%]'  /> }</div>

                    <div className='my-2'>State: { inputfiled!=="input" ? adressData.state : <input value={data.state} onChange={(e)=>dispatch({type:"STATE",value:e.target.value})} className='rounded w-[80%]'  />}</div>

                    <div className='my-2'>Zip : {inputfiled!=="input" ? adressData.zip :<input value={data.zip} onChange={(e)=>dispatch({type:"ZIP",value:e.target.value})} className='rounded w-[80%]'  /> }</div>
                    <div className='flex'>
                    <div className='my-2'><button className='bg-white p-2 rounded my-2 mb-2 dark:bg-black' onClick={handleChageAdress} >Change Adress</button></div>
                    {inputfiled==="input" && <div><button className='bg-white p-2 rounded my-4 ml-2 mb-2 dark:bg-black'  >Submit</button></div>}
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default AddressChange
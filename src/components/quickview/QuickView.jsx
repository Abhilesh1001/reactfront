import React from 'react'
import '../css/home.css'
import { useParams } from 'react-router-dom'
import {useGetSingleProdQuery} from '../services/rootApi'
import {useSelector} from 'react-redux'
import Comment from './comment/Comment'

const QuickView = () => {
    const { id } = useParams()
    const {baseurl} = useSelector((state)=>state.user)
    const { data, error, isLoading }= useGetSingleProdQuery(id)
    console.log('data',data)

    return (

        <div className='homecom'>
            <div className='margin'>
              <div className='flex bg-green-50 w-full flex-wrap h-[600px] overflow-auto mt-6'>
                <div className='w-[400px] h-[400px] bg-green-200 m-4 fixed'>
                  <img src={`${baseurl}${data?.image}`} className='w-full h-[90%]'  alt="" />
                </div>
                <div className='w-[400px] h-[400px] m-4'></div>
                <div className='w-[900px] h-[200px] bg-green-400 mt-4 pl-4' >
                  <div className='fixed bg-white w-[60%] p-2 z-10 rounded'>
                  <div className='text-3xl'>{data?.product_name}</div>
                  <div className='text-xl'>Rs : {data?.price}</div>
                  <div className='text-xl'>{data?.desc}</div>
                  </div>
                  <Comment ProductID = {id} />
                </div>
              </div>
            </div>
        </div>
    )
}

export default QuickView
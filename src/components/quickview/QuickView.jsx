import React from 'react'
import '../css/home.css'
import { useParams } from 'react-router-dom'
import {useGetSingleProdQuery} from '../services/rootApi'

const QuickView = () => {
    const { id } = useParams()
   
    const { data, error, isLoading }= useGetSingleProdQuery(id)
    console.log('data',data)

    return (

        <div className='homecom'>
            <div className='margin'>
              <div className='flex bg-green-50 w-full h-[600px] mt-6'>
                <div className='w-[400px] h-[400px] bg-green-200 m-4 fixed'></div>
                <div></div>
              </div>
            </div>
        </div>
    )
}

export default QuickView
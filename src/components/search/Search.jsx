import {useParams} from 'react-router-dom'
import React from 'react'
import { useSearch } from '../../hooks/search/useSearch'
import {useSelector} from 'react-redux'
import AddCart from '../addcart/AddCart'

const Search = () => {
  const {search} = useParams()
  const {data} = useSearch(search)
  const {baseurl} = useSelector((state)=>state.user)
  console.log('data',data)


  return (
    <div className='homecom'>
        <div className='margin mb-6'>
            <div className='text-3xl mt-5 mb-5 w-full flex justify-center items-center'>Your search Results</div>
            <div className='mt-2 flex flex-wrap w-full'>
            {
                data.length > 0 && data?.map((item,index)=>{
                    return <div key={index}>
                        <div className='w-[250px] h-[350px] flex  bg-slate-200 ml-4 mt-4  dark:bg-gray-800 rounded'>
                           <div className='w-[80%] h-[80%] rounded flex flex-col justify-center items-center mt-4'>
                            <img src={`${baseurl}${item?.image}`} className='w-[200px] h-[180px] mt-4 ml-6 rounded'  alt="" />
                            <div>
                            </div>
                            <div>
                            <div className='mt-2 ml-2'>Name : {item?.product_name}</div>
                           <div className='mt-2 ml-2'>Price : {item?.price}</div>
                           <div className='mt-2 ml-2'>desc : {item?.desc}</div>
                           <div className='ml-2'><AddCart id={item?.product_id} name ={item?.product_name} price={item?.price} /></div>
                            </div>
                           </div>
                        </div>

                    </div>
                })
            }

            </div>

        </div>
    </div>
  )
}

export default Search
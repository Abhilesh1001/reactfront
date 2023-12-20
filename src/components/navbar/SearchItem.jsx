import React from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const SearchItem = ({searchData , loading, iserror}) => {
    const {baseurl} = useSelector((state)=>state.user)
    const navigate = useNavigate()
    const handleClick =(search)=>{
      navigate(`/search/${search}`)
    }
  return (
    <div className='overflow-y-auto h-[400px]'>
        <div>
            <div className='bg-white dark:bg-gray-800 rounded  p-2 mt-2 ml-14' >
                {
                    searchData?.data?.map((item)=>{
                        return <div onClick={()=>handleClick(item.product_name)} className=' bg-gray-200 rounded cursor-pointer  dark:bg-slate-600 flex flex-wrap mt-2 p-2 ' key={item.product_id}>
                        <div className='ml-2 mr-2' >{item.product_name}</div>
                        <div className='ml-2 mr-2'><img src={`${baseurl}${item.image}`} width='50px' /></div>
                        <div className='ml-2 mr-2'>Rs. {item.price}</div>
                    </div>
                    })
                }
                
            </div>
        </div>
    </div>
  )
}

export default SearchItem
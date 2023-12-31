import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getCart,getRemove } from '../feature/user/userSlicer'
import './style.css'


const AddCart = ({ id, name, price }) => {
  
  const { cart,user,sum,totalSum } = useSelector((state) => state.user)
  
  // console.log(id,name,price,user)
  const dispatch = useDispatch()
  const handleClick = (e) => {
    const qty = 1
    // console.log(id,qty,price) 
    dispatch(getCart({ id, qty, name, price }))
  }
  const handleRemove =() =>{
        dispatch(getRemove({id}))
  }

  return (
    <>{cart[id] !== undefined && cart[id] || 0 ? <div className='flex justify-center items-center'><div className='md:text-xl text-xs mr-2 pt-1 pl-2 pr-2 pb-1 rounded bg-white cursor-pointer dark:bg-black 'onClick={handleClick}>+</div><span>{cart[id].qty }</span><div className='md:text-xl  ml-2 pt-1 pl-2 pr-2 pb-1 rounded bg-white cursor-pointer dark:bg-black' onClick={handleRemove}>-</div></div>:<button className="md:text-xl mr-2 pt-1 pl-2 pr-2 pb-1 rounded bg-white dark:bg-black" onClick={handleClick} >Add to cart</button>}</>
  )
}

export default AddCart
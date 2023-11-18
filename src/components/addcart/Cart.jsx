import React,{useState} from 'react'
import './style.css'
import { useHomePro } from '../../hooks/home/useHomePro'
import {useReducer} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddCart from './AddCart'
import {initialState,reducer}  from  '../reducer/placeorderreducer'
import { usePlaceOreder } from '../../hooks/cart/usePlaceOrder'
import useWindowWidth from '../../hooks/useWindowWidth'


const Cart = () => {
  const [click,setClick] = useState("null")
  const { data } = useHomePro()
  const [dataredu,dispatch] = useReducer(reducer,initialState)
  const {width,height} = useWindowWidth()
  console.log(width,height)
  const {handleSubmit} = usePlaceOreder(dataredu)
  const handlePlace =() =>{
       setClick(`${click==="click"?"null":"click"}`)
  }

  const { cart, baseurl, sum, totalSum } = useSelector((state) => state.user)
  const reqData = data?.filter((items) => {

    for (let item of Object.keys(cart)) {
      if (parseInt(item) === items.product_id) {
        return items  
      }
    }
  })

  return (
    <div className='home' >
      <div className='margin'>
        <div className='flex my-4'>
          <div className='bg-white dark:bg-gray-600 rounded'>
            <div className='w-full flex items-center justify-center mt-2'>
              <div className='text-xl w-[95%] p-1 rounded flex justify-center items-center font-bold bg-slate-300  dark:bg-gray-800'>Item in cart Details</div>
            </div>
            <div className='m-4'>
              {
                reqData?.map((item, index) => {
                  return <div key={index} className='flex flex-wrap bg-slate-300 dark:bg-gray-800 my-2 rounded'>
                    <div className='flex m-2'>
                      <div><img src={`${baseurl}${item.image}`} alt="" className='w-[200px] h-[200px] my-4 mt-2 rounded-md' /></div>
                      <div className='ml-10 w-60 mt-4'>
                        <div className='text-xl'>Name : {item.product_name}</div>
                        <div className='text-xl'>Price : {item.price}</div>
                        {/* <div className='text-xl'>Discount Price : {item.price}</div> */}
    
                        <div className='flex my-6' > 
                          <AddCart id ={item.product_id} name = {item?.product_name} price = {item?.price}/>
                        </div>
                      </div>
                      <div>Delivery by at saturday</div>

                    </div>

                  </div>
                })
              }
            </div>
          </div>
          <div>

            <div className='bg-white w-[650px] rounded h-auto ml-4  dark:bg-gray-600'>
              <div className='m-2 w-[95%] rounded p-1 text-xl flex item-center justify-center bg-slate-300 dark:bg-gray-800'>Price Details</div>
              <div className='ml-2 rounded p-2 bg-slate-300 dark:bg-gray-800 w-[95%]'>
                <div className='text-xl' >Price({sum}) : Rs.  {totalSum}</div>
                {/* <div>Discount </div> */}
                <div className='text-xl'>Total Amount : Rs. {totalSum}</div>
                <div>You will save  :Rs . 0 Amount</div>

                <button className='bg-white p-2 rounded mt-2 text-xl dark:bg-black' onClick={handlePlace}>Place Order</button>
                { click==="click" &&<div>
                   <div>
                       <form action="" className='text-xl' onSubmit={handleSubmit}>
                            <div className='my-2 flex flex-col '>
                            <label htmlFor="name">Name :</label>
                            <input type="text"  className='rounded p-1 dark:bg-slate-600' onChange={(e)=>dispatch({type:"NAME",value:e.target.value})}/>
                            </div>
                            <div className='my-2 flex flex-col  '>
                            <label htmlFor="Address">Address</label>
                            <input type="text" className='rounded p-1 dark:bg-slate-600' onChange={(e)=>dispatch({type:"ADDRESS",value:e.target.value})} />
                            </div>
                            <div className='my-2  flex'>
                              <div>
                            <label htmlFor="Address2">Address2</label>
                            <input type="text" className='rounded p-1 dark:bg-slate-600' onChange={(e)=>dispatch({type:"ADDRESS2",value:e.target.value})} />
                              </div>
                              <div>
                            <label htmlFor="City">City</label>
                            <input type="text" className='rounded p-1 dark:bg-slate-600' onChange={(e)=>dispatch({type:"CITY",value:e.target.value})} />

                              </div>
                            </div >
                            <div className='my-2 flex'>
                              <div className=''>
                            <label htmlFor="State">State</label>
                            <input type="text" className='rounded p-1 dark:bg-slate-600' onChange={(e)=>dispatch({type:"STATE",value:e.target.value})} />
                              </div>
                              <div className='mr-10'>
                            <label htmlFor="Zip">Zip</label>
                            <input type="text" className='rounded p-1 dark:bg-slate-600' onChange={(e)=>dispatch({type:"ZIP",value:e.target.value})} />
                              </div>
                            </div>
                            <div className='my-2 flex flex-col  '>
                            
                            </div>
                            <div className='my-2 flex flex-col'>
                            <label htmlFor="phone">Phone Number</label>
                            <input type="text" className='rounded p-1 dark:bg-slate-600' onChange={(e)=>dispatch({type:"PHONE",value:e.target.value})} />
                            </div>
                            <div className='mb-2'><button className='bg-white p-1  dark:bg-black rounded' type='submit'>Submit</button></div>
                       </form>
                   </div>
                </div>}
              </div>
                   <div className='h-4'></div>
                
            </div>


          </div>
        </div>

      </div>

    </div>
  )
}

export default Cart
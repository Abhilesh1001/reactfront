import React from 'react'
import { useTracker } from '../../hooks/tracer/useTracker'
import {useSelector,useDispatch} from 'react-redux'
import AddressChange from './AddressChange'
import './style.css'
import useWindowWidth from '../../hooks/useWindowWidth'


const Tracker = () => {
    const {width} = useWindowWidth()
    const { orderDetail, handleCheckOrder, handleSubmit, cartData, tracker, hanhlecheck, adress, handleProductDetails, adressData,product,productData,handleId,adressId,productDetailId } = useTracker()
    const {baseurl} = useSelector((state)=>state.user)    
    return (
        <div className='homecom' >
            <div className='margin'>
                <div className='flex flex-wrap'>
                    <div className={`${width>1218 ?'w-[650px]':'w-[500px]' } anotheradjust mr-2`}>
                        <div className='text-xl'>Order Details</div>
                        <table className='rounded'>
                            <thead>
                                <tr className='bg-slate-400 rounded  dark:bg-gray-800'>
                                    <th>Order Id</th>
                                    {width>1218 && <th>Email</th>}
                                    <th>Order Details</th>
                                    <th>Adress</th>
                                    <th>Product Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    orderDetail.length > 0 && orderDetail.map((item, index) => {
                                        return <tr key={index} className='bg-slate-200   dark:bg-gray-600'>
                                            <td className='p-1 mt-2 flex items-center justify-center'>{item?.order_id}</td>

                                            {width>1218 && <td className='pr-4 mt-2'>{item?.email}</td>}

                                            <td ><button className={`p-2 mt-2 mb-2 mr-2 rounded ${handleId === item?.order_id && hanhlecheck!=="null"?"bg-green-100":"bg-white"}
                                              ${handleId === item?.order_id && hanhlecheck!=="null"?"dark:bg-sky-800": "dark:bg-black"} `} onClick={() => handleSubmit(item?.order_id)}>{width>946 ? <div>Check Order Status</div>:<div>Check</div>}</button></td>

                                            <td ><button className={` p-2 mt-2 mb-2 mr-2 rounded ${adressId === item?.order_id && adress!=="null"?"bg-green-100":"bg-white"}  ${adressId === item?.order_id && adress!=="null"?"dark:bg-sky-800":"dark:bg-black"}`} onClick={() => handleCheckOrder(item?.order_id)}>{width>946 ? <div>Check Address</div>:<div>Check</div>}  </button></td>

                                            <td ><button className={` p-2 mt-2 mb-2 mr-2 rounded ${productDetailId === item?.order_id && product!=="null"?"bg-green-100":"bg-white"}  ${productDetailId === item?.order_id && product!=="null"?"dark:bg-sky-800":"dark:bg-black"}`} onClick={() => handleProductDetails(item?.order_id)}>{width>946 ? <div>Product Details</div>:<div>Check</div>}  </button></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                    <div className='widthadjust'>
                        {hanhlecheck !== "null" && <div className='w-full'>
                            <div className='text-xl'>Your Order Satus</div>
                            {
                                tracker.map((item, index) => {
                                    // console.log(item)
                                    return <div key={index} className='w-full'>
                                        <div className='flex bg-slate-200 p-2  dark:bg-gray-700   rounded' >
                                            <div className='ml-2 mr-1'>{item?.update_desc}</div>
                                            <div>{item?.timestamp}</div>
                                        </div>
                                    </div>
                                })
                            }


                        </div>
                        }

                        {adress !== "null" &&  <AddressChange adressData = {adressData} />}

                        {
                           product !== "null" && <div className='w-full '>
                           <div className='text-xl'>
                               Product Details</div>
                               <div className='bg-slate-200 p-2  dark:bg-gray-700  rounded h-auto mb-4'>
                                   {
                                    Object.keys(productData).map((item,index)=>{
                                       
                                        return <div key={index} className='flex  my-2 bg-slate-100 p-2 dark:bg-black rounded' >
                                            <div className='w-40 h-40 rounded'>
                                                <img src={`${baseurl}${productData[item].image}`} className='w-40 h-40 rounded'  alt="" />
                                            </div>
                                            <div className='ml-4'>
                                            <div >Product Name : {productData[item].product_name}</div>
                                            <div>Produc cat : {productData[item].category} </div>
                                            <div>Price : {productData[item].price} Rs. </div>
                                            
                                            </div>
                                        </div>
                                    })
                                   }
                               </div>
                       </div> 
                        }


                    </div>

                </div>

            </div>
        </div>
    )
}

export default Tracker
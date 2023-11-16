import React from 'react'
import '../css/home.css'
import { useHomePro } from '../../hooks/home/useHomePro'
import {} from '../feature/user/userSlicer'
import {useSelector} from 'react-redux'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HomeCarousel from './product/homeCarousel/HomeCarousel'



const Home = () => {
    const {data} = useHomePro()
    const {baseurl} = useSelector((state)=>state.user)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
      };
  return (
    <div className='homecom' >
        <div className='margin'>
            This is  home page
            <div className='mainbox'></div>
            <div className=''>
                <Slider {...settings}>
                {data?.map((item,index)=>{
                    const ImageUrl  = `${baseurl}${item?.image}`    
                    return <div key={index} className='h-450px  dark:bg-gray-800 bg-slate-200 rounded'> 
                    <div className='h-56 flex justify-center items-center rounded-t-xl'>
                      <img src={`${ImageUrl}`} className='h-44 w-44 rounded' alt="" />
                    </div>
                    <div className='ml-2 mt-4 flex-col items-center justify-center'>
                    <div>Product Name : <b>{item?.product_name}</b></div>
                    <div >MRP Rs :<b>{item?.price}</b> </div>
                    <div className='mb-4'>{item?.desc}</div>
                    </div>
                    <div className='flex justify-between ml-2 mr-2 mb-4'> 
                    <button className='bg bg-slate-50 p-2 rounded cursor-pointer dark:bg-black'>Add to Cart</button>
                    <a className='bg bg-slate-50 p-2 rounded cursor-pointer dark:bg-black'> Quick View</a>
                    </div>
                    </div>
                })}
                </Slider>
            </div>
            <HomeCarousel />
        </div>
        
    </div>
  )
}   

export default Home
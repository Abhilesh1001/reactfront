import React from 'react'
import '../css/home.css'
import { useHomePro } from '../../hooks/home/useHomePro'
import {} from '../feature/user/userSlicer'
import {useSelector} from 'react-redux'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import HomeCarousel from './product/homeCarousel/HomeCarousel'
import Image1 from  '../../assets/1.jpg'
import Image2 from  '../../assets/2.jpg'
import Image3 from  '../../assets/3.jpg'
import AddCart from '../addcart/AddCart'



const Home = () => {
    const {data} = useHomePro()
    const {baseurl} = useSelector((state)=>state.user)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,  
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div className='homecom' >
        <div className='margin'>
            <div className='mainbox flex ml-3 mt-4 h-[260px] md:h-[290px]  lg:h-[300px] xl:h-[410px]'>
               <div className='w-[50%] '>
                {/* <img src={Image2}className=' h-[340px] w-[700px] rounded' alt="" /> */}
                <img src={Image2}className='h-[250px] w-[100%] md:h-[280px] md:w-[100%] lg:h-[300px] lg:w-[100%] rounded xl:h-[400px]' alt="" />
               </div>
               <div className='w-[50%]'>
               <img src={Image3} className = 'ml-5 h-[250px] w-[85%] md:h-[280px] md:w-[90%] xl:h-[400px]  lg:h-[300px] rounded' alt="" />
               </div>
            </div>
            <div className=''>
                <Slider {...settings}>
                {data?.map((item,index)=>{
                    const ImageUrl  = `${baseurl}${item?.image}`    
                    return <div key={index} className='md:h-450px h-200px dark:bg-gray-800 bg-slate-200 rounded'> 
                    <div className='md:h-56 h-40 flex justify-center items-center rounded-t-xl'>
                      {/* <img src={`${ImageUrl}`} className='h-44 w-44 rounded' alt="" /> */}
                      <img src={`${ImageUrl}`} className='md:h-44 md:w-44 h-32 w-32 rounded' alt="" />
                    </div>
                    <div className='ml-2 mt-4 flex-col items-center justify-center cartbelow'>
                    <div>Product Name : <b>{item?.product_name}</b></div>
                    <div >MRP Rs :<b>{item?.price}</b> </div>
                    <div className='mb-4'>{item?.desc}</div>
                    </div>
                    <div className='flex justify-between ml-2 mr-2 mb-4'> 
                    <div className=''><AddCart  id={item?.product_id} name={item?.product_name} price={item?.price}  /></div>
                    <a className='bg bg-slate-50 p-2 rounded cursor-pointer dark:bg-black displaymention'> Quick View</a>
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
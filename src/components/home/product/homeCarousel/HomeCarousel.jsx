import React from 'react'
import {useCatHome} from '../../../../hooks/home/useCatHome'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import {NavLink} from  'react-router-dom'
import AddCart from '../../../addcart/AddCart';
import './style.css'


const HomeCarousel = () => {
  const {data,loading} = useCatHome()
//   console.log('data',data)
  const {baseurl} = useSelector((state)=>state.user)

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
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
      },
      
    ]
  };

  return (
    <div className='mt-2 mb-6'>
        {loading &&
            Object?.keys(data)?.map((cat,index)=>{
                // console.log(cat)
                return <div key={index}>
                    <div className='text-4xl mt-4 mb-4 ml-2'><b>{cat}</b></div>
                    <Slider {...settings}>
                    {data[cat]?.map((item,indexs)=>{
                        // console.log(item)
                        const ImageUrl  = `${baseurl}${item?.image}` 
                        return <div key={indexs} className='md:h-450px h-200px  dark:bg-gray-800 bg-slate-200 rounded'>
                           <div className='md:h-56 h-40 flex justify-center items-center rounded-t-xl'>
                      <img src={`${ImageUrl}`} className='md:h-44 md:w-44 h-32 w-32 rounded' alt="" />
                    </div>
                    <div className='ml-2 mt-4 flex-col items-center justify-center cartbelow'>
                    <div>Product Name : <b>{item?.product_name}</b></div>
                    <div >MRP Rs :<b>{item?.price}</b> </div>
                    <div className='mb-4'>{item?.desc}</div>
                    </div>
                    <div className='flex justify-between ml-2 mr-2 mb-4'> 

                    <div className='rounded'>
                      
                      <AddCart id = {item?.product_id} name = {item?.product_name} price = {item?.price}  />
                      
                      </div>


                    <NavLink to={`/QuivkView/${item?.product_id}`}><button className='bg bg-slate-50 p-2 rounded cursor-pointer dark:bg-black displaymention'>Quick View</button></NavLink>
                    </div>

                        </div>
                    })}
                    </Slider>
                   
                </div>
            })
        }
       

    </div>
  )
}

export default HomeCarousel
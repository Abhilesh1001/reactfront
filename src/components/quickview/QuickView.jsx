import React,{useEffect,useState} from 'react'
import '../css/home.css'
import { useParams } from 'react-router-dom'
import {useGetSingleProdQuery} from '../services/rootApi'
import {useSelector} from 'react-redux'
import Comment from './comment/Comment'
import AddCart from '../addcart/AddCart'
import { useScroll } from '../../hooks/useScroll'
import './style.css'
import useWindowWidth from '../../hooks/useWindowWidth'

const QuickView = () => {
    const { id } = useParams()
    const {baseurl} = useSelector((state)=>state.user)
    const { data, error, isLoading }= useGetSingleProdQuery(id)
    const {scrollHeight,innerHeight,userTopHeight} = useScroll()
    // console.log('data',scrollHeight,innerHeight,userTopHeight)
    const [isFixed, setIsFixed] = useState(false);
    const {width} = useWindowWidth()

    useEffect(() => {
      if (userTopHeight >= 315) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    }, [userTopHeight]);

    return (
        <div className='homecom'>
            <div className='pt-[60px] md:pl-[40px] md:mr-[40px]'>
              <div className='flex w-full flex-wrap h-auto  mt-6'>
                <div className={` setdiv bg-slate-200 m-4 dark:bg-gray-800 ${width>829 && (isFixed ? `relative top-[316px]` : 'fixed')} } flex flex-col rounded`}>
                  <div className='w-full flex items-center justify-center'>
                  <img src={`${baseurl}${data?.image}`} className='imageset rounded-xl my-4'  alt="" />
                  </div>
                  
                  <div className=' p-4 cardset'>
                  <button className=' bg-white  dark:bg-gray-800 p-1 rounded mb-2'>Buy Now</button>
                  <div className=' p-2 rounded'><AddCart id={id} name={data?.product_name} price={data?.price} /></div>
                  </div>
                </div>
                {width>829 && (userTopHeight< 315 && <div className=' widthbackset m-4'></div>)}
                {/* <div className='w-[900px] h-[200px] mt-4 pl-4' > */}
                <div className='h-auto w-auto mt-4 pl-4'>
                  <div className='p-2 z-10 rounded'>
                  <div className='text-3xl'>Phone: {data?.product_name}</div>
                  <div className='text-xl'>Price Rs : {data?.price}</div>
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
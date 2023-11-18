import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='homecom1' >
        <div className='h-[300px] mt-0 w-full dark:bg-gray-800 bg-slate-200'>

         <div className='margin flex flex-wrap ml-10 mr-10'>
              <div className='mr-10 text-xl'>
                <div>About</div>
                <div>Contact Us</div>
                <div>Abhilesh Stores</div>
                <div>Cart Information</div>
              </div>
              <div className='mr-10 text-xl'>
                <div>Help</div>
                <div>Shipping</div>
                <div>Cancellation and Refund</div>
                <div>Help</div>
              </div>
              <div className='mr-10 text-xl'>
                <div>Links</div>
                
                <a href='https://abhimovie-ten.vercel.app/' target="_blank">https://abhimovie-ten.vercel.app/</a><br></br>
                <a href = 'https://www.linkedin.com/in/abhileshkumar' target="_blank">www.linkedin.com/in/abhileshkumar</a><br /> 
                <a href = 'https://www.youtube.com/@abhileshkr' target="_blank">https://www.youtube.com/@abhileshkr</a>
              </div>
              <div className='text-xl'>
                <div>Track Order</div>
                <div>Contact US</div>
                <div>Contact US</div>
                <div>Login</div>
                <div>Signup</div>
              </div>
        </div>

         </div>
        </div>

    
  )
}

export default Footer
import React from 'react'
import { assets } from '../assets/frontend-assets/assets'
import { Link, NavLink } from 'react-router-dom'
import Mailto from './Mailto'
import Callto from './Callto'

const Footer = () => {
  return (

    

    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'> 
            <div>
                <img src={assets.logo} className='mb-5 w-32 'alt='' />
                <p className='w-full md:w-2/3 text-gray-600'>duis consequat duis aute quis veniam culpa eiusmod magna elit mollit incididunt nulla proident quis magna duis dolore cillum ipsum </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>OUR COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About Us</li></Link>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
           </div>

           <div>
                <p className='text-xl font-medium mb-5'>CONNECT WITH US</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li><Callto phone="+2348137562229">+2348137562229</Callto></li>
                    <li><Mailto email="customercare@bethelcouture.com" subject="" body="">customercare@bethelcouture.com</Mailto></li>
                    <li><a href="https://wa.me/2349027273435">+2349027273435 (Whatsapp only)</a></li>
                </ul>
            </div>
        </div>

        <div>
            <hr  />
            <p className='py-5 text-sm text-center'>Copyright 2024 @BETHEL-COUTURE.com - All Right Reserved</p>
        </div>
      
    </div>
  )
}

export default Footer

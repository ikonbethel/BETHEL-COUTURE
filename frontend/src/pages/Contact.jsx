import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend-assets/assets'
import NewsletterBox from '../components/NewsletterBox'
import Mailto from '../components/Mailto.jsx'
import Callto from '../components/Callto.jsx'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
          <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-[50%] md:max-w[480px]' src={assets.contact_img} alt=''/>
        <div className='flex flex-col justify-center items-start gap-6'>
            <p className='font-semibold text-xl text-gray-600'>Our Store</p>
            <p className='text-gray-500'>234 chanchaga Avenue <br/> Minna Metropolis, Niger State, Nigeria.</p>
            <p className='text-gray-500'>Tel: <span><Callto phone="+2348137562229">+2348137562229</Callto></span>, <span><Callto phone="+2348137562229">+2348137562229</Callto></span>, <br/> <Mailto email="customercare@bethelcouture.com" subject="" body="">customercare@bethelcouture.com</Mailto></p>
            <p className='font-semibold text-xl text-gray-600'>Careers at BETHEL-COUTURE</p>
            <p className='text-gray-500'>Learn more about our teams and job openings</p>
            <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>
      </div>
      <NewsletterBox/>
                    
    </div>
  )
}

export default Contact

import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/frontend-assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
          <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
          <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=''/>
          <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
              <p>aliquip non est pariatur velit enim deserunt laboris excepteur est ut exercitation fugiat dolor quis voluptate cupidatat dolor exercitation qui </p>
              <p>ex quis ullamco mollit reprehenderit ea irure cillum occaecat amet quis reprehenderit labore qui dolor exercitation proident anim dolore ad </p>
              <b className='text-gray-800'>OUR MISSION</b>
              <p>in dolore voluptate reprehenderit tempor non laborum id occaecat in occaecat amet fugiat do cupidatat </p>

          </div>
      </div>

      <div className='text-2xl py-4'>
          <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>QUALITY ASSURANCE:</b>
             <p className='text-gray-600'>occaecat consectetur irure mollit eu in sit amet laboris ut ad ullamco occaecat anim commodo deserunt nisi tempor enim dolore </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>CONVENIENCE:</b>
             <p className='text-gray-600'>excepteur sed sint commodo mollit laboris nisi in est consectetur dolore duis est est amet eu consequat sint nisi anim </p>
          </div>
          <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
              <b>EXCEPTIONAL CUSTOMER SERVICE:</b>
             <p className='text-gray-600'>cillum ut in adipiscing anim mollit nisi ad aute eu esse nisi tempor enim dolor cillum enim amet lorem enim </p>
          </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About

import React from 'react'
import {assets} from '../assets/admin_assets/assets'

const Navbar = ({setToken}) => {
  return (
    <div className='flex justify-between items-center py-4 px-[4%]'>
        <img className='w-[max(1%, 80px)]' src={assets.logo} alt='' />
        <button onClick={()=>setToken('') } className='bg-gray-600 text-white px-5 py-2 sm:px-7 sm:py-2 rounded-full text-xs sm:text-sm'>Log out </button>
      
    </div>
  )
}

export default Navbar

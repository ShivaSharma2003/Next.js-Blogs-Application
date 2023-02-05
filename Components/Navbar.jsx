'use client'
import React from 'react'
import { FaUser } from 'react-icons/fa'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='w-[100%] h-14 border-b-2 shadow-md bg-white/95 flex flex-row justify-between items-center px-[5%]'>
      <div>
        <h2 className='text-black/50 font-semibold text-xl cursor-pointer'>CodeBlogs</h2>
      </div>
      <div className='flex flex-row items-center justify-center '>
        <ul className='sm:flex hidden flex-row gap-4 '>
          <li className='text-lg font-semibold text-black/50 '>Home</li>
          <li className='text-lg font-semibold text-black/50 '>Blogs</li>
        </ul>
        <div className='sm:hidden flex '>
          <FaUser className='text-xl text-black/50 cursor-pointer ' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

 function Header() {
    const [toggle, settoggle] = useState(false)
  return (
    <>
   <div className="bg-blue-500 shadow-2xl" id='Home'>
   <header className="max-w-[1240px] mx-auto flex justify-between items-center px-8 py-4">
    <h1 className='font-bold text-[24px] text-white'>John Smith</h1>
    {toggle ?
          <AiOutlineClose onClick={() => settoggle(!toggle)} className='text-white text-[20px] fixed right-[28px] md:hidden cursor-pointer z-10' />
          :
          <AiOutlineMenu onClick={() => settoggle(!toggle)} className='text-white text-[20px] md:hidden cursor-pointer' />
        }
   
    <nav className='hidden md:flex'>
        <li className='list-none px-4'><a className='text-white hover:text-[#d0c9c9] duration-300' href="#Home" >Home </a></li>
        <li className='list-none px-4'><a className='text-white hover:text-[#d0c9c9] duration-300' href="#About">About</a></li>
        <li className='list-none px-4'><a className='text-white hover:text-[#d0c9c9] duration-300' href="#Portfolio">Portfolio</a></li>
        <li className='list-none px-4'><a className='text-white hover:text-[#d0c9c9] duration-300' href="#Skills">Skills</a></li>
        <li className='list-none px-4'><a className='text-white hover:text-[#d0c9c9] duration-300' href="#Contact">Contact</a></li>
    </nav>
    {/* Responsive Navbar */}
    <nav className={`md:hidden fixed  top-0 h-screen w-full ${toggle ? 'left-0' : 'left-[-100%]'}`}>
        <ul className=''>
        <li className='list-none p-6 bg-black'><a className='text-white hover:text-[#d0c9c9] duration-300' href="#">Home</a></li>
        <li className='list-none p-6 bg-black'><a className='text-white hover:text-[#d0c9c9] duration-300' href="#">About</a></li>
        <li className='list-none p-6 bg-black'><a className='text-white hover:text-[#d0c9c9] duration-300' href="#">Portfolio</a></li>
        <li className='list-none p-6 bg-black'><a className='text-white hover:text-[#d0c9c9] duration-300' href="#">Skills</a></li>
        <li className='list-none p-6 bg-black'><a className='text-white hover:text-[#d0c9c9] duration-300' href="#">Contact</a></li>
        </ul>
    </nav>
   </header>
   </div>
    
    </>
  )
}

export default Header;
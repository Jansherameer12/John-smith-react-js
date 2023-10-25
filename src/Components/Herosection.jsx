import React from 'react'
import Typed from 'react-typed';
import {AiOutlineGithub, AiOutlineLinkedin} from 'react-icons/ai';
import {BsStackOverflow} from 'react-icons/bs';

function Herosection(props) {
  return (
    <>
     <div className="">
      <div className="md:flex justify-between items-center px-8 py-16">
      <div>
          <img className='w-[90%]' src={props.Hero} alt="" />
        </div>
      <div className=" max-w-[1240px] mx-auto  px-8 py-16 text-center ">
            <h3 className='text-[32px] '>Hi, I am John Smith</h3>
            {/* <h1 className='text-[35px] md:text-[45px] font-bold text-white'>Grow with Us</h1> */}
            <h1 className='text-[25px] '><span>I am a Professional <br/> </span> <Typed
                    strings={['Web Developer', 'App Developer', 'Graphic Designer','Content Writer']}
                    typeSpeed={150}
                    loop={true}
                    backSpeed={100}
                /></h1>
           <div className='flex justify-center items-center'>
            <AiOutlineGithub   href='www.google.com' className='ml-4 mt-8 bg-black  text-white text-[35px] cursor-pointer rounded-full ' />
            <AiOutlineLinkedin href='www.google.com' className='ml-4 mt-8 bg-black  text-white text-[35px] cursor-pointer rounded-full '/>
            <BsStackOverflow   href='www.google.com' className='ml-4 mt-8 bg-black  text-white text-[35px] cursor-pointer rounded-full '/>

           </div>
        </div>
       
      </div>
        
     </div>
    </>
  )
}

export default Herosection
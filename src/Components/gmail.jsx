import React from 'react'
import {CiFacebook} from 'react-icons/ci'
import {BsTelegram, BsWhatsapp} from 'react-icons/bs'
import { AiOutlineInstagram,AiOutlineWhatsApp} from 'react-icons/ai'

function Gmail() {
  return (
    <div className='flex flex-col justify-center items-center'>
        <h1 className='text-center font-bold text-[20px] uppercase'>Social Media </h1>

        <div className="flex">
            < CiFacebook         className='cursor-pointer ml-2 text-[30px]'/>
            < AiOutlineInstagram className='cursor-pointer ml-2 text-[30px]'/>
            < BsWhatsapp         className='cursor-pointer ml-2 text-[30px]'/>
            < BsTelegram         className='cursor-pointer ml-2 text-[30px]'/>
        </div>
        <h1 className='text-center font-bold text-[20px] uppercase mt-8'>Email </h1>
        <p className="text-center my-4">JohnSmith@gmail.com</p>
    </div>
  )
}

export default Gmail
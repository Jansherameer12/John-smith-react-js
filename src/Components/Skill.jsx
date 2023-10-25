import React from 'react'

function Skill(props) {
  return (
    <div>
        <div className='flex flex-col justify-center items-center'>
            <img src={props.img} className='w-[90px] h-[20vh]  ' alt="" />
            <h1 className='text-center font-bold text-[15px]'>{props.title}</h1>
        </div>
    </div>
  )
}

export default Skill
import React from 'react'

function Work(props) {
  return (
    <div className='px-16 text-center  md:px-8'>
        <div className='w-[350px] md:w-[300px] bg-white border-2 shadow-xl p-2 hover:scale-105 rounded-lg border-black my-4 duration-300'>
            <img src={props.img}  className='shadow-xl rounded-lg w-full h-[50vh]' alt="" />
            <h2 className="text-center font-bold text-xl py-2">{props.title}</h2>
            <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo ipsum rem error recusandae nulla rerum dolor aliquid, saepe animi expedita!</p>
            <div className="text-center flex my-4 justify-between items-center">
              <a className='px-2 py-1 bg-green-700 rounded-md text-white hover:bg-green-900 duration-200' href="#">Live Preview</a>
              <a className='px-2 py-1 bg-green-700 rounded-md text-white hover:bg-green-900 duration-200' href="#">Source Code</a>
              </div>
        </div>
    </div>
  )
}

export default Work
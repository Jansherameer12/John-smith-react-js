import React from 'react'

function About(props) {
  return (
    <>
    <div className='bg-blue-500 pt-8 ' id='About'>
        <div className="md:flex justify-between items-center px-8">
            <div className="text-center md:w-[50%]">
                <h1 className='text-white text-[40px] font-bold'>
                    About Me
                </h1>
                <p className='text-white  leading-6 font-normal text-[20px] text-justify mt-4'>Hello, I'm John Smith, an experienced Full Stack Developer with proficiency in a wide range of technologies. My skills span from frontend technologies like JavaScript and ReactJS to backend development with Node.js and Express.js. </p>
            </div>
            <div className="md:w-[50%] flex justify-center">
                <img src={props.img} className='w-[90%] md:w-[70%] h-[80vh] ' alt="" />
            </div>
        </div>
    </div>
    </>
  )
}

export default About
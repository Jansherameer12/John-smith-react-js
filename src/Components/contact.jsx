import React from 'react'

function Contact() {
  return (
    <div>
        <form action="https://formspree.io/f/xqkvnyzj" method='POST'>
            {/* <h1 className="text-cente">
                Feel Free To Contact
            </h1> */}
            <input name='Name' className='outline-none border w-[300px] my-2 p-2 rounded h-[8vh]' type="text" placeholder='Enter Name Here'  required/> <br/>
            <input name='Email' className='outline-none border w-[300px] my-2 p-2 rounded h-[8vh]' type="email" placeholder='Enter Email Here' required /> <br/>
            <textarea className='outline-none border w-[300px] my-2 p-2 rounded ' placeholder='Enter Message Here' required name='Message' cols="15" rows="5"></textarea> <br />
            <div className="text-center"><button type="Submit" className='bg-black px-4 py-2 text-white  rounded hover:bg-gray-500 duration-500'>Submit</button></div>
        </form>
    </div>
  )
}

export default Contact
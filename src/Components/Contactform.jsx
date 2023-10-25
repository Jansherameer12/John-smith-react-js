import React from 'react'
import Contact from './contact'
import Gmail from './gmail'

function Contactform() {
  return (
    <div id='Contact'>
         <h1 className="text-center py-4 font-bold uppercase py-4 text-[30px]">Contact</h1>
        <div className="md:flex justify-between  px-20">
            <div>
                <Gmail/>
            </div>
            <div className="">
                <Contact/>
            </div>
        </div>
    </div>
  )
}

export default Contactform
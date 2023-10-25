import React from 'react'
import Work from './Work'
import Work1 from '../assets/work1.jpg'
// import Portfolio from 'https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/06/Portfolio-website-of-the-product-designer-and-front-end-developer-Adham-Dannaway.webp'

function Works() {
  const book="https://i.pinimg.com/originals/e1/ca/6b/e1ca6b06d9d2ec55c7e50dc901cf785a.jpg"
  const cloth="https://elements-cover-images-0.imgix.net/29879b86-d2c7-49ef-8fca-7cfcef6bf530?auto=compress%2Cformat&fit=max&w=433&s=e462319f886ac3d698833d6ddb866320"
  const ecom="https://colorlib.com/wp/wp-content/uploads/sites/2/capitalshop-free-template-353x278.jpg"
  const blog='https://d85wutc1n854v.cloudfront.net/live/products/600x375/WB0N4162J.png?v=1.0'
  const Portfolio ="https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/06/Portfolio-website-of-the-product-designer-and-front-end-developer-Adham-Dannaway.webp"
  return (
    <div id='Portfolio'>
      <h1 className="text-center py-4 font-bold uppercase text-[30px]">Portfolio</h1>
      
        <div className="md:flex justify-between space-y-3 items-center overflow-hidden">
        <Work img={Work1} title={"EFlyer"}/>
        <Work img={Portfolio} title={"Portfolio"}/>
        <Work img={blog} title="Blogging Website"/>
        </div>
        <div className="md:flex justify-between space-y-3 items-center overflow-hidden">
        <Work img={ecom} title={"Ecommerce website"}/>
        <Work img={cloth} title={"Clothing Website"}/>
        <Work img={book} title="Online Library"/>
        </div>

    </div>
  )
}

export default Works
import React from 'react'
import Skill from './skill'

function Skills() {
    // Skills Image Links and variable decalarations
    const htmlimg='https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png'
    const css='https://seeklogo.com/images/C/css-3-logo-023C1A7171-seeklogo.com.png'
    const js='https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png'
    const tailwind="https://avatars.githubusercontent.com/u/67109815?s=280&v=4"
    const react="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
    const wordpress='https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/WordPress_blue_logo.svg/1024px-WordPress_blue_logo.svg.png'
    const shop='https://cdn3.iconfinder.com/data/icons/social-media-2068/64/_shopping-512.png'
    const scss='https://sass-lang.com/assets/img/styleguide/seal-color.png'
    const figma ='https://s3-alpha.figma.com/hub/file/2709726394/1b148820-ae15-4bb5-b70d-377daab5ac93-cover.png'
    return (
    <div id='Skills'>
        <h1 className="text-center py-4 font-bold uppercase py-4 text-[30px]">Skills</h1>
        <div className="flex gap-16 md:gap-24 px-4 items-center justify-center">
        <Skill img={htmlimg} title="HTML"/>
        <Skill img={css} title="CSS"/>
        <Skill img={js} title="JavaScript"/>
        <Skill img={tailwind} title="Tailwind Css"/>
        </div>
        <div className="flex gap-16 md:gap-24 px-4 items-center justify-center py-4">
        <Skill img={react} title="React Js"/>
        <Skill img={wordpress} title="Wordpress"/>
        <Skill img={shop} title="Shopify"/>
        <Skill img={scss} title="SCSS"/>
        </div>
    </div>
  )
}

export default Skills
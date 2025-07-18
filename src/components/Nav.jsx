
import React from 'react'
import { NavLink} from 'react-router-dom'
import '../assets/css/Nav.css'; // relative path


const Nav = () => {
  return (

    <>

          <div className='w-full h-[5rem] sticky flex items-center   '>
            <div className='w-full h-full items-center    flex justify-center gap-10 text-3xl  '>

        <NavLink to={'/'} className={({isActive})=> isActive?"active":""} > Home  </NavLink>
        <NavLink to={'/service'}> Services  </NavLink>

        <NavLink to={'/about'} > About </NavLink>
        <NavLink to={'/contact'} > Contact </NavLink>

    </div>

          </div>
     
    </>
   
  )
}

export default Nav
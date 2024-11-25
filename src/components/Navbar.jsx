import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  const Linkclass = ({isActive}) => {
    return isActive ? "ActiveLink": "links";
 }


  return (
    <>
      <nav>
        <h2>Myown</h2>
        <div>
            <NavLink to='/' className={Linkclass}>Home</NavLink>
            <NavLink to='/Addblogs' className={Linkclass}>Add Blogs</NavLink>
        </div>
      </nav>
    </>
  )
}

export default Navbar
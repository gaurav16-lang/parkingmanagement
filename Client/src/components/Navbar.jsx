import React from 'react'
import { Link } from 'react-router-dom'
import style from './Navbar.module.css'
const Navbar = () => {
  return (
    <>
      <div className={style.back}>
        <div className={style.nav}>
          <div>
            <Link to={'/About'}>About</Link>
          </div>
          <div>
            {' '}
            <Link to={'/login'}>Login</Link>
          </div>
          <div>
            <Link to={'/Registration'}>Registration</Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar

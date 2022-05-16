import React from "react"
import './Header.css'
import { Link } from "react-router-dom"
import { FaFlagUsa } from 'react-icons/fa'


const Header = () => {
  return (
    <section className="header">
      <FaFlagUsa />
      <Link to='/'>  
        <h1 className="title">We The People</h1>
      </Link>
      {/* Take Quiz/ Home */}
      {/* State Dropdown */}
    </section>
  )
}

export default Header
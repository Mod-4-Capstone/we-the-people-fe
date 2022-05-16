import React from "react"
import './Header.css'
import { Link } from "react-router-dom"


const Header = () => {
  return (
    <section className="header">
      <Link to='/'>  
        <h1 className="title">We The People</h1>
      </Link>
      {/* Take Quiz/ Home */}
      {/* State Dropdown */}
    </section>
  )
}

export default Header
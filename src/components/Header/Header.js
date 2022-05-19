import React from "react"
import './Header.css'
import { Link, useLocation } from "react-router-dom"
import { FaFlagUsa } from 'react-icons/fa'


const Header = () => {
  const location = useLocation()

  return (
    <section className="header">
      <FaFlagUsa />
        <h1 className="title">We The People</h1>
      {location.pathname === "/results-dashboard" && 
        <Link to="/">
          <button className="home-btn">Home</button>
        </Link>}

      {/* State Dropdown */}
    </section>
  )
}

export default Header
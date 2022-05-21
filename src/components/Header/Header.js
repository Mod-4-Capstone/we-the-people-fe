import React, { useContext } from "react"
import './Header.css'
import StateDropdown from "../StateDropdown/StateDropdown"
import { Link, useLocation } from "react-router-dom"
import { FaFlagUsa } from 'react-icons/fa'
import { DataContext } from '../../contexts/DataContext'

const Header = () => {
  const repData = useContext(DataContext)
  const location = useLocation()

  return (
    <section className="header">
      <div className="site-title">
        <FaFlagUsa />
        <h1 className="title">We The People</h1>
      </div>

      <StateDropdown />

        {location.pathname === "/results-dashboard" &&
          <Link to="/">
            <button className="home-btn" onClick={() => repData.setIsFormSubmitted(false)}>Home</button>
          </Link>}
    </section>
  )
}

export default Header

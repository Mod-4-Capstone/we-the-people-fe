import React from "react"
import './Layout.css'
import Header from "../Header/Header"
import Footer from "../Footer/Footer"


const Layout = (props) => {
  
  return (
  <>
    <Header/>
      {props.children}
    <Footer/>
  </>
  )
}

export default Layout
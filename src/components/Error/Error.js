import React from 'react';
import './Error.css'
import {BiMessageAltError} from "react-icons/bi";
import { Link } from "react-router-dom"



const Error = () => {
  return (  
    <section className='error-container'>
      <BiMessageAltError className='error-icon'/>
      <h1>Whoops! Something went wrong.</h1>
      <Link to='/'>
        <button className='home-btn'>Back to Main</button>
      </Link>
    </section>
  );
}
 
export default Error;
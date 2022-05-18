import React from "react"
import RepCard from "../RepCard/RepCard";
import "./RepContainer.css"
import { legislators } from "../../data/data";

const RepContainer = () => {

  const createRepCards = () => {
    return legislators.map(legislator => {
      return <RepCard repData={legislator}/>
    })
  }
  
  
  return ( 
    <section className="rep-container">
     {createRepCards()}


    </section>
   );
}
 
export default RepContainer;
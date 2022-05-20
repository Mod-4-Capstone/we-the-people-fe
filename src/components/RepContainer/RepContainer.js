import React, { useContext } from "react"
import RepCard from "../RepCard/RepCard";
import "./RepContainer.css"
import { DataContext } from '../../contexts/DataContext'
// import { legislators } from "../../data/data";

const RepContainer = () => {
  const legislators = useContext(DataContext)
  console.log(legislators)
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

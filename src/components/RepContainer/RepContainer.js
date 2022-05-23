import React, { useContext } from "react"
import RepCard from "../RepCard/RepCard";
import "./RepContainer.css"
import { DataContext } from '../../contexts/DataContext'

const RepContainer = () => {
  const legislators = useContext(DataContext)
  const createRepCards = () => {
    return legislators.legislators.map(legislator => {
      return <RepCard key={legislator.id} repData={legislator}/>
    })
  }

  return (
    <section className="rep-container">
     {createRepCards()}
    </section>
   );
}

export default RepContainer;
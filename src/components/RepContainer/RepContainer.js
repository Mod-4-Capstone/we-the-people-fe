import React, { useContext } from "react"
import RepCard from "../RepCard/RepCard";
import "./RepContainer.css"
import { DataContext } from '../../contexts/DataContext'

const RepContainer = () => {
  const legislators = useContext(DataContext)

  const createRepCards = () => {
    if (legislators.legislators.every(rep => rep.attributes.compatibility)) {
      const sortedLegislators = legislators.legislators.sort((a, b) => {
        return b.attributes.compatibility.toFixed(1) - a.attributes.compatibility.toFixed(1)
      })
      return sortedLegislators.map(legislator => {
        return <RepCard key={legislator.id} repData={legislator}/>
      })
    } else {
      return legislators.legislators.map(legislator => {
        return <RepCard key={legislator.id} repData={legislator}/>
      })
    }
  }

  return (
    <section className="rep-container">
     {createRepCards()}
    </section>
   );
}

export default RepContainer;



/*

TO FIX
-> California & Georgia, reps have no districts, all are listed as Senators with their district as CA
-> Years in office and re-election years don't all look accurate. Not sure if that's coming right from the API or if it's going through some calculations?
-> Need condition in RepCard if repData.attributes.rating.planned_parenthood is null to show default data


*/ 
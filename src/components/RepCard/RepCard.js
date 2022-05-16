import React from "react"
import "./RepCard"
import "./RepCard.css"

const RepCard = () => {
  return ( 
    <div className="rep-card">
      <div className="bio-info">
        <div>
          <img src="https://theunitedstates.io/images/congress/450x550/H000273.jpg" className="rep-img"/>
        </div>
        <div className="bio-text-container">
          <p className="bio-text">Senator John Hickenlooper</p>
          <p className="bio-text">State: Colorado</p>
          <p className="bio-text">Age: 70</p>
          <p className="bio-text">Gender: Male</p>
          <p className="bio-text">First elected in: 2021</p>
          <p className="bio-text">Up for re-election in: 2027</p>
          <p className="rep-match">90% match with your beliefs</p>
        </div>
      </div>
      <div className="rep-issues-container">
        <p className="rep-issues">Planned Parenthood: 100%</p>
        <p className="rep-issues">National Parks Conservation Association: 70%</p>
        <p className="rep-issues">ACLU: 30%</p>

      </div>
    </div>
   );
}
 
export default RepCard;
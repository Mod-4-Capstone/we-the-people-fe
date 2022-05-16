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
        <div>
          <p className="bio-text">Name, etc.</p>
          <p className="bio-text">Name, etc.</p>
          <p className="bio-text">Name, etc.</p>
        </div>
      </div>
      <div>
        <p className="rep-issues">
          Planned Parenthood, etc
        </p>
      </div>
    </div>
   );
}
 
export default RepCard;
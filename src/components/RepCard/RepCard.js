import React, {useState} from "react"
import "./RepCard"
import "./RepCard.css"

const RepCard = ({repData}) => {

  return (
    <div className="rep-card">
      <div className="bio-info">
        <div>
          <img src={repData.bio.picture} className="rep-img"/>
        </div>
        <div className="bio-text-container">
          <p className="bio-text">{repData.bio.name}</p>
          <p className="bio-text">State: {repData.bio.state}</p>
          <p className="bio-text">Age: {repData.bio.age}</p>
          <p className="bio-text">Gender: {repData.bio.gender}</p>
          <p className="bio-text">Years in office: {repData.bio.years_in_office}</p>
          <p className="bio-text">Up for re-election in: {repData.bio.next_reelection_yr}</p>
          <p className="rep-match">90% match with your beliefs</p>
        </div>
      </div>
      <div className="rep-issues-container">
        <details>
          <summary>Abortion: You match 40% on this issue </summary>
          <p className="rep-issues">Planned Parenthood: {repData.ratings.planned_parenthood}%</p>
        </details>
        <details>
          <summary> Budget, Spending: You match 40% on this issue </summary>
          <p className="rep-issues"> Americans for Prosperity: {repData.ratings.americans_for_prosperity}%</p>
        </details>
        <details>
          <summary>Civil Liberties You match 40% on this issue </summary>
          <p className="rep-issues"> ACLU: {repData.ratings.aclu}%</p>
        </details>
        <details>
          <summary>Campaign Finance:  You match 40% on this issue </summary>
          <p className="rep-issues"> End Citizens United: {repData.ratings.end_citizens_united}%</p>
        </details>
        <details>
          <summary>Criminal Justice:  You match 40% on this issue </summary>
          <p className="rep-issues"> Nat'l Assoc. of Police Org: {repData.ratings.national_assoc_of_police_org}%</p>
        </details>
        <details>
          <summary>Environment: You match 40% on this issue </summary>
          <p className="rep-issues"> Nat'l Parks Conservation Assoc.: {repData.ratings.national_parks_conservation_assoc}%</p>
        </details>
        <details>
          <summary>Guns: You match 40% on this issue </summary>
          <p className="rep-issues"> NRA: {repData.ratings.national_rifle_assoc}%</p>
        </details>
        <details>
          <summary>Immigration: You match 40% on this issue </summary>
          <p className="rep-issues"> NumbersUSA: {repData.ratings.numbers_usa}%</p>
        </details>
        <details>
          <summary>Marijuana: You match 40% on this issue </summary>
          <p className="rep-issues">  Nat'l Cannabis Industry Assoc: {repData.ratings.national_cannabis_industry_assoc}%</p>
        </details>
      </div>
    </div>
   );
}

export default RepCard;

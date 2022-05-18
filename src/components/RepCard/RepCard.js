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
        <p className="rep-issues">Abortion | Planned Parenthood: {repData.ratings.planned_parenthood}%</p>
        <p className="rep-issues">Budget, Spending | Americans for Prosperity: {repData.ratings.americans_for_prosperity}%</p>
        <p className="rep-issues">Civil Liberties | ACLU: {repData.ratings.aclu}%</p>
        <p className="rep-issues">Campaign Finance | End Citizens United: {repData.ratings.end_citizens_united}%</p>
        <p className="rep-issues">Criminal Justice | Nat'l Assoc. of Police Org: {repData.ratings.national_assoc_of_police_org}%</p>
        <p className="rep-issues">Environment | Nat'l Parks Conservation Assoc.: {repData.ratings.national_parks_conservation_assoc}%</p>
        <p className="rep-issues">Guns | NRA: {repData.ratings.national_rifle_assoc}%</p>
        <p className="rep-issues">Immigration | NumbersUSA: {repData.ratings.numbers_usa}%</p>
        <p className="rep-issues">Marijuana | Nat'l Cannabis Industry Assoc: {repData.ratings.national_cannabis_industry_assoc}%</p>
      </div>
    </div>
   );
}

export default RepCard;

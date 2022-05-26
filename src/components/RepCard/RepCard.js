import React, { useContext } from "react";
import "./RepCard";
import "./RepCard.css";
import { FiMail } from "react-icons/fi";
import RepRatings from "../RepRatings/RepRatings";
import defaultImg from "../../assets/senate.png";
import { DataContext } from "../../contexts/DataContext";
import { MdOutlineDoubleArrow } from "react-icons/md";

const RepCard = ({ repData }) => {
  const data = useContext(DataContext);
  return (
    <div className="rep-card">
      <div className="reelection-text">
        <MdOutlineDoubleArrow className="arrow-icon" />
        <p className="reelection">
          Up for re-election in {repData.attributes.biography.next_election}
        </p>
      </div>
      <div className="bio-info">
        <div>
          <a href={repData.attributes.representative_social.website} 
             target="_blank" 
             rel="noreferrer">
            <img
              src={
                repData.attributes.biography.photo
                  ? repData.attributes.biography.photo
                  : defaultImg
              }
              alt="representative"
              className="rep-img"
            />
          </a>
        </div>
        <div className="bio-text-container">
          <p className="bio-text rep-name">
            {repData.attributes.biography.congressional_type}{" "}
            {repData.attributes.biography.name}
          </p>
          <p className="bio-text bio-party">
            Party: {repData.attributes.biography.party}
          </p>
          {repData.attributes.biography.congressional_type ===
          "Representative" ? (
            <p className="bio-text">
              District: {repData.attributes.biography.district}
            </p>
          ) : (
            <p className="bio-text">
              State: {repData.attributes.biography.district}
            </p>
          )}
          <p className="bio-text bio-age">
            Age: {repData.attributes.biography.age}
          </p>
          <p className="bio-text bio-gender">
            Gender: {repData.attributes.biography.gender}
          </p>
          <p className="bio-text bio-term">
            Years in office: {repData.attributes.biography.years_in_office}
          </p>
          {data.currentQuizResult.nra &&
            (repData.attributes.compatibility ? (
              <p className="rep-match">
                {repData.attributes.compatibility.toFixed(1)}% match with your
                beliefs
              </p>
            ) : (
              <p className="rep-match">Compatibility unavailable</p>
            ))}
        </div>
      </div>
      <div className="rep-contact-container">
        {repData.attributes.representative_social.contact_page && (
          <>
            <FiMail className="mail-icon" />
            <a
              className="contact-text"
              href={repData.attributes.representative_social.contact_page}
              target="_blank" 
              rel="noreferrer"
            >
              Contact {repData.attributes.biography.congressional_type}{" "}
              {repData.attributes.biography.name.split(" ").slice(-1).join(" ")}{" "}
              here
            </a>
          </>
        )}
      </div>
      <RepRatings repData={repData} />
    </div>
  );
};

export default RepCard;

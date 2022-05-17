import React from "react";
import "./statement.css";

const Statement = (props) => {
  return (
    <>
      <label className="statement" htmlFor="likert-scale">
        {props.statement}
      </label>
      <ul className="likert" onChange={(e) => props.handleChange(e)}>
        <li>
          <input required type="radio" name={props.name} value="0"/>
          <label>Strongly Disagree</label>
        </li>
        <li>
          <input required type="radio" name={props.name} value="25" />
          <label>Disagree</label>
        </li>
        <li>
          <input required type="radio" name={props.name} value="50" />
          <label>Neutral</label>
        </li>
        <li>
          <input required type="radio" name={props.name} value="75" />
          <label>Agree</label>
        </li>
        <li>
          <input required type="radio" name={props.name} value="100" />
          <label>Strongly Agree</label>
        </li>
      </ul>
    </>
  );
};

export default Statement;

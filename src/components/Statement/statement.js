import React from "react"
import './statement.css'

const Statement = (props) => {
  return (  
  <>
    <label className="statement" htmlFor="likert-scale">{props.statement}</label>
    <ul className='likert'>
      <li>
        <input type="radio" name="likert" value="strong_agree"/>
        <label>Strongly agree</label>
      </li>
      <li>
        <input type="radio" name="likert" value="strong_agree"/>
        <label>Agree</label>
      </li>
      <li>
        <input type="radio" name="likert" value="strong_agree"/>
        <label>Neutral</label>
      </li>
      <li>
        <input type="radio" name="likert" value="disagree"/>
        <label>Disagree</label>
      </li>
      <li>
        <input type="radio" name="likert" value="strong_agree"/>
        <label>Strongly disagree</label>
      </li>
     </ul>
    </>
  );
}
 
export default Statement;
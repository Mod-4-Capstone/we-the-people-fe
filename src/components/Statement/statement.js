import React from "react"
import './Statement.css'

const Statement = (props) => {
  return (  
  <>
    <label className="statement" htmlFor="likert-scale">{props.statement}</label>
    <ul className='likert'  onChange={(e) => props.handleChange(e)}>
      <li>
        <input type="radio" name="likert" value="100"/>
        <label>Strongly agree</label>
      </li>
      <li>
        <input type="radio" name="likert" value="75"/>
        <label>Agree</label>
      </li>
      <li>
        <input type="radio" name="likert" value="50"/>
        <label>Neutral</label>
      </li>
      <li>
        <input type="radio" name="likert" value="25"/>
        <label>Disagree</label>
      </li>
      <li>
        <input type="radio" name="likert" value="0"/>
        <label>Strongly disagree</label>
      </li>
     </ul>
    </>
  );
}
 
export default Statement;
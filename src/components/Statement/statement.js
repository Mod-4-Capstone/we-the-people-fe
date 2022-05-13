import React from "react"
import './Statement.css'

const Statement = (props) => {
  return (  
  <>
    <label className="statement" htmlFor="likert-scale">{props.statement}</label>
    <ul className='likert'>
      <li>
        <input type="radio" name="likert" value="5"/>
        <label>Strongly agree</label>
      </li>
      <li>
        <input type="radio" name="likert" value="4"/>
        <label>Agree</label>
      </li>
      <li>
        <input type="radio" name="likert" value="3"/>
        <label>Neutral</label>
      </li>
      <li>
        <input type="radio" name="likert" value="2"/>
        <label>Disagree</label>
      </li>
      <li>
        <input type="radio" name="likert" value="1"/>
        <label>Strongly disagree</label>
      </li>
     </ul>
    </>
  );
}
 
export default Statement;
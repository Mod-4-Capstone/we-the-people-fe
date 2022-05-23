import React, { useState, useContext } from 'react'
import './StateDropdown.css'
import { postReps } from '../../apiCalls';
import { DataContext } from "../../contexts/DataContext";
import { Link, Redirect } from "react-router-dom"



const StateDropdown = (props) => {

  const repData = useContext(DataContext)
  // const [selectedState, setSelectedState] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const emptyQuiz = {
      id: Date.now(),
      age: "",
      state: props.selectedState,
      aclu: "",
      americans_for_prosperity: "",
      end_citizens_united: "",
      national_association_of_police: "",
      national_education_association: "",
      national_parks_conservation: "",
      norml: "",
      nra: "",
      numbers_usa: "",
      planned_parenthood: "",
    }
    repData.setCurrentQuizResult(emptyQuiz)
    postReps(emptyQuiz, 'state')
    .then(data => {
      console.log(data)
      repData.setLegislators(data.politicians.data)
    })
  repData.setIsFormSubmitted(true)
  props.setSelectedState('default')
  }

  return (
    <div className="state-dropdown-container">
      <p className="state-dropdown-description">See Representatives by State:</p>
        <form className='state-form-container' onSubmit ={(e) => handleSubmit(e)}>
          <select name="states" className="state-dropdown" id="states" defaultValue='default' onChange={(e) => props.setSelectedState(e.target.value)}>
            <option value ='default' disabled>select state</option>
            <option value="AL">Alabama</option>
            <option value="AK">Alaska</option>
            <option value="AZ">Arizona</option>
            <option value="AR">Arkansas</option>
            <option value="CA">California</option>
            <option value="CO">Colorado</option>
            <option value="CT">Connecticut</option>
            <option value="DE">Delaware</option>
            <option value="FL">Florida</option>
            <option value="GA">Georgia</option>
            <option value="HI">Hawaii</option>
            <option value="ID">Idaho</option>
            <option value="IL">Illinois</option>
            <option value="IN">Indiana</option>
            <option value="IA">Iowa</option>
            <option value="KS">Kansas</option>
            <option value="KY">Kentucky</option>
            <option value="LA">Louisiana</option>
            <option value="ME">Maine</option>
            <option value="MD">Maryland</option>
            <option value="MA">Massachusetts</option>
            <option value="MI">Michigan</option>
            <option value="MN">Minnesota</option>
            <option value="MS">Mississippi</option>
            <option value="MO">Missouri</option>
            <option value="MT">Montana</option>
            <option value="NE">Nebraska</option>
            <option value="NV">Nevada</option>
            <option value="NH">New Hampshire</option>
            <option value="NJ">New Jersey</option>
            <option value="NM">New Mexico</option>
            <option value="NY">New York</option>
            <option value="NC">North Carolina</option>
            <option value="ND">North Dakota</option>
            <option value="OH">Ohio</option>
            <option value="OK">Oklahoma</option>
            <option value="OR">Oregon</option>
            <option value="PA">Pennsylvania</option>
            <option value="RI">Rhode Island</option>
            <option value="SC">South Carolina</option>
            <option value="SD">South Dakota</option>
            <option value="TN">Tennessee</option>
            <option value="TX">Texas</option>
            <option value="UT">Utah</option>
            <option value="VT">Vermont</option>
            <option value="VA">Virginia</option>
            <option value="WA">Washington</option>
            <option value="WV">West Virginia</option>
            <option value="WI">Wisconsin</option>
            <option value="WY">Wyoming</option>
          </select>
            <button className='go-button'>Go!</button>
            {repData.isFormSubmitted && <Redirect to="/results-dashboard"/>}
        </form>
      </div>
    );
}

export default StateDropdown;

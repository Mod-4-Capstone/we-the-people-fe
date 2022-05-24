import React, { useContext } from 'react'
import './StateDropdown.css'
import { postReps } from '../../apiCalls';
import { DataContext } from "../../contexts/DataContext";
import { Redirect } from "react-router-dom"



const StateDropdown = (props) => {

  const repData = useContext(DataContext)

  const packageEmptyQuiz = () => {
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
    return emptyQuiz
  }

  const packageCompletedQuiz = () => {
    const completedQuiz = {
      id: Date.now(),
      age: repData.currentQuizResult.age,
      state: props.selectedState,
      aclu: repData.currentQuizResult.aclu,
      americans_for_prosperity: repData.currentQuizResult.americans_for_prosperity,
      end_citizens_united: repData.currentQuizResult.end_citizens_united,
      national_association_of_police: repData.currentQuizResult.national_association_of_police,
      national_education_association: repData.currentQuizResult.national_education_association,
      national_parks_conservation: repData.currentQuizResult.national_parks_conservation,
      norml: repData.currentQuizResult.norml,
      nra: repData.currentQuizResult.nra,
      numbers_usa: repData.currentQuizResult.numbers_usa,
      planned_parenthood: repData.currentQuizResult.planned_parenthood,
    }
    return completedQuiz
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(repData.currentQuizResult.nra) {
      repData.setIsLoading(true)
      postReps(packageCompletedQuiz(), 'state')
      .then(data => {
        repData.setSummaryStats(data.summary_statistics)
        repData.setLegislators(data.politicians.data)
        repData.setIsLoading(false)
      }).catch(error=> repData.setError(error.message))
    } else {
      repData.setCurrentQuizResult(packageEmptyQuiz())
      repData.setIsLoading(true)
      postReps(packageEmptyQuiz(), 'state')
      .then(data => {
        repData.setLegislators(data.politicians.data)
        repData.setIsLoading(false)
      }).catch(error=> repData.setError(error.message))
    }
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

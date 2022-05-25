import React, { useContext } from 'react'
import './StateDropdown.css'
import { postReps } from '../../apiCalls';
import { DataContext } from "../../contexts/DataContext";
import { Redirect } from "react-router-dom"
import states from '../../data/data';



const StateDropdown = (props) => {

  const repData = useContext(DataContext)

  const createStateOptions = () => {
    return states.map((state, i) => {
      return (
        <option value={state.abbrev} key={i}>{state.fullName}</option>
      )
    })
  }

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
  }

  return (
    <div className="state-dropdown-container">
      <p className="state-dropdown-description">See Representatives by State:</p>
        <form className='state-form-container' onSubmit ={(e) => handleSubmit(e)}>
          <select name="states" className="state-dropdown" id="states" value={props.selectedState} onChange={(e) => props.setSelectedState(e.target.value)}>
            <option value ='' >select state</option>
            {createStateOptions()}
          </select>
            <button className='go-button' disabled={!props.selectedState}>Go!</button>
            {repData.isFormSubmitted && <Redirect to="/results-dashboard"/>}
        </form>
        {!props.selectedState && <p>Please select a state to continue</p>}
      </div>
    );
}

export default StateDropdown;

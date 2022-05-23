import React, { useContext, useState } from "react";
import { Link, Redirect } from "react-router-dom"
import "./Quiz.css";
import Statement from "../Statement2/Statement2";
import { postReps } from '../../apiCalls';
import { DataContext } from "../../contexts/DataContext";

const Quiz = (props) => {
  const repData = useContext(DataContext)
  const [formFields, setFormFields] = useState({
    age: "",
    zipcode: "",
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
  });

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const newQuizResult = {
      id: Date.now,
      ...formFields,
    }
    repData.setCurrentQuizResult(newQuizResult)
    postReps(newQuizResult, 'zipcode').then(data => {
      repData.setLegislators(data.politicians.data)
      repData.setSummaryStats(data.summary_statistics)
    })
    repData.setIsFormSubmitted(true)
  };

  return (
    <form className="quiz" onSubmit={(e) => submitForm(e)}>
      <div className="quiz-header-container">
        <section className="quiz-header">
          <div className="gender-hook">
            <p className="gender">Female</p> 
            <p className="us-population-rep">U.S. Population: 50.8%</p>
            <p className="congress-rep">117th Congress: 27.5%</p>
          </div>  
          <div>The Constitution provides for proportional representation in the U.S. House of Representatives and the seats in the House are apportioned based on state population according to the constitutionally mandated Census.  — U.S. Constitution, Amendment XIV, section 2</div>  
          <div className="age-hook">
            <p className="age">65 or older</p> 
            <p className="us-population-rep">U.S. Population: 16.5%</p>
            <p className="congress-rep">117th Congress: 40%</p>
          </div>  
        </section>
      </div>
      <section className="input-tagline">
        Congress may not look like you, but do they think like you? Take the quiz to find out!
      </section>
      <div className="input-container">
        <select
          required
          className="age-dropdown"
          defaultValue="default"
          name="age"
          onChange={(e) => handleChange(e)}
        >
           <option value="default" disabled>
            Select your Age Range
          </option>
          <option value="18-28">18-28</option>
          <option value="29-39">29-39</option>
          <option value="40-50">40-50</option>
          <option value="51-61">51-61</option>
          <option value="62-70">62-70</option>
          <option value="70+">70+</option>
          <option value="deferred">Prefer not to say</option>
        </select>
        <input
          required
          className="zipcode-input"
          type="number"
          placeholder="Enter your zipcode"
          name="zipcode"
          min="00501"
          max="99950"
          value={formFields.zipcode}
          onChange={(e) => handleChange(e)}
        ></input>
      </div>
        <Statement
          statement="Abortion should be legalized at the federal level."
          name="planned_parenthood"
          setFormFields={setFormFields}
          handleChange={handleChange}
        />
        <Statement
          statement="Public schools should be better funded."
          name="national_education_association"
          setFormFields={setFormFields}
          handleChange={handleChange}
        />
        <Statement
          statement="There should be less restrictions on the process of purchasing a gun."
          name="nra"
          setFormFields={setFormFields}
          handleChange={handleChange}
        />
        <Statement
          statement="The U.S. government should increase environmental regulations in order to mitigate climate change."
          name="national_parks_conservation"
          setFormFields={setFormFields}
          handleChange={handleChange}
        />
        <Statement
          statement="The U.S. government should not raise the federal minimum wage."
          name="americans_for_prosperity"
          setFormFields={setFormFields}
          handleChange={handleChange}
        />
        <Statement
          statement="The U.S. government should build a wall along the southern border."
          name="numbers_usa"
          setFormFields={setFormFields}
          handleChange={handleChange}
        />
        <Statement
          statement="Transgender athletes should be able to compete on teams that correspond to their gender identity."
          name="aclu"
          setFormFields={setFormFields}
          handleChange={handleChange}
        />
        <Statement
          statement="The police should not be defunded."
          name="national_association_of_police"
          setFormFields={setFormFields}
          handleChange={handleChange}
        />
        <Statement
          statement="Marijuana should be federally legalized."
          name="norml"
          setFormFields={setFormFields}
          handleChange={handleChange}
        />
        <Statement
          statement="Candidates for office should have a limit on the amount of money they can spend campaigning."
          name="end_citizens_united"
          setFormFields={setFormFields}
          handleChange={handleChange}
        />
        <button className='submit-btn' type="submit">Get my results!</button>
        {repData.isFormSubmitted && <Redirect to="/results-dashboard"/>}
    </form>
  );
};

export default Quiz;

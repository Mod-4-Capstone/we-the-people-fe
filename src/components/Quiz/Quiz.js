import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom"
import "./Quiz.css";
import Statement from "../Statement2/Statement2";

const Quiz = (props) => {
  const [formFields, setFormFields] = useState({
    age: "",
    zipcode: "",
    planned_parenthood: "",
    national_education_association: "",
    nra: "",
    national_parks_conservation: "",
    americans_for_prosperity: "",
    numbers_usa: "",
    aclu: "",
    national_association_of_police: "",
    norml: ""
  });

  const [isFormSubmitted, setIsFormSubmitted] = useState (false)

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const newQuizResult = {
      id: Date.now,
      ...formFields,
    };
    props.setQuizResult(newQuizResult);
    setIsFormSubmitted(true)
  };

  return (
    <form className="quiz" onSubmit={(e) => submitForm(e)}>
      <p className="quiz-header">Here's why you should take our quiz...</p>
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
          statement="There should be more restrictions on the process of purchasing a gun."
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
          statement="The U.S. government should raise the federal minimum wage."
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
          statement="The U.S. government should support a separation of church and state."
          name="aclu"
          setFormFields={setFormFields}
          handleChange={handleChange}
        />
        <Statement
          statement="The police should not be defunded"
          name="national_association_of_police"
          setFormFields={setFormFields}
          handleChange={handleChange}
        />
        <Statement
          statement="Marijuana should be federally legalized"
          name="norml"
          setFormFields={setFormFields}
          handleChange={handleChange}
        />
        <button className='submit-btn' type="submit">Get my results!</button>
        {isFormSubmitted && <Redirect to="/results-dashboard"/>}
    </form>
  );
};

export default Quiz;

import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom"
import "./Quiz.css";
import Statement from "../Statement2/Statement2";

const Quiz = (props) => {
  const [formFields, setFormFields] = useState({
    age: "",
    zipcode: "",
    Q1: "",
    Q2: "",
    Q3: "",
    Q4: "",
    Q5: "",
    Q6: "",
    Q7: "",
    Q8: "", // 0, 25, 50, 75, 100
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
          name="Q1"
          setFormFields={setFormFields}
          handleChange={handleChange}
        />
        <Statement
          statement="Public schools should be better funded."
          name="Q2"
          setFormFields={setFormFields}
          handleChange={handleChange}
        />
        <Statement
          statement="Healthcare should be universal."
          name="Q3"
          setFormFields={setFormFields}
          handleChange={handleChange}
        />
        <Statement
          statement="There should be more restrictions on the process of purchasing a gun."
          name="Q4"
          setFormFields={setFormFields}
          handleChange={handleChange}
        />
        <Statement
          statement="The U.S. government should increase environmental regulations in order to mitigate climate change."
          name="Q5"
          setFormFields={setFormFields}
          handleChange={handleChange}
        />
        <Statement
          statement="The U.S. government should raise the federal minimum wage."
          name="Q6"
          setFormFields={setFormFields}
          handleChange={handleChange}
        />
        <Statement
          statement="The U.S. government should build a wall along the southern border."
          name="Q7"
          setFormFields={setFormFields}
          handleChange={handleChange}
        />
        <Statement
          statement="The U.S. government should support a separation of church and state."
          name="Q8"
          setFormFields={setFormFields}
          handleChange={handleChange}
        />
        <button className='submit-btn' type="submit">Get my results!</button>
        {isFormSubmitted && <Redirect to="/results-dashboard"/>}
    </form>
  );
};

export default Quiz;

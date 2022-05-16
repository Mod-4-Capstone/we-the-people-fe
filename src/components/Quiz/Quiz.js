import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./Quiz.css";
import Statement from "../Statement/Statement";

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
    Q8: "",
  });
  const [radioChecked, setRadioChecked] = useState({
    Q1: false,
    Q2: false,
    Q3: false,
    Q4: false,
    Q5: false,
    Q6: false,
    Q7: false,
    Q8: false,
  });

  const handleChange = (e) => {
    setFormFields({ ...formFields, [e.target.name]: e.target.value });
  };

  const clearInputs = () => {
    setFormFields({
      age: "default",
      zipcode: "",
      Q1: "",
      Q2: "",
      Q3: "",
      Q4: "",
      Q5: "",
      Q6: "",
      Q7: "",
      Q8: "",
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    const newQuizResult = {
      id: Date.now,
      ...formFields,
    };
    props.setQuizResult(newQuizResult);
    clearInputs();
  };

  return (
    <form className="quiz" onSubmit={(e) => submitForm(e)}>
      <select
        required
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
        type="number"
        placeholder="Enter your zipcode"
        name="zipcode"
        min="00501"
        max="99950"
        value={formFields.zipcode}
        onChange={(e) => handleChange(e)}
      ></input>
      <Statement
        statement="Abortion should be legalized at the federal level."
        name="Q1"
        setFormFields={setFormFields}
        handleChange={handleChange}
        radioChecked={radioChecked}
        setRadioChecked={setRadioChecked}
      />
      <Statement
        statement="Public schools should be better funded."
        name="Q2"
        setFormFields={setFormFields}
        handleChange={handleChange}
        setRadioChecked={setRadioChecked}
      />
      <Statement
        statement="Healthcare should be universal."
        name="Q3"
        setFormFields={setFormFields}
        handleChange={handleChange}
        setRadioChecked={setRadioChecked}
      />
      <Statement
        statement="There should be more restrictions on the process of purchasing a gun."
        name="Q4"
        setFormFields={setFormFields}
        handleChange={handleChange}
        setRadioChecked={setRadioChecked}
      />
      <Statement
        statement="The U.S. government should increase environmental regulations in order to mitigate climate change."
        name="Q5"
        setFormFields={setFormFields}
        handleChange={handleChange}
        setRadioChecked={setRadioChecked}
      />
      <Statement
        statement="The U.S. government should raise the federal minimum wage."
        name="Q6"
        setFormFields={setFormFields}
        handleChange={handleChange}
        setRadioChecked={setRadioChecked}
      />
      <Statement
        statement="The U.S. government should build a wall along the southern border."
        name="Q7"
        setFormFields={setFormFields}
        handleChange={handleChange}
        setRadioChecked={setRadioChecked}
      />
      <Statement
        statement="The U.S. government should support a separation of church and state."
        name="Q8"
        setFormFields={setFormFields}
        handleChange={handleChange}
        setRadioChecked={setRadioChecked}
      />
      <Link to="/results-dashboard">
        <button type="submit">Submit</button>
      </Link>
    </form>
  );
};

export default Quiz;
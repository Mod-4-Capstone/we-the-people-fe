import React from "react"
import './MainDash.css'
import QuizResults from "../QuizResults/QuizResults"
import RepContainer from "../RepContainer/RepContainer"

const MainDash = () => {
  return (
    <section className="main-dash">
      <QuizResults />
      <RepContainer />
    </section>
    );
}
 
export default MainDash;
import React from "react"
import './MainDash.css'
import QuizResults from "../QuizResults/QuizResults"
import RepContainer from "../RepContainer/RepContainer"

const MainDash = () => {
  return (
    <>
      <QuizResults />
      <RepContainer />
    </>
    );
}
 
export default MainDash;
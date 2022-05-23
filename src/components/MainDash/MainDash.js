import React, { useContext } from "react"
import { DataContext } from '../../contexts/DataContext'
import './MainDash.css'
import QuizResults from "../QuizResults/QuizResults"
import RepContainer from "../RepContainer/RepContainer"

const MainDash = () => {

  const repData = useContext(DataContext)

  return (
    <section className="main-dash">
    {repData.currentQuizResult.planned_parenthood && <QuizResults />}
    <RepContainer />
    </section>
    );
}

export default MainDash;

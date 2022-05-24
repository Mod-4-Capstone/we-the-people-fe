import React, { useContext } from "react"
import { DataContext } from '../../contexts/DataContext'
import './MainDash.css'
import QuizResults from "../QuizResults/QuizResults"
import RepContainer from "../RepContainer/RepContainer"
import Loader from "../Loader/Loader"

const MainDash = () => {

  const repData = useContext(DataContext)

  return (
    <section className="main-dash">
      {!repData.isLoading ?  
      <>
        {repData.currentQuizResult.nra && <QuizResults />}
        <RepContainer />
      </> :
      <Loader/> 
      }
    </section>
    );
}

export default MainDash;

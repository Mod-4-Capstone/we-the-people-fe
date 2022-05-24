import React, { useContext } from "react"
import { DataContext } from '../../contexts/DataContext'
import './MainDash.css'
import QuizResults from "../QuizResults/QuizResults"
import RepContainer from "../RepContainer/RepContainer"
import Loader from "../Loader/Loader"
import Error from "../Error/Error"

const MainDash = () => {

  const repData = useContext(DataContext)

  // return (
  //   <section className="main-dash">
  //      {!repData.isLoading ?  
  //     <>
  //       {repData.currentQuizResult.nra && <QuizResults />}
  //       <RepContainer />
  //     </> :
  //     <Loader/> 
  //     }
  //   </section>
  //   );

  {/* // if there's an error -> render Error component
  // if there's no error & !repData.isLoading then render Quiz results conditional & RepContainer
  // if there's no error & repData.isLoading, then render Loader */}


  if (!repData.isLoading && !repData.error) {
    return (
      <section className="main-dash">
        {repData.currentQuizResult.nra && <QuizResults />}
        <RepContainer />
      </section>
    )
  } else if (repData.error) {
    return (
      <section className="main-dash">
        <Error msg={repData.error}/>
      </section>
    )
  } else {
    return (
      <section className="main-dash">
        <Loader />
      </section>
    )
  }

}

export default MainDash;

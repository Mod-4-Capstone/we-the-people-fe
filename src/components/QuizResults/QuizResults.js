import React, { useContext }from "react"
import "./QuizResults.css"
import { DataContext } from '../../contexts/DataContext'

const QuizResults = () => {

  const repData = useContext(DataContext)

  const getStateAverageStats = () => {
    const groupObj = repData.summaryStats.data.attributes
    const groupKeys = Object.keys(repData.summaryStats.data.attributes)
    const totalStat = groupKeys.reduce((acc, sigKey) => {
      return acc += groupObj[sigKey].user_difference
    }, 0)
    return 100 - (totalStat/groupKeys.length).toFixed(1)
  }

  return (
    <section className="quiz-results-container">
      <section className="user-quiz-results">
        <div className="user-demo">
          <h2>What's important to you:</h2>
        </div>
        <p>You are {repData.currentQuizResult.planned_parenthood}% in support of legalizing abortion federally.</p>
        <p>You are {repData.currentQuizResult.national_education_association}% in support of better funding for public schools.</p>
        <p>You are {repData.currentQuizResult.nra}% in support of having less firearm purchase restrictions.</p>
        <p>You are {repData.currentQuizResult.national_parks_conservation}% in support of the federal government mitigating climate change.</p>
        <p>You are {repData.currentQuizResult.americans_for_prosperity}% in support of the federal government not raising minimum wage.</p>
        <p>You are {repData.currentQuizResult.numbers_usa}% in support of the federal government building a wall along the southern border.</p>
        <p>You are {repData.currentQuizResult.aclu}% in support of transgender inclusion in sports.</p>
        <p>You are {repData.currentQuizResult.norml}% in support of the federal government legalizing marijuana.</p>
        <p>You are {repData.currentQuizResult.national_association_of_police}% in support of funding the police.</p>
        <p>You are {repData.currentQuizResult.end_citizens_united}% in support of campaign spending limits.</p>
      </section>
      <section className="state-wide-comparison">
        {repData.summaryStats && <h2>Your beliefs match {getStateAverageStats()}% with your state reps</h2>}
      </section>
    </section>
   );
}

export default QuizResults;

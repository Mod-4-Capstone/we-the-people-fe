import React from "react"
import "./QuizResults.css"

const QuizResults = () => {
  return ( 
    <section className="quiz-results-container">
      <section className="user-quiz-results">
        <div className="user-demo">
          <h2>What's important to you:</h2>
        </div>
        <p>Abortion</p>
        <p>Environmental</p>
        <p>Other Stuff until it's all connected...</p>
      </section>
      <section className="state-wide-comparison">
        <h2>Your beliefs match 40% with your state reps</h2>
      </section>
    </section>
   );
}
 
export default QuizResults;
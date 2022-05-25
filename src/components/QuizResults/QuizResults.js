import React, { useContext } from "react";
import "./QuizResults.css";
import { DataContext } from "../../contexts/DataContext";
import QuizResultsModal from "../QuizResultsModal/QuizResultsModal";
import DoughnutChart from "../DoughnutChart/DoughnutChart";

const QuizResults = () => {
  const repData = useContext(DataContext);

  const getStateAverageStats = () => {
    const groupObj = repData.summaryStats.data.attributes;
    const groupKeys = Object.keys(groupObj);
    const totalStat = groupKeys.reduce((acc, sigKey) => {
      return (acc += groupObj[sigKey].user_difference);
    }, 0);
    if (repData.summaryStats.data) {
      return 100 - (totalStat / groupKeys.length).toFixed(1);
    }
  };

  return (
    <section className="quiz-results-container">
      <section className="user-quiz-results">
        <div className="user-demo">
          <h2>What's important to you:</h2>
        </div>
        <section className="result-tile-container">
          <div className="result-tile">
            <DoughnutChart
              percentage={repData.currentQuizResult.planned_parenthood}
              issue={"Abortion"}
            />
          </div>
          <div className="result-tile">
            <DoughnutChart
              percentage={
                repData.currentQuizResult.national_education_association
              }
              issue={"Education"}
            />
          </div>
          <div className="result-tile">
            <DoughnutChart
              percentage={repData.currentQuizResult.nra}
              issue={"Guns"}
            />
          </div>
        </section>
        <QuizResultsModal />
      </section>
      <section className="state-wide-comparison">
        {repData.summaryStats.data && (
          <>
            <p className="state-percentage-text">Your beliefs match</p>
            <p className="state-percentage">{getStateAverageStats()}%</p>
            <p className="state-percentage-text">
              with {repData.legislators[0].attributes.biography.state}{" "}
              legislators
            </p>
            <p className="state-percentage-text">overall</p>
          </>
        )}
      </section>
    </section>
  );
};

export default QuizResults;
import React, { useContext } from "react";
import { DataContext } from "../../contexts/DataContext";
import "./RepRatings.css";

const RepRatings = ({ repData }) => {
  const data = useContext(DataContext);
  return (
    <section className="rep-issues-container">

      {repData.attributes.rating.planned_parenthood !== null ?
        <details className="details-arrow">
          <summary
          className ='abortion-text'
            style={
              !data.currentQuizResult.planned_parenthood
                ? { listStyle: "square", cursor: "default" }
                : { listStyle: "default", cursor: "pointer" }
            }
          >
            Planned Parenthood rates this legislator at{" "}
            {repData.attributes.rating.planned_parenthood}% on Abortion
          </summary>
          {data.currentQuizResult.nra && (
            <p className="rep-issues abortion-match">
              You match{" "}
              {100 - repData.attributes.user_comparison.planned_parenthood}% with{" "}
              {repData.attributes.biography.congressional_type}{" "}
              {repData.attributes.biography.name.split(" ").slice(-1).join(" ")}{" "}
              on this issue
            </p>
          )}
        </details>
        :
        <em><p className="no-rating-text">Planned Parenthood has not given this {repData.attributes.biography.congressional_type} a rating yet.</p></em>
      }

      {repData.attributes.rating.americans_for_prosperity !== null ?
        <details className="details-arrow">
          <summary
            style={
              !data.currentQuizResult.nra
                ? { listStyle: "square", cursor: "default" }
                : { listStyle: "default", cursor: "pointer" }
            }
          >
            Americans for Prosperity rates this legislator at {repData.attributes.user_comparison.americans_for_prosperity}% on Budget, Spending
          </summary>
          {data.currentQuizResult.nra && (
              <p className="rep-issues">
                You match{" "}
                {100 -
                  repData.attributes.user_comparison.americans_for_prosperity}
                % with {repData.attributes.biography.congressional_type}{" "}
                {repData.attributes.biography.name.split(" ").slice(-1).join(" ")}{" "}
                on this issue{" "}
              </p>
            )}
        </details>
        :
        <em><p className="no-rating-text">Americans for Prosperity has not given this {repData.attributes.biography.congressional_type} a rating yet.</p></em>
      }

      {repData.attributes.rating.aclu !== null ?
        <details className="details-arrow">
          <summary
            style={
              !data.currentQuizResult.nra
                ? { listStyle: "square", cursor: "default" }
                : { listStyle: "default", cursor: "pointer" }
            }
          >
            ACLU rates this legislator at {repData.attributes.user_comparison.aclu}% on Civil Liberties
          </summary>
          {data.currentQuizResult.nra && (
            <p className="rep-issues">
              You match {100 - repData.attributes.user_comparison.aclu}% with{" "}
              {repData.attributes.biography.congressional_type}{" "}
              {repData.attributes.biography.name.split(" ").slice(-1).join(" ")}{" "}
              on this issue
            </p>
          )}
        </details>
        :
        <em><p className="no-rating-text">The ACLU has not given this {repData.attributes.biography.congressional_type} a rating yet.</p></em>
      }


      {repData.attributes.rating.end_citizens_united !== null ?
        <details className="details-arrow">
          <summary
            style={
              !data.currentQuizResult.nra
                ? { listStyle: "square", cursor: "default" }
                : { listStyle: "default", cursor: "pointer" }
            }
          >
            End Citizens United rates this legislator at{" "}
            {repData.attributes.rating.end_citizens_united}% on Campaign Finance
          </summary>
          {data.currentQuizResult.nra && (
            <p className="rep-issues">
              You match{" "}
              {100 - repData.attributes.user_comparison.end_citizens_united}% with{" "}
              {repData.attributes.biography.congressional_type}{" "}
              {repData.attributes.biography.name.split(" ").slice(-1).join(" ")}{" "}
              on this issue
            </p>
          )}
        </details>
        :
        <em><p className="no-rating-text">End Citizens United has not given this {repData.attributes.biography.congressional_type} a rating yet.</p></em>
      }

      {repData.attributes.rating.national_association_of_police !== null ?
        <details className="details-arrow">
          <summary
            style={
              !data.currentQuizResult.nra
                ? { listStyle: "square", cursor: "default" }
                : { listStyle: "default", cursor: "pointer" }
            }
          >
            {" "}
            Nat'l Assoc. of Police Org rates this legislator at{" "}
            {repData.attributes.rating.national_association_of_police}% on
            Criminal Justice
          </summary>
          {data.currentQuizResult.nra && (
            <p className="rep-issues">
              {" "}
              You match{" "}
              {100 -
                repData.attributes.user_comparison.national_association_of_police}
              % with {repData.attributes.biography.congressional_type}{" "}
              {repData.attributes.biography.name.split(" ").slice(-1).join(" ")}{" "}
              on this issue
            </p>
          )}
        </details>
        :
        <em><p className="no-rating-text">National Assoc. of Police Org has not given this{repData.attributes.biography.congressional_type} a rating yet.</p></em>
      }

      {repData.attributes.rating.national_parks_conservation !== null ?
        <details className="details-arrow">
          <summary
            style={
              !data.currentQuizResult.nra
                ? { listStyle: "square", cursor: "default" }
                : { listStyle: "default", cursor: "pointer" }
            }
          >
            Nat'l Parks Conservation Assoc rates this legislator at{" "}
            {repData.attributes.rating.national_parks_conservation}% on the
            Environment
          </summary>
          {data.currentQuizResult.nra && (
            <p className="rep-issues">
              You match{" "}
              {100 - repData.attributes.rating.national_parks_conservation}% with{" "}
              {repData.attributes.biography.congressional_type}{" "}
              {repData.attributes.biography.name.split(" ").slice(-1).join(" ")}{" "}
              on this issue
            </p>
          )}
        </details>
        :
        <em><p className="no-rating-text">National Parks Conservation Assoc. has not given this {repData.attributes.biography.congressional_type} a rating yet.</p></em>
      }

      {repData.attributes.rating.nra !== null ?
        <details className="details-arrow">
          <summary
            style={
              !data.currentQuizResult.nra
                ? { listStyle: "square", cursor: "default" }
                : { listStyle: "default", cursor: "pointer" }
            }
          >
            NRA rates this legislator at {repData.attributes.rating.nra}% on Guns
          </summary>
          {data.currentQuizResult.nra && (
            <p className="rep-issues">
              You match {100 - repData.attributes.rating.nra}% with{" "}
              {repData.attributes.biography.congressional_type}{" "}
              {repData.attributes.biography.name.split(" ").slice(-1).join(" ")}{" "}
              on this issue
            </p>
          )}
        </details>
        :
        <em><p className="no-rating-text">The NRA has not given this {repData.attributes.biography.congressional_type} a rating yet.</p></em>
      }

      {repData.attributes.rating.numbers_usa !== null ?
        <details className="details-arrow">
          <summary
            style={
              !data.currentQuizResult.nra
                ? { listStyle: "square", cursor: "default" }
                : { listStyle: "default", cursor: "pointer" }
            }
          >
            NumbersUSA rates this legislator at{" "}
            {repData.attributes.rating.numbers_usa}% on Immigration
          </summary>
          {data.currentQuizResult.nra && (
            <p className="rep-issues">
              You match {100 - repData.attributes.rating.numbers_usa}% with{" "}
              {repData.attributes.biography.congressional_type}{" "}
              {repData.attributes.biography.name.split(" ").slice(-1).join(" ")}{" "}
              on this issue
            </p>
          )}
        </details>
        :
        <em><p className="no-rating-text">NumbersUSA has not given this {repData.attributes.biography.congressional_type} a rating yet.</p></em>
      }

      {repData.attributes.rating.norml !== null ?
        <details className="details-arrow">
          <summary
          className='mj-text'
            style={
              !data.currentQuizResult.nra
                ? { listStyle: "square", cursor: "default" }
                : { listStyle: "default", cursor: "pointer" }
            }
          >
            Norml rates this legislator at {repData.attributes.rating.norml}% on
            Marijuana
          </summary>
          {data.currentQuizResult.nra && (
            <p className="rep-issues mj-match">
              You match {100 - repData.attributes.rating.norml}% with{" "}
              {repData.attributes.biography.congressional_type}{" "}
              {repData.attributes.biography.name.split(" ").slice(-1).join(" ")}{" "}
              on this issue
            </p>
          )}
        </details>
        :
        <em><p className="no-rating-text">Norml has not given this {repData.attributes.biography.congressional_type} a rating yet.</p></em>
      }
    </section>
  );
};

export default RepRatings;

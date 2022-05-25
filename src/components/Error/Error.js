import React, { useContext } from "react";
import "./Error.css";
import { BiMessageAltError } from "react-icons/bi";
import { Link } from "react-router-dom";
import { DataContext } from "../../contexts/DataContext";

const Error = ({ msg }) => {
  const errorInfo = useContext(DataContext);

  return (
    <section className="error-container">
      <BiMessageAltError className="error-icon" />
      <h1>Whoops! Something went wrong.</h1>
      {!errorInfo.error && (
        <Link to="/">
          <button className="home-btn">Back to Main</button>
        </Link>
      )}
    </section>
  );
};

export default Error;

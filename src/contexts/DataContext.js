import React, { createContext, useState } from "react";

const DataContext = createContext();

const DataContextProvider = ({ children }) => {
  const [legislators, setLegislators] = useState([]);
  const [summaryStats, setSummaryStats] = useState({});
  const [currentQuizResult, setCurrentQuizResult] = useState({});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <DataContext.Provider
      value={{
        legislators,
        setLegislators,
        summaryStats,
        setSummaryStats,
        currentQuizResult,
        setCurrentQuizResult,
        isFormSubmitted,
        setIsFormSubmitted,
        isLoading,
        setIsLoading,
      }}
    >
      {legislators && children}
    </DataContext.Provider>
  );
};

export { DataContext, DataContextProvider };

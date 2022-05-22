import React, { createContext, useState } from 'react';
import legislatorsData from '../data/data'

const DataContext = createContext()

const DataContextProvider = ({children}) => {

  const [legislators, setLegislators] = useState([])
  const [summaryStats, setSummaryStats] = useState({})
  const [currentQuizResult, setCurrentQuizResult] = useState({})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

console.log(summaryStats)
  return (
    <DataContext.Provider value={{legislators, setLegislators, summaryStats, setSummaryStats, currentQuizResult, setCurrentQuizResult, isFormSubmitted, setIsFormSubmitted}}>
      {legislators && children}
    </DataContext.Provider>
  )
}

export { DataContext, DataContextProvider }

import React, { createContext, useState } from 'react';
import legislatorsData from '../data/data'

const DataContext = createContext()

const DataContextProvider = ({children}) => {

  const [legislators, setLegislators] = useState([])
  const [summaryStats, setSummaryStats] = useState({})
  const [currentQuizResult, setCurrentQuizResult] = useState({})

  return (
    <DataContext.Provider value={{legislators, setLegislators, summaryStats, setSummaryStats, currentQuizResult, setCurrentQuizResult}}>
      {legislators && children}
    </DataContext.Provider>
  )
}

export { DataContext, DataContextProvider }

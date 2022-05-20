import React, { createContext, useState } from 'react';
import legislatorsData from '../data/data'

const DataContext = createContext()

const DataContextProvider = ({children}) => {

  const [legislators, setLegislators] = useState([])

  return (
    <DataContext.Provider value={{legislators, setLegislators}}>
      {legislators && children}
    </DataContext.Provider>
  )
}

export { DataContext, DataContextProvider }

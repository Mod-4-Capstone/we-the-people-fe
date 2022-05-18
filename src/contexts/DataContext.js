import React, { createContext } from 'react';
import legislators from '../data/data'

const DataContext = createContext()

const DataContextProvider = ({children}) => {

  const [legislators, setLegislators] = useState(legislators)

  return (
    <DataContext.Provider value={{data}}>
      {children}
    </DataContext.Provider>
  )
}

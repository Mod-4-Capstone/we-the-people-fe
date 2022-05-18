import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom"
import './App.css';
import Layout from '../Layout/Layout'
import Quiz from '../Quiz/Quiz'
import MainDash from '../MainDash/MainDash';
import { DataContextProvider } from '../../contexts/DataContext'


const App = () => {
  const [legislators, setLegislators] = useState([])
  const [quizResult, setQuizResult] = useState({})

  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route exact path="/"
            render={() =>{
              return (
              <>
                <Quiz setQuizResult={setQuizResult}/>
              </>
          )}}
          />
          <DataContextProvider>
            <Route exact path="/results-dashboard"
              render={() => <MainDash/> }>
            </Route>
          </DataContextProvider>
        </Switch>

      </Layout>


    </div>
  );
}

export default App;

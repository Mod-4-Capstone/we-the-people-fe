import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom"
import './App.css';
import Layout from '../Layout/Layout'
import Quiz from '../Quiz/Quiz'
import MainDash from '../MainDash/MainDash';
import { DataContextProvider } from '../../contexts/DataContext'



const App = () => {

  return (
    <div className="App">
    <DataContextProvider>
      <Layout>
        <Switch>
          <Route exact path="/"
            render={() =>{
              return (
              <>
                <Quiz />
              </>
          )}}
          />
            <Route exact path="/results-dashboard"
              render={() => <MainDash/> }>
            </Route>
        </Switch>

      </Layout>
      </DataContextProvider>


    </div>
  );
}

export default App;

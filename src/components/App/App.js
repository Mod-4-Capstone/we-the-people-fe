import React, { useState, useEffect } from 'react'
import { Route, Switch } from "react-router-dom"
import './App.css';
import Layout from '../Layout/Layout'
import Quiz from '../Quiz/Quiz'


const App = () => {
  const [legislators, setLegislators] = useState([])
  const [quizResult, setQuizResult] = useState({})
  
  return (  
    <div className="App">
      <Layout>
        <h1>super cool app dude</h1>
        <Quiz/>

      </Layout>
      
      
    </div>
  );
}
 
export default App;


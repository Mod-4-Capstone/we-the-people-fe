import React from "react"
import './Quiz.css'
import Statement from "../Statement/Statement"

const Quiz = () => {

  return (
    <form className="quiz">
      <Statement statement="Abortion should be legalized at the federal level."/>
      <Statement statement="Public schools should be better funded."/>
      <Statement statement="Healthcare should be universal."/>
      <Statement statement="There should be more restrictions on the process of purchasing a gun."/>
      <Statement statement="The U.S. government should increase environmental regulations in order to mitigate climate change."/>
      <Statement statement="The U.S. government should raise the federal minimum wage."/>
      <Statement statement="The U.S. government should build a wall along the southern border."/>
      <Statement statement="The U.S. government should support a separation of church and state."/>
    </form>
  )
} 

export default Quiz
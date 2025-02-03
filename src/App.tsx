import React from "react"

import './App.css'
import Die from "./Die.jsx"

function App() {
  
  // initial dice state
  const [dice, setDice] = React.useState(generatePlayingDice())

  
  // generate full array of 10 dice
 function generatePlayingDice(){
    return new Array(10)
          .fill(0)
          .map(()=> Math.ceil(Math.random() * 6))
 }
  
// generate 10 die elements on the page
 const gameDice = dice.map((num, i) => {
  return <Die key={i} number={num} />
})



  return (
    
   
      <main>
        <div className="Die-container">
          {gameDice}
        </div>
      </main>

  )
}

export default App

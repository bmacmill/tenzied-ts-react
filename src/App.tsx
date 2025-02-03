import React from "react"
import './App.css'
import Die from "./Die"

function App() {
  
  // initial dice state
  const [diceArray, setDiceArray] = React.useState(()=> generatePlayingDice())
 

  
  // generate full array of 10 dice
 function generatePlayingDice(){
    return new Array(10)
          .fill(0)
          .map(()=> Math.ceil(Math.random() * 6))
 }
  
// generate 10 die elements to put on the page
 const diceElements = diceArray.map((num, i) => {
  return <Die key={i} number={num} />
})

function handleClick(){
  setDiceArray(prevState => prevState = generatePlayingDice())
}

  return (   
      <main>
        <div className="Die-container">
          {diceElements}
         </div>
     
        <button className="Roll-btn" onClick={handleClick}>Roll</button>
    
      </main>

  )
}

export default App

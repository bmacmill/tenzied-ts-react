import React from "react"
import './App.css'
import Die from "./Die"

function App() {
  
  // initial dice state
  const [diceArray, setDiceArray] = React.useState(()=> generatePlayingDice())
 

  
  // generate full array of 10 dice
  //added id adn is held property making die an object
 function generatePlayingDice(){
    return new Array(10)
          .fill(0)
          .map(()=> {
            return {
              num:  Math.ceil(Math.random() * 6),
              id: crypto.randomUUID(),
              isHeld: true
            }
          })
 }
// hold dice
function hold(id){
  console.log(id)
}

// generate 10 die elements to put on the page
 const diceElements = diceArray.map((el) => {
  return <Die key={el.id} number={el.num} isHeld={el.isHeld} hold={()=>hold(el.id)}/>
})



function handleClick(){
  console.log(diceArray)
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

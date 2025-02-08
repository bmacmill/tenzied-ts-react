import React from "react"
import './App.css'
import Die from "./Die"
import Header from "./Header"

function App() {
  
  // initial dice state
  const [diceArray, setDiceArray] = React.useState(()=> generatePlayingDice())

 //not sure this works...
// type Di = {
//     num: number,
//     id: string,
//     isHeld: boolean
//   }
  
  // generate full array of 10 dice
  //added id and is held property making die an object
 function generatePlayingDice(){
    return new Array(2)
          .fill(0)
          .map(()=> {
            return {
              num:  Math.ceil(Math.random() * 6),
              id: crypto.randomUUID(),
              isHeld: false
            }
          })
 }
// hold dice 
//note the double returns that always trips me up
function hold(id: string) {
  setDiceArray(prevDice => {
    return prevDice.map(die => {
      return die.id === id ? {...die, isHeld: !die.isHeld} : die
    })

  })
}

//check if game is won
const gameWon:boolean = diceArray.every(die => die.isHeld) &&
diceArray.every(die => die.num === diceArray[0].num)

// function hold(id) {
//   console.log(id)
//   setDice(prevState => {
//          return prevState.map(die => {
//           return  die.id === id ? {...die, isHeld: !die.isHeld} : die
//               })
//   })
// }


// generate 10 die elements to put on the page
 const diceElements = diceArray.map((el, index) => {
  return <Die key={index} number={el.num} isHeld={el.isHeld} hold={()=>hold(el.id)}/>
})



function handleClick(){
  if(gameWon){
    setDiceArray(generatePlayingDice())
  } else {
    setDiceArray(prevDice => prevDice.map((die)=>{
      return die.isHeld ? die : {...die, num: Math.ceil(Math.random() * 6)}
    })) 
  }
  
// setDice(generateAllNewDice())
}

  return (   
      <main>
        
        <Header />
        <div className="Die-container">
          {diceElements}
         </div>
     
        <button className="Roll-btn" onClick={handleClick}>
          {gameWon ? "Play Again" : "Roll"}
          </button>
    
      </main>

  )
}

export default App

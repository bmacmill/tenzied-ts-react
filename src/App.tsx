import './App.css'
import Die from "./Die.jsx"

function App() {
  
  let dice = new Array(10).fill("1")
  
  console.log("dice", dice)
  const gameDice = dice.map((el, i) => {
    return <Die key={i} number={el} />
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

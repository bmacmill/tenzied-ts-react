Things I learned

--the hold function keeps tripping me up; the multiple return statements

    function hold(id) {
        console.log(id)
        setDice(prevState => {
               return prevState.map(die => {
                return  die.id === id ? {...die, isHeld: !die.isHeld} : die
                    })
        })
    }

--slightly cleaned up version with only 1 return 

   function hold(id) {
        setDice(prevDice => prevDice.map((die)=>{
                return die.id === id ? {...die, isHeld: !die.isHeld}: die
            }))
        }

Screenshots of game

game at start

<img width="413" alt="Image" src="https://github.com/user-attachments/assets/0a8269b4-9954-4a59-a6d4-0faf1a81bbf6" />
<br />

when game is won

<img width="419" alt="Image" src="https://github.com/user-attachments/assets/7dea2738-0e96-4ce2-b109-6f739ebc109c" />

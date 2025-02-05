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

slightly cleaned up version with only 1 return 

   function hold(id) {
        console.log(id)
        setDice(prevDice => prevDice.map((die)=>{
                return die.id === id ? {...die, isHeld: !die.isHeld}: die
            }))
        
    }

    
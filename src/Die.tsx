import React from "react"

import "./Die.css"

export default function Die({number, isHeld, hold, id}: { number: number, isHeld: boolean, hold: Function, id: string}): JSX.Element{

    const bgColor = isHeld ? "#59E391" : "white"
    return (

        <button onClick={()=>hold(id)} 
                style={{backgroundColor: bgColor}} 
                className="Die">
                    {number}
        </button>
    )
}
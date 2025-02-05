import React from "react"

import "./Die.css"

export default function Die({number, isHeld}: { number: number, isHeld: boolean}): JSX.Element{

    const bgColor = isHeld ? "#59E391" : "white"
    return (

        <button style={{backgroundColor: bgColor}} className="Die">{number}</button>
    )
}
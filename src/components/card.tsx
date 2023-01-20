import { useState } from "react"

interface ICartProps {
    word: any
    setWordIndex: Function
    wordIndex: number

}

export const Card = (props : ICartProps) => {


    return (
        <div>
            <h1>{props.word.en}</h1>
            <h1>{props.word.rus}</h1>
            <button className='bg-amber-400 border-black border-2' onClick={() => props.setWordIndex(props.wordIndex + 1)}>next</button>
        </div>
    )
}
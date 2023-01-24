import { useState } from "react"

interface ICartProps {
    word: any
    setWordIndex: Function
    wordIndex: number

    translate: boolean
    setTranslate: Function
}

export const Card = (props : ICartProps) => {

    const [userInput, setUserInput] = useState('')

    return (
        <div className="ml-8 text-center block">
            <h1>{props.word.en}</h1>
            {props.translate ? <h1>{props.word.rus}</h1> : <h1></h1>}
            <button className='bg-amber-400 border-black border-2' onClick={() => props.setTranslate(!props.translate)}>unlock permission</button>
            <button className='bg-amber-400 border-black border-2' onClick={() => {

                props.setWordIndex(props.wordIndex + 1)
                props.setTranslate(false)
                setUserInput('')
                
                }}>next</button>
            <br/>
            <input className="border-black border-2" value={userInput} onChange={(e) => setUserInput(e.target.value)}/>

        </div>
    )
}
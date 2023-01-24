import { useState } from "react"
import { MyButton } from "./UI/MyButton/MyButton"
import { MyInput } from "./UI/MyInput/MyInput"

interface ICartProps {
    word: any
    setWordIndex: Function
    wordIndex: number

    translate: boolean
    setTranslate: Function
}

export const Card = (props : ICartProps) => {

    const ClickNext = (p:any) => {
        p.setWordIndex(props.wordIndex + 1)
        p.setTranslate(false)
        setUserInput('')
        // Очищает инпут у пользователя
    }


    const [userInput, setUserInput] = useState('')

    return (
        <div className="ml-8 w-64 text-center block">
            <h1>{props.word.en}</h1>
            {props.translate ? <h1>{props.word.rus}</h1> : <></>}
            <div className="w-64" >
                <MyButton onClick={() => props.setTranslate(!props.translate)}>unlock permission</MyButton>
                <MyButton onClick={() => ClickNext(props)}>next</MyButton>
                <br/>
            </div>
                <MyInput value={userInput} onChange={(e: any) => setUserInput(e.target.value)}/>
        </div>
    )
}
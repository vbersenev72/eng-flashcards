import { useContext, useState } from "react"
import { MyButton } from "./UI/MyButton/MyButton"
import { MyInput } from "./UI/MyInput/MyInput"
import { Context } from "../context/Context"



interface ICardProps {

}


export const Card = (MyContext : ICardProps) => {

    const {word, translate, setTranslate, userInput, OnCorrectAnswer, setUserInput } = useContext(Context)



    return (
        <div className="ml-8 w-64 text-center block">
            <h1>{word.en}</h1>
            {translate ? <h1>{word.rus}</h1> : <></>}
            <div className="w-64" >
                <MyButton onClick={() => setTranslate(!translate)}>unlock permission</MyButton>
                <MyButton onClick={() => OnCorrectAnswer(userInput, word)}>next</MyButton>
                <br/>
            </div>
                <MyInput value={userInput} onChange={(e: any) => setUserInput(e.target.value)}/>
        </div>
    )
}
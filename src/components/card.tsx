import { useContext } from "react"
import { MyButton } from "./UI/MyButton/MyButton"
import { MyInput } from "./UI/MyInput/MyInput"
import { Context } from "../context/Context"
import { useForm } from "react-hook-form"

import "./styles/card.css"


interface ICardProps {

}


export const Card = (props : ICardProps) => {

    const {word, translate, setTranslate, userInput, OnCorrectAnswer, setUserInput } = useContext(Context)


    const OnSubmit = (Input:any, CorrectInput:string, e:any) => {
        OnCorrectAnswer(Input, CorrectInput) /* Проверяет валидность ответа пользователя */
        e.preventDefault() /* предотвращает обновление страницы после Submit */

        console.log(word.en + " " + word.rus) // Тест хуйни этой
    }




    return (
        <div className="card">
            <h2 className="card_title">{word.en}</h2>

            {translate ? <h1>{word.rus}</h1> : <></>}

            <form onSubmit={(e) => OnSubmit(userInput, word, e)}>
                <MyInput value={userInput} onChange={(e: any) => setUserInput(e.target.value)}/>
            </form>

            <div className="card_input" >
                <button className="card_input_button" onClick={() => setTranslate(!translate)}>Показать перевод</button>
                <MyButton onClick={(e:Event) => OnSubmit(userInput, word, e)}>Next</MyButton>
                <br/>
            </div>


        </div>
    )
}
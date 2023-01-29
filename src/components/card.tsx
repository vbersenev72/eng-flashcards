import { useContext } from "react"
import { MyButton } from "./UI/MyButton/MyButton"
import { MyInput } from "./UI/MyInput/MyInput"
import { Context } from "../context/Context"
import { useForm } from "react-hook-form"



interface ICardProps {

}


export const Card = (MyContext : ICardProps) => {

    const {word, translate, setTranslate, userInput, OnCorrectAnswer, setUserInput } = useContext(Context)

    const { register, handleSubmit } = useForm()
    /* register - Это функция, которую необходимо подключить к каждому из полей ввода. В качестве ссылки (ref) */
    /* Функция register будет принимать значение, которое пользователь ввел в поле, и проверять его */

    //handleSubmit - собирает все данные из полей ввода, мы получим их в OnSubmit в виде обьекта Data



    const OnSubmit = (Input:any, CorrectInput:string, e:any) => {
        OnCorrectAnswer(Input, CorrectInput) /* Проверяет валидность ответа пользователя */
        e.preventDefault() /* предотвращает обновление страницы после Submit */
    }


    return (
        <div className="ml-8 w-64 text-center block border-2 border-black">
            <h1>{word.en}</h1>
            {translate ? <h1>{word.rus}</h1> : <></>}

            <div className="w-64" >
                <MyButton onClick={() => setTranslate(!translate)}>unlock permission</MyButton>
                <MyButton onClick={(e: any) => OnSubmit(userInput, word, e)}>next</MyButton>
                <br/>
            </div>

            <form onSubmit={(e) => OnSubmit(userInput, word, e)}>
                <MyInput ref={register} value={userInput} onChange={(e: any) => setUserInput(e.target.value)}/>
            </form>
        </div>
    )
}
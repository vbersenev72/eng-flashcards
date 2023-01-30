import { useContext } from "react"
import { Context } from "../context/Context"
import { Card } from "./card"
import { MySubmit } from "./UI/MySubmit/MySubmit"

import "./styles/cardPlace.css"


interface ICardPlace {

}

export const CardPlace = (props: ICardPlace) => {

    const {SubmitCorrectFlag, setSubmitCorrectFlag, SubmitInCorrectFlag, setSubmitInCorrectFlag} = useContext(Context)

    return (
        <div className="cardPlace" onClick={(e) => {
                setSubmitCorrectFlag(false)
                e.preventDefault() // Предотвращение дефолтного обновления страницы браузером
            }}>
            <Card/>
            <br/>
            {SubmitCorrectFlag ? <MySubmit classFlag={true}>Верно</MySubmit> : <></>}
            {SubmitInCorrectFlag ? <MySubmit classFlag={false}>Неверно</MySubmit> : <></>}
        </div>
    )
}
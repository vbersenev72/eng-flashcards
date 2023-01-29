import { useContext } from "react"
import { Context } from "../context/Context"
import { Card } from "./card"
import { MySubmit } from "./UI/MySubmit/MySubmit"


interface ICardPlace {

}

export const CardPlace = (props: ICardPlace) => {

    const {SubmitCorrectFlag, setSubmitCorrectFlag, SubmitInCorrectFlag, setSubmitInCorrectFlag} = useContext(Context)

    return (
        <div onClick={(e) => {
                setSubmitCorrectFlag(false)
                e.preventDefault()
            }}>
            <Card/>
            {SubmitCorrectFlag ? <MySubmit classFlag={true}>Верно</MySubmit> : <></>}
            {SubmitInCorrectFlag ? <MySubmit classFlag={false}>Неверно</MySubmit> : <></>}
        </div>
    )
}
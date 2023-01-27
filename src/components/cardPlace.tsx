import { Card } from "./card"


interface ICardPlace {
    MyContext: object
}

export const CardPlace = (props: ICardPlace) => {
    return (
        <div>
            <Card MyContext = {props.MyContext}/>
        </div>
    )
}
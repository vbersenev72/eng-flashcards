import { Card } from "./card"


interface ICardPlace {
    words: object[]
}

export const CardPlace = (props:ICardPlace) => {
    return (
        <div>
            <button className='bg-amber-400 border-black border-2' onClick={() => console.log(props.words)}>output</button>
            {/* Кнопка для теста массива слов */}

            
            <Card/>
        </div>
    )
}
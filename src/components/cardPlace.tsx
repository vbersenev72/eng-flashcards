import { Card } from "./card"


interface ICardPlace {
    words: object[]
    setWordIndex: Function
    wordIndex: number
    translate: boolean
    setTranslate: Function
}

export const CardPlace = (props:ICardPlace) => {
    return (
        <div>
            <button className='bg-black border-black border-2 text-white mb-14' onClick={() => console.log(props.words)}>test words array (building)</button>
            {/* Кнопка для теста массива слов */}
            
            <Card word = {props.words[props.wordIndex]} setWordIndex={props.setWordIndex} wordIndex={props.wordIndex} translate={props.translate} setTranslate={props.setTranslate}/>
        </div>
    )
}
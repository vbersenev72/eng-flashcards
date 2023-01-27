import { useContext, useState } from "react"
import { MyButton } from "./UI/MyButton/MyButton"
import { MyInput } from "./UI/MyInput/MyInput"




// interface ICartProps {
//     word: any
//     setWordIndex: Function
//     wordIndex: number

//     translate: boolean
//     setTranslate: Function
// }

export const Card = (MyContext : any) => {

    const store:any = useContext(MyContext)

    return (
        <div className="ml-8 w-64 text-center block">
            <h1>{store.word.en}</h1>
            {store.translate ? <h1>{store.word.rus}</h1> : <></>}
            <div className="w-64" >
                <MyButton onClick={() => store.setTranslate(!store.translate)}>unlock permission</MyButton>
                <MyButton onClick={() => store.OnClickNextCard(store)}>next</MyButton>
                <br/>
            </div>
                <MyInput value={store.userInput} onChange={(e: any) => store.setUserInput(e.target.value)}/>
        </div>
    )
}
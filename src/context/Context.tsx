import React from "react";
import list from "./data/notesList";
import { useState } from 'react';


interface ContextType {
    userInput?: string
    setUserInput?: any
    OnClickNextCard?: any
    wordIndex?: number
    setWordIndex?: any
    setTranslate?: any
    translate?: boolean
    word?: any
    words?: any
    value?: any
    OnCorrectAnswer?: any
    setSubmitCorrectFlag?: any
    SubmitCorrectFlag?: boolean
    setSubmitInCorrectFlag?: any
    SubmitInCorrectFlag?: boolean
}

const Context = React.createContext<ContextType>({})



 function ContextProvider({children}:any) {

    const [userInput, setUserInput] = useState('') /*Инпут пользователя внутри Card */

    const OnClickNextCard = (p:any) => {
        setWordIndex(wordIndex + 1)
        setTranslate(false)
        setUserInput('')
        // Очищает инпут у пользователя
    } /*Метод нажатия на кнопку Next внутри компонента Card */


    const OnCorrectAnswer = (userinput:string, word:any) => {
      if (userinput === word.rus){
        setWordIndex(wordIndex + 1) /* Показ следующей карточки */
        setTranslate(false) /* Сокрытие блока с переводом */
        setUserInput('') /* Очищение инпута юзера */
        setSubmitCorrectFlag(!SubmitCorrectFlag) // делаем значение true - чтобы вывести "Верно"

        setTimeout(() => {
          setSubmitCorrectFlag(false)
        }, 3000); /* спустя 3 секунды надпись "Верно" пропадает */
      } else {
        
      }
    } /* Метод валидации инпута пользователя */


    const words = [...list] /* Массив из слов. */

    const [wordIndex, setWordIndex] = useState(0) /* Индекс массива words, по измненению которого будет меняться содержимое карточки */

    const [translate, setTranslate] = useState(false) /* если флаг активен - показывается перевод текста */

    const [SubmitCorrectFlag, setSubmitCorrectFlag] = useState(false) /* если true => ответ пользователя верный, если false => неактивен */
    const [SubmitInCorrectFlag, setSubmitInCorrectFlag] = useState(false) /* если true => ответ пользователя НЕверный, если false => неактивен */

    const word = words[wordIndex] /* слово из массива */

    const store: ContextType = {
      userInput, setUserInput, OnCorrectAnswer, wordIndex, setWordIndex, setTranslate, word, words, translate, setSubmitCorrectFlag, SubmitCorrectFlag, setSubmitInCorrectFlag, SubmitInCorrectFlag
    }

    return <Context.Provider value={store}> {children} </Context.Provider>
}

export {ContextProvider, Context}

// 28.01.23
// ДОБАВИТЬ ИНДИКАТОР ВАЛИДАЦИИ ОТВЕТА ЮЗЕРА

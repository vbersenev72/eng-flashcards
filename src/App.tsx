
import { CardPlace } from './components/cardPlace';
import list from './data/notesList';

import "./App.css"
import { useState } from 'react';
import { createContext } from 'react';


function App() {  

  const [userInput, setUserInput] = useState('')

  const OnClickNextCard = (p:any) => {
      p.setWordIndex(p.wordIndex + 1)
      p.setTranslate(false)
      setUserInput('')
      // Очищает инпут у пользователя
  }

  const words = [...list]
  const [wordIndex, setWordIndex] = useState(0)
  const [translate, setTranslate] = useState(false)
  const word = words[wordIndex]





  // Контекст
  const store = {userInput, setUserInput, OnClickNextCard, words, wordIndex, word, setWordIndex, translate, setTranslate}
  const MyContext = createContext(store)
 


  return (

    <div className="App">
      <MyContext.Provider value={store}>
        <CardPlace MyContext = {MyContext}/>
      </MyContext.Provider>
    </div>
  );
}

export default App;

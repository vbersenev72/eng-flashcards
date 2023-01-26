
import { CardPlace } from './components/cardPlace';
import list from './data/notesList';

import "./App.css"
import { useState } from 'react';
import { MyContextProvider } from './components/context/Context';


function App() {
  
  const words = [...list]
  const [wordIndex, setWordIndex] = useState(0)

  const [translate, setTranslate] = useState(false)


  return (

    <div className="App">
      <MyContextProvider>
      <CardPlace words={words} wordIndex={wordIndex} setWordIndex={setWordIndex} translate={translate} setTranslate = {setTranslate}/>
      </MyContextProvider>
        
    </div>
  );
}

export default App;

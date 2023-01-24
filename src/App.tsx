
import { CardPlace } from './components/cardPlace';
import list from './data/notesList';

import "./App.css"
import { useState } from 'react';


function App() {
  
  const words = [...list]
  const [wordIndex, setWordIndex] = useState(0)

  const [translate, setTranslate] = useState(false)


  return (
    <div className="App">
        <CardPlace words={words} wordIndex={wordIndex} setWordIndex={setWordIndex} translate={translate} setTranslate = {setTranslate}/>
    </div>
  );
}

export default App;

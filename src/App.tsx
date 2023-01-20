
import { Card } from './components/card';
import { CardPlace } from './components/cardPlace';
import list from './data/notesList';

import "./App.css"
import { useState } from 'react';


function App() {

  const words = [...list]
  const [wordIndex, setWordIndex] = useState(0)


  return (
    <div className="App">
        <CardPlace words={words} wordIndex={wordIndex} setWordIndex={setWordIndex} />
    </div>
  );
}

export default App;

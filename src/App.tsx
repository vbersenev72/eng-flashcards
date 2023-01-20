
import { Card } from './components/card';
import { CardPlace } from './components/cardPlace';
import list from './data/notesList';

import "./App.css"


function App() {

  const words = [...list]


  return (
    <div className="App">
        <CardPlace words = {words} />
    </div>
  );
}

export default App;


import { CardPlace } from './components/cardPlace';

import "./App.css"

import { ContextProvider } from './context/Context';

function App() {




  return (

    <div className="App">
      <ContextProvider>
        <CardPlace/>
      </ContextProvider>
    </div>
  );
}

export default App;
import { CardPlace } from './components/cardPlace';
import "./App.css"
import { ContextProvider } from './context/Context';
import About from './components/about';
import { AppRouter } from './components/AppRouter';

function App() {

  return (

    <div className="App">
      <ContextProvider>

        <CardPlace/>
        <About/>

      </ContextProvider>
    </div>
  );
}

export default App;
import './App.css';
import { First as FirstComponent } from './components/First/First'; // Через "as" можно поменять название компонента.
import { Second } from './components/Second/Second';
import { Third } from './components/Third/Third';
import hummingbird from './assets/hummingbird.png';
import myFunctionFirst from './components/First/First';
import myFunctionSecond from './components/Second/Second';

function App() {
  myFunctionFirst()
  myFunctionSecond ()
 

  return (
    <div className="container">
        <header className="App-header">
        <p>
        Привет!
        </p>
        <img src={hummingbird} className="Hummingbird" alt="" />      
         <FirstComponent />
         <Second />
         <Third />
      </header>         
    </div>
  );
}

export default App;

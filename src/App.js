

import './App.css';
import Constructor from './components/props/Constructor';


import Props from './components/props/props';
import Props2 from './components/props/Props2';
import Props3 from './components/props/Props3';
import State1 from './components/state/State1';
import UseState from './components/USESTATE/UseState';
import UseEffect from './components/useEffect/UseEffect';
function App() {
  return (
    <div className="App">
      <Props brand="Ford"/>
      <Props3/>
      <Props2/>
    <Constructor brand="ford1"/>
    <State1/>
    <UseState/>
    <UseEffect/>
    </div>
  );
}

export default App;

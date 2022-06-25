import './App.css';
import {Calculadora} from './components/Calculadora/Calculadora';
import React from 'react';
export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='App'>
        <h1>Calculadora React</h1>
        <Calculadora/>
      </div>
    );
  }
}

export default App;

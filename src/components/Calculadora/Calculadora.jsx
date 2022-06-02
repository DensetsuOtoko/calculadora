import React from 'react'
import './Calculadora.css'
import {Box} from '@mui/material';
import {ContainerComponente} from "../ContainerComponente/ContainerComponente";
import {Botao} from "../Botao/Botao";

export class Calculadora extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    }
  }

  inputNum = (e) => {
    const state = this.state;
    let input = e.target.innerText.toLowerCase();
    if (this.state.num === 0) {
      state.num = input;
    }
    else {
      state.num += input;
    }
    this.setState(state);
  }

  clear = () => {
    const state = this.state;
    state.num = 0;
    this.setState(state);
  }

  porcentagem = () => {
    const state = this.state;
    state.num = (this.state.num / 100);
    this.setState(state);
  }

  changeSign = () => {
    const state = this.state;
    if (this.state.num > 0) {
      state.num = -this.state.num;
    }
    else {
      state.num = Math.abs(this.state.num);
    }
    this.setState(state);
  }

  calculate = () => {
    const state = this.state;
    state.num = eval(state.num);
    this.setState(state);
  }


  render() {
    return (
      <ContainerComponente>
        <Box m={(12)} />
        <h1 className="result">{this.state.num}</h1>

        <Botao titulo={'+/-'} onClick={this.changeSign}/>
        <Botao titulo={'AC'} onClick={this.clear}/>
        <Botao titulo={'%'} onClick={this.porcentagem}/>
        <Botao titulo={'/'} className='orange' onClick={this.inputNum}/>

        <Botao titulo={'7'} className='gray' onClick={this.inputNum}/>
        <Botao titulo={'8'} className='gray' onClick={this.inputNum}/>
        <Botao titulo={'9'} className='gray' onClick={this.inputNum}/>
        <Botao titulo={'X'} className='orange' onClick={this.inputNum}/>

        <Botao titulo={'4'} className='gray' onClick={this.inputNum}/>
        <Botao titulo={'5'} className='gray' onClick={this.inputNum}/>
        <Botao titulo={'6'} className='gray' onClick={this.inputNum}/>
        <Botao titulo={'-'} className='orange' onClick={this.inputNum}/>

        <Botao titulo={'1'} className='gray' onClick={this.inputNum}/>
        <Botao titulo={'2'} className='gray' onClick={this.inputNum}/>
        <Botao titulo={'3'} className='gray' onClick={this.inputNum}/>
        <Botao titulo={'+'} className='orange' onClick={this.inputNum}/>

        <Botao titulo={'0'} className='btnZero' onClick={this.inputNum}/>
        <Botao titulo={'.'} className='gray' onClick={this.inputNum}/>
        <Botao titulo={'='} className='orange' onClick={this.calculate}/>
      </ContainerComponente>
    )}

}

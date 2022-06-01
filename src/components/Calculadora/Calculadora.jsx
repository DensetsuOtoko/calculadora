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
      oldNum: 0,
      operator: null
    }
  }

  inputNum = (e) => {
    const state = this.state;
    let input = Number(e.target.innerText);
    if (this.state.num === 0) {
      state.num = input;
    }
    else {
      state.num = this.state.num + input;
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

  operationHandler = (e) => {
    const state = this.state;
    state.operator = e.target.innerText;
    state.oldNum = this.state.num;
    state.num = 0;
    this.setState(state);
  }

  calculate = () => {
    const state = this.state;
    if(this.state.operator === "/"){
      state.num = this.state.oldNum / this.state.num;
    }
    else if(this.state.operator === "*"){
      state.num = this.state.oldNum * this.state.num;
    }
    else if(this.state.operator === "-"){
      state.num = this.state.oldNum - this.state.num;
    }
    else if(this.state.operator === "+"){
      state.num = this.state.oldNum + this.state.num;
    }

    console.log("calculou!!!")
    console.log(this.state)
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
        <Botao titulo={'/'} className='orange' onClick={this.operationHandler}/>

        <Botao titulo={'7'} className='gray' onClick={this.inputNum}/>
        <Botao titulo={'8'} className='gray' onClick={this.inputNum}/>
        <Botao titulo={'9'} className='gray' onClick={this.inputNum}/>
        <Botao titulo={'X'} className='orange' onClick={this.operationHandler}/>

        <Botao titulo={'4'} className='gray' onClick={this.inputNum}/>
        <Botao titulo={'5'} className='gray' onClick={this.inputNum}/>
        <Botao titulo={'6'} className='gray' onClick={this.inputNum}/>
        <Botao titulo={'-'} className='orange' onClick={this.operationHandler}/>

        <Botao titulo={'1'} className='gray' onClick={this.inputNum}/>
        <Botao titulo={'2'} className='gray' onClick={this.inputNum}/>
        <Botao titulo={'3'} className='gray' onClick={this.inputNum}/>
        <Botao titulo={'+'} className='orange' onClick={this.operationHandler}/>

        <Botao titulo={'0'} className='btnZero' onClick={this.inputNum}/>
        <Botao titulo={'.'} className='gray'/>
        <Botao titulo={'='} className='orange' onClick={this.calculate}/>
      </ContainerComponente>
    )}

}

import React from 'react';
import './Calculadora.css';
import {Box} from '@mui/material';
import {ContainerComponente} from '../ContainerComponente/ContainerComponente';
import {Botao} from '../Botao/Botao';

const ARR_OPERACOES = ['*', '/', '+', '.', '-'];

export class Calculadora extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      numAnt: 0,
    };
  }

  inputNum = (e) => {
    const state = this.state;
    let input = e.target.innerText.toLowerCase().replaceAll('x', '*');
    if (this.state.num === 0) {
      state.num = input;
    }
    else if (ARR_OPERACOES.includes(this.state.num[state.num.length - 1]) && ARR_OPERACOES.includes(input)) {
      state.num = state.num.replace(state.num[state.num.length - 1], input);
    }
    else {
      state.num += input;
    }
    this.setState(state);
  };

  clear = () => {
    const state = this.state;
    state.num = 0;
    this.setState(state);
  };

  porcentagem = () => {
    const state = this.state;
    state.num = (this.state.num / 100);
    this.setState(state);
  };

  changeSign = () => {
    const state = this.state;
    if (this.state.num > 0) {
      state.num = -this.state.num;
    }
    else {
      state.num = Math.abs(this.state.num);
    }
    this.setState(state);
  };

  calculate = () => {
    const state = this.state;
    // eslint-disable-next-line no-eval
    /* como é um código simples que não faz requisições ao banco de dados não é necessário criar validações aqui */
    state.num = eval(state.num);
    this.setState(state);
  };

  render() {
    const disabled = !this.state.num;
    const classNameOrange = !disabled ? 'orange' : '';
    const classNameGray = !disabled ? 'gray' : '';

    console.log('state', this.state);
    return (
      <ContainerComponente>
        <Box m={(12)}/>
        <h1 className="result">{this.state.num}</h1>

        <Botao titulo={'AC'} className={classNameOrange} disabled={disabled} onClick={this.clear}/>
        <Botao titulo={'+/-'} className={classNameOrange} disabled={disabled} onClick={this.changeSign}/>
        <Botao titulo={'%'} className={classNameOrange} disabled={disabled} onClick={this.porcentagem}/>
        <Botao titulo={'/'} className={classNameOrange} disabled={disabled} onClick={this.inputNum}/>

        <Botao titulo={'7'} className="gray" onClick={this.inputNum}/>
        <Botao titulo={'8'} className="gray" onClick={this.inputNum}/>
        <Botao titulo={'9'} className="gray" onClick={this.inputNum}/>
        <Botao titulo={'x'} className={classNameOrange} disabled={disabled} onClick={this.inputNum}/>

        <Botao titulo={'4'} className="gray" onClick={this.inputNum}/>
        <Botao titulo={'5'} className="gray" onClick={this.inputNum}/>
        <Botao titulo={'6'} className="gray" onClick={this.inputNum}/>
        <Botao titulo={'-'} className={classNameOrange} disabled={disabled} onClick={this.inputNum}/>

        <Botao titulo={'1'} className="gray" onClick={this.inputNum}/>
        <Botao titulo={'2'} className="gray" onClick={this.inputNum}/>
        <Botao titulo={'3'} className="gray" onClick={this.inputNum}/>
        <Botao titulo={'+'} className={classNameOrange} disabled={disabled} onClick={this.inputNum}/>

        <Botao titulo={'0'} className="btnZero" disabled={disabled} onClick={this.inputNum}/>
        <Botao titulo={'.'} className={classNameGray} disabled={disabled} onClick={this.inputNum}/>
        <Botao titulo={'='} className={classNameGray} disabled={disabled} onClick={this.calculate}/>
      </ContainerComponente>

    );
  }

}

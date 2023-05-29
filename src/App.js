import React, {useEffect, useState} from "react";
import Button from '../components/Button';
import Display from "../components/Display";
import {evaluate} from 'mathjs';
export const bufferContext = React.createContext();

const App = () => {
  const [buffer, setBuffer] = useState('');
  const [result, setResult] = useState('');


  const clear = () => {
    setBuffer('');
    setResult('');
  };

  useEffect(() => {
    if(result.length > 9){
      setBuffer(buffer.slice(0, -1));
      setResult(result.slice(0, -1));
    }
    if(result < 0){
      setResult('ERROR negative');
      setBuffer('');
    }
    if (result > 999999999){
      setResult('ERROR too big');
      setBuffer('');
    }
    

  }, [result]);

  const performEvaluation = () => {    
    try{
      const result = evaluate(buffer.toString());
      setResult(result);
      setBuffer(result);
    }catch(error){
      setResult('ERROR catch'); //catch
      setBuffer('');
    }    
  }

  const operator = (symbol) => {
    performEvaluation();    
    setBuffer(buffer + symbol);
    setResult('')
    console.log('operator', result) //borrame
  };

  const operand = (symbol) => {
    setBuffer(buffer + symbol);
    setResult(result + symbol)
    console.log('operand', buffer) //borrame
  };

  const equal = (symbol) => {
    performEvaluation();    
  }

  //borrame
  useEffect(() => {
    console.log('resultado', result)
    console.log('buffer ', buffer)
  }, [result,buffer]);

  const types = {type1: ['#37123C', '#71677C', '#DDA77B'],
                type2: ['#945D5E', '#71677C', '#DDA77B'],
                type3: ['#DDA77B', '#71677C', '#37123C']};


  const buttonInfo = [
                      {symbol: 'CLR', class: 'grid-item-clear', type: 'type3', fun: clear},
                      {symbol: 'DLT', class: 'grid-item-delete', type: 'type3', fun: clear},
                      {symbol: '+', class: 'button', type: 'type1', fun: operator},
                      {symbol: '7', class: 'button', type: 'type2', fun: operand},
                      {symbol: '8', class: 'button', type: 'type2', fun: operand},
                      {symbol: '9', class: 'button', type: 'type2', fun: operand},
                      {symbol: '-', class: 'button', type: 'type1', fun: operator},
                      {symbol: '4', class: 'button', type: 'type2', fun: operand},
                      {symbol: '5', class: 'button', type: 'type2', fun: operand},
                      {symbol: '6', class: 'button', type: 'type2', fun: operand},
                      {symbol: '*', class: 'button', type: 'type1', fun: operator},
                      {symbol: '1', class: 'button', type: 'type2', fun: operand},
                      {symbol: '2', class: 'button', type: 'type2', fun: operand},
                      {symbol: '3', class: 'button', type: 'type2', fun: operand},
                      {symbol: '/', class: 'grid-tem-divide', type: 'type1', fun: operator},
                      {symbol: '0', class: 'grid-item-zero', type: 'type2', fun: operand},
                      {symbol: '=', class: 'grid-item-equal', type: 'type3', fun: equal}];


  const makeButtons = () => {
    const info = []

    buttonInfo.map((button) => {
      info.push(
        <div key = {button['symbol']} className={button.class}>
          <Button 
            buttonText={button.symbol} 
            color={types[button.type][0]} 
            hoverColor={types[button.type][1]} 
            activeColor={types[button.type][2]}
            fun = {button.fun}/>
        </div>)
    });

    return info;
  };
  

  return (    
    <bufferContext.Provider value={{buffer, setBuffer, result, setResult}}>
      <div className="parent">
        <div className="grid-container">
          <div className="grid-item-display">
            <Display displayText={'Gus'} displayColor={'#A99F96'}/>
          </div>
          {makeButtons()}
        </div>
      </div>
    </bufferContext.Provider>
  );
};

export default App;
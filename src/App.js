import React from "react";
import Button from '../components/Button';
import Display from "../components/Display";

const App = () => {
  const types = {type1: ['#37123C', '#71677C', '#DDA77B'],
                type2: ['#945D5E', '#71677C', '#DDA77B'],
                type3: ['#DDA77B', '#71677C', '#37123C']};



  const buttonInfo = [
                      {symbol: 'CLR', class: 'grid-item-clear', type: 'type3'},
                      {symbol: 'DLT', class: 'grid-item-delete', type: 'type3'},
                      {symbol: '+', class: 'button', type: 'type1'},
                      {symbol: '7', class: 'button', type: 'type2'},
                      {symbol: '8', class: 'button', type: 'type2'},
                      {symbol: '9', class: 'button', type: 'type2'},
                      {symbol: '-', class: 'button', type: 'type1'},
                      {symbol: '4', class: 'button', type: 'type2'},
                      {symbol: '5', class: 'button', type: 'type2'},
                      {symbol: '6', class: 'button', type: 'type2'},
                      {symbol: '*', class: 'button', type: 'type1'},
                      {symbol: '1', class: 'button', type: 'type2'},
                      {symbol: '2', class: 'button', type: 'type2'},
                      {symbol: '3', class: 'button', type: 'type2'},
                      {symbol: '/', class: 'grid-tem-divide', type: 'type1'},
                      {symbol: '0', class: 'grid-item-zero', type: 'type2'},
                      {symbol: '=', class: 'grid-item-equal', type: 'type3'}];

  const makeButtons = () => {
    const info = []

    buttonInfo.map((button) => {
      info.push(
        <div className={button.class}>
          <Button 
            buttonText={button.symbol} 
            color={types[button.type][0]} 
            hoverColor={types[button.type][1]} 
            activeColor={types[button.type][2]}/>
        </div>)
    });

    return info;
  };
  
  return (    
    <div className="parent">
      <div className="grid-container">
        <div className="grid-item-display">
          <Display displayText={'Gus'} displayColor={'#A99F96'}/>
        </div>
        {makeButtons()}
      </div>
    </div>
  );
};

export default App;
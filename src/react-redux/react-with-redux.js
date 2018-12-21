import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';

import counter from './reducer.js';
/* ###############################################################
                    REDUX WITH REACT

#################################################################*/

const Counter = ({ counter, increment, decrement }) => {
  return (
    <React.Fragment>
      <h1>Counter Example</h1>
      <span>{counter}</span>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </React.Fragment>
  );
};

const incrementNumber = () => {
  store.dispatch({ type: 'ADD' });
};

const decrementNumber = () => {
  store.dispatch({ type: 'SUB' });
};

const store = createStore(counter);
const render = () => {
  ReactDOM.render(
    <Counter
      counter={store.getState()}
      increment={incrementNumber}
      decrement={decrementNumber}
    />,
    document.getElementById('app')
  );
};

store.subscribe(render);
render();

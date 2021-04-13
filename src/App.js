import React, { useState, useEffect } from 'react';
import Child from "./Child"
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const newObj = { key02: { hoge: 'hoge2', fuga: 'fuga2', id: 'key02', } }
  const [state, setState] = useState({
    key01: { hoge: 'hoge', fuga: 'fuga', id: 'key01', },
    key02: { hoge: 'hoge', fuga: 'fuga', id: 'key02', },
    key03: { hoge: 'hoge', fuga: 'fuga', id: 'key03', },
  });
  const handleChange = (e) => {
    setState(createNewState(state, getValue(e)))
  }
  const createNewState = (state, newData) => {
    return { ...state, ...newData };
  };
  const getValue = (e) => {
    return JSON.parse(e.target.value)
  };
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      {JSON.stringify(state)}
      {
        Object.values(state).map((x, i) => <Child key={i} id={x.id} handleChange={handleChange} num={i} />)
      }
    </div>
  );
}

export default App;

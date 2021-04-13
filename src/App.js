import React, { useState, useEffect } from 'react';
import Child from "./Child"
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  // const [state, setState] = useState({
  //   key01: { hoge: 'hoge', fuga: 'fuga', id: 'key01', },
  //   key02: { hoge: 'hoge', fuga: 'fuga', id: 'key02', },
  //   key03: { hoge: 'hoge', fuga: 'fuga', id: 'key03', },
  // });
  const [state, setState] = useState([]);
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
  const addValue = () => {
    setCount(count + 1);
    // setState(getObj)
    setState(getObj)
    console.log(count);
    console.log(state);
  }
  // useEffect(() => {
    
  // })
  const getObj = { [`key0${count}`]: { hoge: `hoge${count}`, fuga: `fuga${count}`, id: `key0${count}`, }};

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => addValue()}>
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

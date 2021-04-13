import React, { useState, useEffect } from 'react';
// import Child from "./Child"
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
  const newHoge = { key02: { hoge: 'hoge2', fuga: 'fuga2', id: 'key02', } }

  const createNewState = (state, newData) => {
    return { ...state, ...newData };
  };

  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  const getValue = (e) => {
    return JSON.parse(e.target.value)
  };

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button
        value={JSON.stringify(newHoge)}
        onClick={(e) => handleChange(e)}
      >hoge</button>
      {JSON.stringify(state)}
    </div>
  );
}

export default App;

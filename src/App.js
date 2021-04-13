import React, { useState, useEffect } from 'react';
import Child from "./Child"
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState({
    key01: { hoge: 'hoge', fuga: 'fuga', id: 'key01', },
    key02: { hoge: 'hoge', fuga: 'fuga', id: 'key02', },
    key03: { hoge: 'hoge', fuga: 'fuga', id: 'key03', },
  });

  const handleChange = (val) => {
    // setState(createNewState(state, getValue(e)));
    setState({...state, ...val})
    console.log(count);
    console.log(state);
  }
  // シンプルに直接書き換える処理にしたので削除予定
  const createNewState = (state, newData) => {
    return { ...state, ...newData };
  };
  // Childのbuttonのvalueを取得していたがイベントで取得しなくなったので削除予定
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
  const addCount = () => {
    setCount(count + 1);
    console.log(state)
  }
  const getObj = { [`key0${count}`]: { hoge: `hoge${count}`, fuga: `fuga${count}`, id: `key0${count}`, }};

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => addCount()}>
        Click me
      </button>
      {/* {JSON.stringify(state)} */}
      {
        Object.values(state).map((x, i) => <Child key={i} id={x.id} handleChange={handleChange} num={i} />)
      }
    </div>
  );
}

export default App;

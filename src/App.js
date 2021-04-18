import React, { useState, useEffect, useReducer } from 'react';
import Child from "./Child";
import Child2 from "./Child2";
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [obj, setObj] = useState({
    key00: { hoge: 'hoge', fuga: 'fuga', id: 'key00', },
    key01: { hoge: 'hoge', fuga: 'fuga', id: 'key01', },
    key02: { hoge: 'hoge', fuga: 'fuga', id: 'key02', },
    key03: { hoge: 'hoge', fuga: 'fuga', id: 'key03', },
  });

  const handleChange = (val) => {
    setState({...state, ...val})
  }
  // すべてはuseEffectにまかせる（この中でstateを更新する処理をかかないこと！）
  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log(obj);
    console.log(count);
  });

  const addCount = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => addCount()}>
        Click me
      </button>
      <div>
        {JSON.stringify(state)}
      </div>
      <div>
        {
          Object.values(state).map((x, i) => <Child key={i} id={x.id} handleChange={handleChange} num={i} />)
        }
      </div>
      <div>
        <Child2 />
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Child from "./Child"
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  const [state, setState] = useState({
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
    console.log(state);
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
        {
          Object.values(state).map((x, i) => <Child key={i} id={x.id} handleChange={handleChange} num={i} />)
        }
    </div>
  );
}

export default App;

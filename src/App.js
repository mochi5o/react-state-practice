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
    // console.log(state);  //更新されてないやつがconsoleにでたので、
    getconsole();  //関数の実行順の問題かと思ったけど、外で実行してもやっぱり更新されてないやつがでる
  }

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const getconsole = () => {
    console.log(state);
  }
  const addCount = () => {
    setCount(count + 1);
    console.log(count);  //こっちは画面の表示と一緒
    // と思ったらちがった。こっちも更新前のstateが表示される。
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

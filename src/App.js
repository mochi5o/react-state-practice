import React, { useState, useEffect, useReducer } from 'react';
import useUndo from './UseHistory';
import Child from "./Child";
import Counter from "./Counter";
import History from "./History";
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
    setObj({...obj, ...val})
  }
  // すべてはuseEffectにまかせる（この中でstateを更新する処理をかかないこと！）
  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  const addCount = () => {
    setCount(count + 1);
  }

  const { state, set, undo, redo, clear, canUndo, canRedo } = useUndo([]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => addCount()}>
        Click me
      </button>
      <div>
        {JSON.stringify(obj)}
      </div>
      <div>
        {
          Object.values(obj).map((x, i) => <Child key={i} id={x.id} handleChange={handleChange} num={i} />)
        }
      </div>
      <div>
        <Counter />
      </div>
      <History />
      <div>
        undoのライブラリ
        <button onClick={undo} disabled={!canUndo}>
          Undo
        </button>
        <button onClick={redo} disabled={!canRedo}>
          Redo
        </button>
        <button onClick={clear}>Clear</button>
        <button onClick={() => set({ ...state, [count]: "a" })}>add</button>
      </div>
    </div>
  );
}

export default App;

//useReducerをimport
import React, {useReducer} from 'react'

//counterの初期値を0に設定
const initialValue = []
//reducer関数を作成
//historyStateとactionを渡して、新しいhistoryStateを返すように実装する
const reducerFunc = (historyState, action)=> {
//reducer関数にincrement、increment、reset処理を書く
//どの処理を渡すかはactionを渡すことによって判断する
  switch (action){
    // case 'increment':
    //   return historyState + 1
    case 'add':
      console.log(historyState)
      return historyState.concat("add");
    case 'reset':
      return initialValue
    default:
      return historyState
  }
}
const Counter = () => {
//作成したreducerFunc関数とhistoryStateをuseReducerに渡す
//useReducerはhistoryStateとdispatchをペアで返すので、それぞれを分割代入
  const [history, dispatch] = useReducer(reducerFunc, initialValue)
  return (
    <>
      <div>
        {
          Object.values(history).map((x) => <p>{x}</p>)
        }
      </div>
      <input onChange={()=>dispatch('add')} />
      <button onClick={()=>dispatch('reset')}>reset</button>
    </>
  )
}

export default Counter

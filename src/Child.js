import React from "react";

const Child = ({ handleChange, num }) => {
  // たとえばonchangeとかでstateが書き換わるとかに変更する？
  const newHoge = { key02: { hoge: `hoge${num}`, fuga: `fuga${num}`, id: `key0${num}`, } }
  return (
    <button
      type="button"
      // stateを書き換える処理に変更
      onClick= {() => handleChange(newHoge)}
      // value={JSON.stringify(newHoge)}
        // 親コンポーネントのupdateメソッドを呼び出す
    >親コンポーネントを更新する</button>
  );
}
export default Child;
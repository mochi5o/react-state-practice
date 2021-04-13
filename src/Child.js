import React from "react";

const Child = ({ id, handleChange, num }) => {
  const newHoge = { key02: { hoge: `hoge${num}`, fuga: `fuga${num}`, id: `key0${num}`, } }
  return (
    <button
      type="button"
      onClick= {(e) => handleChange(e)}
      value={JSON.stringify(newHoge)}
        // 親コンポーネントのupdateメソッドを呼び出す
    >親コンポーネントを更新する</button>
  );
}
export default Child;
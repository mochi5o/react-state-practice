import React from "react";

const Child = ({ handleChange, num }) => {
  const newObj = { [`key0${num}`]: { hoge: `hoge${num}`, fuga: `fuga${num}`, id: `key0${num}`, } }
  return (
    <button
      type="button"
      onClick= {() => handleChange(newObj)}
    >親コンポーネントを更新する{`0${num}`}</button>
  );
}
export default Child;
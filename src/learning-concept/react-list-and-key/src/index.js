import React from 'react';
import ReactDOM from 'react-dom';

const numbers = [1, 2, 3, 4, 5, 6, 7]

function NumberList(props) {
  const numbers = props.numbers;
  // const listItems = numbers.map((number) =>
  //   // key 用于帮助 react 识别哪些元素发生了改变。
  //   // 使用 index 作为 key 的坏处
  //   // https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
  //   <li key={number.toString()}>
  //     {number}
  //   </li>
  // );

  // return (
  //   <ul>{listItems}</ul>
  // );

  return (
    <ul>
      {numbers.map((number)=> <li key={number.toString()}>{number}</li>)}
    </ul>
  );
}


ReactDOM.render(
  <div>
    <NumberList numbers={numbers} />
  </div>,
  document.getElementById('root')
);


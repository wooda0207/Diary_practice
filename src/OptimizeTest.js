import React, { useState, useEffect } from "react";
// react.memo 수정하지않았으면 재리던링되지않게하기
// const TextView = React.memo(({ text }) => {
//   useEffect(() => {
//     console.log(`update :: Text : ${text}`);
//   });
//   return <div>{text}</div>;
// });

// const CountView = React.memo(({ count }) => {
//   useEffect(() => {
//     console.log(`update :: count : ${count}`);
//   });
//   return <div>{count}</div>;
// });

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA : ${count}`);
  });
  return <div>{count}</div>;
});

const CounterB = ({ obj }) => {
  useEffect(() => {
    console.log(`CounterB : ${obj.count}`);
  });
  return <div>{obj.count}</div>;
};

const areEqual = (preProps, nextProps) => {
  return preProps.obj.count === nextProps.obj.count;
  //   if (preProps.obj.count === nextProps.obj.count) {
  //     return true; // 이전 프롭스랑 현재 프롭스가 같다.
  //   }
  //   return false;
};

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {
  //   const [count, setCount] = useState(1);
  //   const [text, setText] = useState("");
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      {/* <div>
        <h2>count</h2>
        <CountView count={count} />
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <h2>text</h2>
        <TextView text={text} />
        <input value={text} onChange={(e) => setText(e.target.value)}></input>
      </div> */}
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button onClick={() => setObj({ count: obj.count })}>B button</button>
      </div>
    </div>
  );
};

export default OptimizeTest;

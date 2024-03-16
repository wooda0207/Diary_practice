import React, { useEffect, useState } from "react";

const UnmountTest = () => {
  useEffect(() => {
    console.log("Mount!");
    return () => {
      console.log("Unmount!");
    };
  }, []);
  return <div>UnmountTest Testing Component</div>;
};

const Lifecycle = () => {
  //   const [count, setCount] = useState(0);
  //   const [text, setText] = useState("");

  //   useEffect(() => {
  //     console.log("Mount!");
  //   }, []);

  //   useEffect(() => {
  //     console.log("Update!");
  //   });

  //   useEffect(() => {
  //     console.log(`count is update : ${count}`);
  //     if (count > 5) {
  //       alert("5 초과 => 1로 초기화");
  //       setCount(1);
  //     }
  //   }, [count]);

  //   useEffect(() => {
  //     console.log(`text is update : ${text}`);
  //   }, [text]);

  const [isVisible, setIsvisiable] = useState(false);
  const toggle = () => setIsvisiable(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnmountTest />}
      {/* <div>
        {count}
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
      <div>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>  */}
    </div>
  );
};

export default Lifecycle;

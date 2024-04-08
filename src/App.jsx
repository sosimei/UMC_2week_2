import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0); 

  const increase = () => {
    console.log("increase 가 클릭됨")
    setCount(count + 1);
  };

  const decrease = () => {
    console.log("decrease 가 클릭됨")
    setCount(count - 1);
  };

  return (
    <div className="App">
      <div className="counter-container">
        <h1>Counter</h1>
        <div className="counter-value">{count}</div>
        <button className="counter-btn" onClick={decrease}>-1</button>
        <button className="counter-btn" onClick={increase}>+1</button>
      </div>
    </div>
  );
}

export default App;

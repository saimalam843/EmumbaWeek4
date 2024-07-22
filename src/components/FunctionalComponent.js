
import React, { useState } from 'react';

function FunctionalComponent(props) {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h2>Functional Component</h2>
      <p>{props.message}</p>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default FunctionalComponent;

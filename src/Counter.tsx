import React, { useState } from "react";

export const Counter: React.FC = () => {
  const [count, setCount] = useState(0);
  const onClick = () => {
    console.log(`click #${count}`);
    setCount(count + 1);
  };
  return (
    <div>
      <p>You clicked {count} times.</p>
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

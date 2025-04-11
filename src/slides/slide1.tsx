import {useState} from 'react';

// Why this render?

export function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count => count + 1);
  }

  return (
    <div className="h-[500px] bg-blue-300/50 p-2">
      <h1>App.tsx</h1>
      <button className="button" onClick={handleClick}>
        Count: {count}
      </button>
    </div>
  );
}

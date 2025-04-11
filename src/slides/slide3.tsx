import {useState} from 'react';

// Pure components

export function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count => count + 1);
  }

  return (
    <div className="h-[500px] bg-blue-300/50 p-2">
      <div className="mb-4">
        <h1 className="font-bold">App.tsx</h1>
        <button className="button" onClick={handleClick}>
          Count: {count}
        </button>
      </div>
      <Widget />
    </div>
  );
}

function Widget() {
  return (
    <div className="h-[200px] w-[200px] bg-green-300/50 p-2">
      <h1 className="font-bold mb-4">Widget.tsx</h1>
    </div>
  );
}

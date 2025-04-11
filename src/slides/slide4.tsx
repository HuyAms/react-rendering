import {useState} from 'react';
import {artificialDelay} from '../utils';

// Slow re-renders

// hint: const widgetComponent = <Widget />;

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
      {/* This got created everytime, that why it re-renders */}
      {/* Hint: can we move the component out so it's created once */}
      <Widget />
    </div>
  );
}

// The problem is not about re-rendering
// but some components are slow to render
// we would like to optimize them
function Widget() {
  // slow!
  artificialDelay(300);

  return (
    <div className="h-[200px] w-[200px] bg-red-300/50 p-2">
      <h1 className="font-bold mb-4">💣 Widget.tsx</h1>
    </div>
  );
}

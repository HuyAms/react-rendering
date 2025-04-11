import {useState} from 'react';
import {artificialDelay, getRandomBroker} from '../utils';

export function App() {
  const [broker, setBroker] = useState('Broker 1');

  // 💣 update this state causes unnecessary re-renders
  // of the Widget
  const [count, setCount] = useState(0);

  function handleClick() {
    setBroker(getRandomBroker());
  }

  return (
    <div className="h-[500px] bg-blue-300/50 p-2">
      <div className="mb-4">
        <h1 className="font-bold">App.tsx</h1>
        <button className="button" onClick={handleClick}>
          Change: {broker}
        </button>
        <button className="button" onClick={() => setCount(count => count + 1)}>
          Count: {count}
        </button>
      </div>
      <Layout widget={<Widget broker={broker} />} />
    </div>
  );
}

function Layout({widget}: {widget: React.ReactNode}) {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count => count + 1);
  }

  return (
    <div className="h-[350px] bg-gray-700/50 p-2">
      <h1 className="font-bold mb-4">Layout.tsx</h1>
      <button className="button" onClick={handleClick}>
        Count: {count}
      </button>
      {widget}
    </div>
  );
}

function Widget({broker}: {broker: string}) {
  // delay
  artificialDelay(300);

  return (
    <div className="h-[200px] w-[200px] bg-red-300/50 p-2">
      <h1 className="font-bold mb-4">💣 Widget.tsx</h1>
      <p>{broker}</p>
    </div>
  );
}

// Hint: useMemo

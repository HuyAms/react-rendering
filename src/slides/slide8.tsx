import React, {useState} from 'react';
import {artificialDelay, getRandomBroker} from '../utils';

// 🔁 Props drilling
// Context API Intro

export function App() {
  // ✋ we need to pass this down to the Widgets (props drilling)
  // Can we solve it with Context API?
  const [broker, setBroker] = useState('Broker 1');

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
      <Layout broker={broker} />
    </div>
  );
}

function Layout({broker}: {broker: string}) {
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
      <div className="flex gap-2">
        <Widget broker={broker} />
        <WidgetNoBroker />
        <WidgetNoBroker />
      </div>
    </div>
  );
}

type Props = {
  broker: string;
};

const Widget = React.memo(function Widget({broker}: Props) {
  // delay
  artificialDelay(300);

  return (
    <div className="h-[200px] w-[200px] bg-red-300/50 p-2">
      <h1 className="font-bold mb-4">💣 Widget.tsx</h1>
      <p>{broker}</p>
    </div>
  );
});

function WidgetNoBroker() {
  console.log('render WidgetNoBroker');
  return (
    <div className="h-[200px] w-[200px] bg-green-300/50 p-2">
      <h1 className="font-bold mb-4">Widget.tsx</h1>
    </div>
  );
}

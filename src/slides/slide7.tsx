import React, {useState} from 'react';
import {artificialDelay, getRandomBroker} from '../utils';

// Problem with React.memo
// props as array, object, function

// useCallback, useMemo

export function App() {
  const [broker, setBroker] = useState('Broker 1');

  const [count, setCount] = useState(0);

  // 💣 pass this object to the Widget
  const user = {
    name: 'Huy',
  };

  // 💣 pass this function to the Widget
  const doNothing = () => {
    console.log('do nothing');
  };

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
      {/* 💣 Try to pass the doNothing to the Widget */}
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

type Props = {
  broker: string;
  // 💣 someone come and pass those object, function props
  // does the React.memo still work?
  user?: {name: string};
  doNothing?: () => void;
};

const Widget = React.memo(function Widget({broker, user, doNothing}: Props) {
  // delay for 500ms
  artificialDelay(300);

  return (
    <div className="h-[200px] w-[200px] bg-red-300/50 p-2">
      <h1 className="font-bold mb-4">💣 Widget.tsx</h1>
      <p>{broker}</p>
      <p>User: {user?.name}</p>
    </div>
  );
});

import {useState} from 'react';
import {artificialDelay, getRandomBroker} from '../utils';

// 🔁 More complex layout

export function App() {
  const [broker, setBroker] = useState('Broker 1');

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
      </div>
      <Layout broker={broker} />
    </div>
  );
}

function Layout({broker}: {broker: string}) {
  const [count, setCount] = useState(0);

  // Widget doesn't consume the count
  // whenever count changes, the Widget will re-render
  // why? could we optimize it?
  function handleClick() {
    setCount(count => count + 1);
  }

  return (
    <div className="h-[350px] bg-gray-700/50 p-2">
      <h1 className="font-bold mb-4">Layout.tsx</h1>
      <button className="button" onClick={handleClick}>
        Count: {count}
      </button>
      <Widget broker={broker} />
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

// hint: could we move the component up (from Layout to App)
{
  /* <Layout widget={<Widget broker={broker} />} /> */
}

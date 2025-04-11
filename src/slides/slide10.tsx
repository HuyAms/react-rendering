import {useState} from 'react';
import {artificialDelay, getRandomBroker} from '../utils';
import {BrokerContext, useBrokerContext} from '../hooks/brokerContext';

// 🔁 Optimize React Context - Memorize the value

function BrokerProvider({children}: {children: React.ReactNode}) {
  const [broker, setBroker] = useState('Broker 1');
  const [count, setCount] = useState(0);

  const value = {broker, setBroker};

  return (
    <BrokerContext.Provider value={value}>
      <button className="button" onClick={() => setCount(count => count + 1)}>
        Count: {count}
      </button>
      {children}
    </BrokerContext.Provider>
  );
}

function UpdateBrokerButton() {
  const {broker, setBroker} = useBrokerContext();

  return (
    <button className="button" onClick={() => setBroker(getRandomBroker())}>
      Change: {broker}
    </button>
  );
}

export function App() {
  const [count, setCount] = useState(0);

  return (
    <BrokerProvider>
      <div className="h-[500px] bg-blue-300/50 p-2">
        <div className="mb-4">
          <h1 className="font-bold">App.tsx</h1>
          <UpdateBrokerButton />
          <button className="button" onClick={() => setCount(count => count + 1)}>
            Count: {count}
          </button>
        </div>
        <Layout />
      </div>
    </BrokerProvider>
  );
}

function Layout() {
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
        <Widget />
        <WidgetNoBroker />
        <WidgetNoBroker />
      </div>
    </div>
  );
}

function Widget() {
  // delay
  artificialDelay(300);

  const {broker} = useBrokerContext();

  return (
    <div className="h-[200px] w-[200px] bg-red-300/50 p-2">
      <h1 className="font-bold mb-4">💣 Widget.tsx</h1>
      <p>{broker}</p>
    </div>
  );
}

function WidgetNoBroker() {
  return (
    <div className="h-[200px] w-[200px] bg-green-300/50 p-2">
      <h1 className="font-bold mb-4">Widget.tsx</h1>
    </div>
  );
}

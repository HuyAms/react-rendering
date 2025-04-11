import React from 'react';

type BrokerContextType = {
  broker: string;
  setBroker: (broker: string) => void;
};

export const BrokerContext = React.createContext<BrokerContextType | null>(null);

export function useBrokerContext() {
  const context = React.useContext(BrokerContext);

  if (!context) {
    throw new Error('useBroker must be used within a BrokerProvider');
  }

  return context;
}

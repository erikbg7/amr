import React from 'react';
import { AyobaContext, AyobaContextType } from './ayoba';

const throwNoContextError = () => {
  throw new Error('useAyobaPayment should be placed inside a AyobaProvider');
};

const useAyobaPayment = () => {
  const context = React.useContext<AyobaContextType>(AyobaContext);
  return context || throwNoContextError();
};

export { useAyobaPayment };

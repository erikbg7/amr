import React from 'react';
import { AyobaContext, AyobaContextType } from './ayoba';

const throwNoContextError = () => {
  throw new Error('useAyobaPayment should be placed inside a AyobaProvider');
};

const useAyoba = () => {
  const context = React.useContext<AyobaContextType>(AyobaContext);
  return context || throwNoContextError();
};

export { useAyoba };

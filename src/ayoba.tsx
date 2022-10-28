import React from 'react';
import { onPaymentStatusChanged, onPermissionsAccepted } from './listeners';
import { getAyobaContext } from './url';
import { getAyobaSenders } from './senders';
import * as ayobaStubbedApi from './stub';
import { getAyoba } from './init';
import { AyobaChatContext, AyobaDiscoveryContext } from './types.ayoba';

window.onPermissionsAccepted = onPermissionsAccepted;
window.onPaymentStatusChanged = onPaymentStatusChanged;
window.onload = () => console.log('load');

type Props = { children: React.ReactNode };
type AyobaContextType = AyobaChatContext | AyobaDiscoveryContext | {};

const AyobaContext = React.createContext<AyobaContextType>({});

const AyobaProvider: React.FC<Props> = ({ children }) => {
  const context = getAyobaContext();
  const ayobaWindowApi = getAyoba();

  const ayobaApi = ayobaWindowApi || ayobaStubbedApi;

  console.log('List of methods available:');
  console.log({ context });
  console.log(
    ayobaWindowApi
      ? 'We are in Ayoba context, using real API...'
      : 'We are not in Ayoba context, using stubbed API...'
  );
  Object.getOwnPropertyNames(ayobaApi).forEach((value) => {
    console.log(value);
  });

  // if (!ayobaApi) {
  // throw new Error('Ayoba API not found');
  // }

  const methods = getAyobaSenders(ayobaApi);

  return <AyobaContext.Provider value={{ ...methods }}>{children}</AyobaContext.Provider>;
};

export type { AyobaContextType };
export { AyobaProvider, AyobaContext };

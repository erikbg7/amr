import React from 'react';
import { getAyobaContext } from '../utils/url';
import { getAyobaSenders } from '../senders';
import * as ayobaStubbedApi from '../stub';
import { getAyoba } from '../init';
import { AyobaChatContext, AyobaDiscoveryContext } from '../types.ayoba';
import {
  onAvatarChanged,
  onNicknameChanged,
  onPaymentStatusChanged,
  onPermissionsAccepted,
  onProfileChanged,
} from '../listeners';

window.onPermissionsAccepted = onPermissionsAccepted;
window.onPaymentStatusChanged = onPaymentStatusChanged;
window.onNicknameChanged = onNicknameChanged;
window.onAvatarChanged = onAvatarChanged;
window.onProfileChanged = onProfileChanged;
window.onload = () => console.log('load');

// TODO: this provider should wrap the entire app in order to attach the correct window listeners,
//  so we can save the information if the listers are triggered as soon as the app is loaded.
//  We should remove the context and use the provider only to do so.

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

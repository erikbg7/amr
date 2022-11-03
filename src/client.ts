import { getAyobaContext } from './utils/url';
import { getAyoba } from './init';
import { getAyobaSenders } from './senders';
import * as ayobaStubbedApi from './stub';
import { AyobaDiscoveryContext } from './types.ayoba';

let ayobaMethods: any = null;

const getAyobaMethodsInstance = (): AyobaDiscoveryContext => {
  if (ayobaMethods) return ayobaMethods;

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

  ayobaMethods = getAyobaSenders(ayobaApi);

  return ayobaMethods;
};

export { getAyobaMethodsInstance };

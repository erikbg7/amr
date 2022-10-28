import type { AyobaChatContext, AyobaDiscoveryContext } from './types.ayoba';

type GetAyobaSenders = (ayobaApi: any) => AyobaChatContext | AyobaDiscoveryContext;

const getAyobaSenders: GetAyobaSenders = (ayobaApi) => {
  return {
    composeMessage: ayobaApi.composeMessage,
    finish: ayobaApi.finish,
    getCountry: ayobaApi.getCountry,
    getMsisdn: ayobaApi.getMsisdn,
    getSelfJid: ayobaApi.getSelfJid,
    getFile: ayobaApi.getFile,
    getLastTextMessages: ayobaApi.getLastTextMessages,
    getContacts: ayobaApi.getContacts,
    getCanSendMessage: ayobaApi.getCanSendMessage,
    getLanguage: ayobaApi.getLanguage,
    sendGenericEvent: ayobaApi.sendGenericEvent,
    sendMessage: ayobaApi.sendMessage,
    sendMedia: ayobaApi.sendMedia,
    sendLocation: ayobaApi.sendLocation,
    startPayment: ayobaApi.startPayment,
    startConversation: ayobaApi.startConversation,
    takePicture: ayobaApi.takePicture,
  };
};

export { getAyobaSenders };
export type { GetAyobaSenders };

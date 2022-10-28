const getURLParameter = (param: string) => {
  try {
    const searchParameters = window.location.search.substring(1);
    const parametersList = searchParameters.split('&');

    console.log({ parametersList });

    const parameter = parametersList.find((p) => p.split('=')[0] === param);
    const value = parameter?.split('=')?.[1];
    return value || '';
  } catch (e) {
    const url = window.location.search;
    throw new Error(`[Ayoba Error]: Couldn't get URL parameter ${param} from ${url}`);
  }
};

type AyobaContext = 'chat' | 'discovery';
type AyobaIsDebug = 'true' | 'false';

const getSelfJidFromUrl = (): string => getURLParameter('jid');
const getContactJid = (): string => getURLParameter('contactjid');
const getContactName = (): string => getURLParameter('contactname');
const getAyobaContext = (): AyobaContext => getURLParameter('context') as AyobaContext;
const getIsDebugApp = (): AyobaIsDebug => getURLParameter('debug') as unknown as AyobaIsDebug;

export {
  getAyobaContext,
  getContactJid,
  getContactName,
  getIsDebugApp,
  getSelfJidFromUrl,
  getURLParameter,
};

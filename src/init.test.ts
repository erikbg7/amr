import { getAyoba } from './init';

const androidInstance = { startPayment: () => {} };

function setNavigatorUserAgent(ua: string) {
  Object.defineProperty(navigator, 'userAgent', { value: ua, writable: true });
}
function setWindowAyobaAndroid() {
  Object.defineProperty(window, 'Android', { value: androidInstance });
}

describe('Ayoba initialization', () => {
  describe('by default', () => {
    it('should return an undefined instance of Ayoba', () => {
      expect(getAyoba()).toBeUndefined();
    });
  });

  describe('when useragent belongs to Windows desktop browser', () => {
    it('should return an undefined instance of Ayoba', () => {
      setNavigatorUserAgent('windows phone');
      expect(getAyoba()).toBeUndefined();
    });
  });

  describe('when useragent belongs to an iOS device', () => {
    it('should return an undefined instance of Ayoba', () => {
      setNavigatorUserAgent('iphone');
      expect(getAyoba()).toBeUndefined();

      setNavigatorUserAgent('ipad');
      expect(getAyoba()).toBeUndefined();

      setNavigatorUserAgent('ipod');
      expect(getAyoba()).toBeUndefined();
    });
  });

  describe('when useragent belongs to an Android device', () => {
    it('should return the Android window object', () => {
      setWindowAyobaAndroid();
      setNavigatorUserAgent('android');
      expect(getAyoba()).toBe(androidInstance);
    });
  });
});

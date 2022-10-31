import {
  getAyobaContext,
  getContactJid,
  getContactName,
  getIsDebugApp,
  getSelfJidFromUrl,
} from './url';

function setWindowLocation(url: string) {
  Object.defineProperty(window, 'location', { value: new URL(url) });
  window.location.href = url;
}

describe('URL utils', () => {
  describe('getSelfJidFromUrl method', () => {
    it('should return jid param from url', () => {
      setWindowLocation('https://ayoba.com/?jid=123');
      expect(getSelfJidFromUrl()).toEqual('123');
    });
  });

  describe('getContactJid method', () => {
    it('should return contactjid param from url', () => {
      setWindowLocation('https://ayoba.com/?contactjid=456');
      expect(getContactJid()).toEqual('456');
    });
  });

  describe('getContactName method', () => {
    it('should return contactname param from url', () => {
      setWindowLocation('https://ayoba.com/?contactname=John');
      expect(getContactName()).toEqual('John');
    });
  });

  describe('getAyobaContext method', () => {
    it('should return context param from url', () => {
      setWindowLocation('https://ayoba.com/?context=chat');
      expect(getAyobaContext()).toEqual('chat');
    });
  });

  describe('getIsDebugApp method', () => {
    it('should return debug param from url', () => {
      setWindowLocation('https://ayoba.com/?debug=true');
      expect(getIsDebugApp()).toEqual(true);
    });
  });
});

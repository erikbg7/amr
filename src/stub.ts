import {
  onLocationChanged,
  onLocationSentResponse,
  onMediaSentResponse,
  onPresenceChanged,
  onProfileChanged,
} from './listeners';

function finish() {
  return 'This api call will close the ayoba microApp';
}

function sendMessage() {
  return 'message has been send..!';
}

function composeMessage() {
  return 'This Api will open the chat';
}

function sendMedia() {
  return 'https://i.ytimg.com/vi/d5PP4vIX7P8/maxresdefault.jpg , image/jpg';
}

function sendLocation() {
  return 'Latitude: -26.185357775567436' + ' ' + 'Longitude: 28.019023561909993';
}

function getCountry() {
  var country = 'ZA';
  return country;
}

function getContacts() {
  var jsonContacts = '27833241313';
  return jsonContacts;
}

function getMsisdn() {
  var msisdn = '27833241313';
  return msisdn;
}

function getCanSendMessage() {
  var canSendMessage = '1';
  return canSendMessage;
}

function getLanguage() {
  var language = 'en';
  return language;
}

function getSelfJid() {
  var selfJid = '65c3kdflfc5c7c3hb30lc7615beda57031p2d2df@dev.ayoba.me';
  return selfJid;
}

function startPayment(method: string, amount: number, currency: string, description: string) {
  console.log('Payment Started', { method, amount, currency, description });
}

function triggerLocationChanged() {
  onLocationChanged(-26.185357775567436, 28.019023561909993);
}

function triggerProfileChanged() {
  onProfileChanged('test name', 'https://i.ytimg.com/vi/d5PP4vIX7P8/maxresdefault.jpg');
}

function triggerPresenceChanged() {
  onPresenceChanged('test presence');
}

function triggerMediaSentResponse() {
  onMediaSentResponse(1, '');
}

function triggerLocationSentResponse() {
  onLocationSentResponse(1);
}

function triggerNicknameChanged() {
  // onNicknameChanged('test nickname');
}

export {
  finish,
  sendLocation,
  sendMessage,
  sendMedia,
  getCanSendMessage,
  composeMessage,
  getCountry,
  getContacts,
  getLanguage,
  getMsisdn,
  startPayment,
  triggerLocationChanged,
  triggerNicknameChanged,
  triggerProfileChanged,
  triggerPresenceChanged,
  triggerLocationSentResponse,
  triggerMediaSentResponse,
};

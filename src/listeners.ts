function dispatchCustomEvent(eventName: string, payload: any) {
  const event = new CustomEvent(eventName, { detail: payload });
  document.dispatchEvent(event);
}

// Ayoba Events

const onPermissionsAccepted: Window['onPermissionsAccepted'] = (paymentMethods) => {
  dispatchCustomEvent('onPermissionsAccepted', { paymentMethods });
};

const onPaymentStatusChanged: Window['onPaymentStatusChanged'] = (transactionId, status, error) => {
  console.log('jhjkhjhjkhjhk', { transactionId, status, error });
  dispatchCustomEvent('onPaymentStatusChanged', { transactionId, status, error });
};

/**
 * The Ayoba native interface calls this method every time
 * the app receives a new location event.
 *
 * Remember this listener will only be called when the native
 * permission is accepted by the user.
 *
 * In some border cases, also can receive lat=0.0, lon=0.0. Most of
 * the cases, will mean Ayoba cannot retrieve the GPS coordinates.
 */
function onLocationChanged(lat: number, lon: number) {
  dispatchCustomEvent('onLocationChanged', { lat, lon });
}

/**
 * The Ayoba native interface calls this method every time
 * the user profile changes (nickname or avatar)
 */
function onProfileChanged(nickname: string, avatarPath: string) {
  dispatchCustomEvent('onProfileChanged', { nickname, avatarPath });
}

/**
 * The Ayoba native interface calls this method every time
 * the user presence changes (infact, always online)
 */
function onPresenceChanged(presence: string) {
  dispatchCustomEvent('onPresenceChanged', { presence });
}

/**
 * The Ayoba native interface calls this method every time
 * the user avatar changes (infact, always online)
 */
function onAvatarChanged(avatar: string) {
  dispatchCustomEvent('onAvatarChanged', { avatar });
}

/**
 * This method should be implemented to retrieve the "sendMedia(...)" result
 *
 * @param {int} responseCode: result code
 *  0: the location could not be sent
 *  1: the location has been sent successfully
 * @param encodedUrl: Base64 encoded media file’s url
 */
function onMediaSentResponse(responseCode: number, encodedUrl: string) {
  dispatchCustomEvent('onMediaSentResponse', { responseCode, encodedUrl });
}

/**
 * This method should be implemented to retrieve the "sendLocation(...)" result
 *
 * @param {int} responseCode: result code
 *  0: the location could not be sent
 *  1: the location has been sent successfully
 */
function onLocationSentResponse(responseCode: number) {
  dispatchCustomEvent('onLocationSentResponse', { responseCode });
}

/**
 * This method should be implemented to retrieve the "sendFileRetrievedResponse(...)" result
 *
 * @param {int} responseCode: result code
 *  -1: the file could not be retrieved
 *  1: the file has retrieved successfully
 * @param {String} filePath: user selected files paths array
 */
function onFileRetrievedResponse(responseCode: number, filePath: string) {
  dispatchCustomEvent('onFileRetrievedResponse', { responseCode, filePath });
}

/**
 * This method should be implemented to retrieve the "sendPicture(...)" result
 *
 * @param {int} responseCode: result code
 *  0: the picture could not be taken
 *  1: the picture has been taken successfully
 */
function onPictureRetrievedResponse(responseCode: number, picturePath: string) {
  dispatchCustomEvent('onPictureRetrievedResponse', { responseCode, picturePath });
}

/**
 * The Ayoba native interface calls this method every time
 * the user nickname changes (infact, always online)
 */
function onNicknameChanged(nickname: string) {
  dispatchCustomEvent('onNicknameChanged', { nickname });
}

export {
  onAvatarChanged,
  onLocationChanged,
  onLocationSentResponse,
  onMediaSentResponse,
  onNicknameChanged,
  onPaymentStatusChanged,
  onPermissionsAccepted,
  onPresenceChanged,
  onProfileChanged,
};

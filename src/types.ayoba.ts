type Contact = { msisdn: string };

type AyobaApiBridge = {
  /**
   * [Chat Context]
   * Puts a text on the compose bar of the chat screen without sending the message.
   * No permission required to do so.
   *
   * @param {string} message: any text to be put on the compose bar
   */
  composeMessage(message: string): void;

  /**
   * Sends an event to close the microapp.
   * No permission required to do so.
   */
  finish(): void;

  /**
   * Gets the user country code in ISO-3166.
   * Permissions: Country
   *
   * @returns {string}: user’s ISO-3166 country code. Example: AF
   */
  getCountry(): string;

  /**
   * Gets the user MSISDN
   * Permissions: MSISDN
   *
   * @returns {string}: the user’s MSISDN. Example: +93777777778
   */
  getMsisdn(): string;

  /**
   * Description
   */
  getSelfJid(): string;

  /**
   * Allows the user to choose a file from the device filesystem and retrieves it.
   *
   * Permissions: FILEACCESS
   *
   * @returns {number}: response code of accessing the device filesystem
   *  1: the filesystem could be accessed successfully
   * -1: the filesystem could not be accessed
   *
   * The onFileRetrievedResponse method must be implemented to retrieve the file, once saved to the app internal storage
   */
  getFile(): number;

  /**
   * Gets the Ayoba contacts of the user.
   * Only the user’s contacts that are registered in Ayoba are returned.
   * SMS contacts are excluded (contacts that aren’t registered in Ayoba)
   *
   * Permissions: Contacts
   *
   * @returns {string}: The function returns the contact list as a string following the json structure below
   *  {
   *    "jid":"366b9b3c@dev.ayoba.me",
   *    "name":"contactName1",
   *    "phoneNumber":"+34644551123",
   *    "isAyobaUser": true
   *  }
   *
   */
  getContacts(): Contact[];

  /**
   * Gets if the user has accepted the permission to send a message.
   * No permission required to do so.
   *
   * @returns {boolean}: true if the user has accepted the permission to send a message, false otherwise
   */
  getCanSendMessage(): boolean;

  /**
   * Gets if the user has accepted the permission to send a message.
   *
   * Permissions: Conversation
   *
   * @returns {string}: The function returns the last 50 messages in Json structure if user has accepted the permission "Conversation"; if not, returns "[]"
   *
   *    {
   *       "body":"Bien",
   *       "direction":0,
   *       "peer":"924c32feac209dec336c24ced45fd9cb69a0d1dd@dev.ayoba.me",
   *       "timestamp":1627657586711
   *    }
   *
   * where:
   *  body: text message
   *  direction: 1 for sent, 0 for received
   *  peer: JID of the group in a group conversation, JID of the other contact (always) in a P2P conversation
   *  timestamps: timestamp of the time the massage has been sent
   */
  getLastTextMessages(): string;

  /**
   * Gets the user language code in ISO-639-1.
   * Permissions: UserLanguage
   *
   * @returns {string}: the user’s ISO-639-1 language code. Example: en
   */
  getLanguage(): string;

  /**
   * Send a generic event to Firebase Analytics.
   *
   * No permission required to do so.
   *
   * @param {number} eventNumber: Number of the event, possible values are: 0: genericEvent1 1: genericEvent2 2: genericEvent3 3: genericEvent4
   */
  sendGenericEvent(eventNumber: number): void;

  /**
   * Sends a chat message directly without putting the text on the compose bar of the chat screen.
   *
   * Permissions: SendMessage
   *
   * @param {string} message: the message to be sent
   */
  sendMessage(message: string): void;

  /**
   * Sends a media chat message (image, video, audio, file or contact).
   *
   * Image: image/jpg, image/jpeg, image/png, image/gif
   * Video: video/mp4
   * Audio: audio/3gpp, audio/ogg, audio/mpeg, audio/mp4, audio/wav, audio/aac, audio/flac
   * File: application/pdf, application/msword
   * Contact: text/x-vcard, text/vcard
   *
   * onMediaSentResponse method must be implemented to retrieve the call response.
   *
   * @param {string} url: the url of the file to be sent
   * @param {string} mimeType: the mime type of the file to be sent
   */
  sendMedia(url: string, mimeType: string): void;

  /**
   * Sends a location chat message.
   * No permission required to do so.
   *
   * Valid values are decimal numbers with comma or point and integer numbers.
   * Examples: 41.4203 or 41,4203 or 41
   *
   * onLocationSentResponse method must be implemented to retrieve the call response.
   *
   * @param {string} lat: latitude of the location
   * @param {string} lon: longitude of the location
   */
  sendLocation(lat: number, lon: number): void;

  /**
   * Starts a new payment attempt from the native app
   *
   * @param {string} method: payment method (e.g. "MoMo")
   * @param {number} amount: amount of the transaction
   * @param {string} currency: currency of the transaction (e.g. "XAF")
   * @param {string} description: transaction description (optional)
   */
  startPayment(method: string, amount: number, currency: string, description: string): void;

  /**
   * Opens a chat conversation with a user using the user’s JID.
   *
   * No permission required to do so.
   *
   * @param {string} jid: JID of the user with whom we want to start a conversation
   */
  startConversation(jid: string): void;

  /**
   * Takes a picture with the phone’s camera.
   * Permissions: TAKEPHOTO
   *
   * Gets the response code and path of the picture taken.
   * The microapp must implement onPictureRetrievedResponse method to retrieve the picture taken's path.
   * When data is updated from Ayoba, then Ayoba calls this javascript method on microapp to pass the new data
   *
   * @returns {number} responseCode: result of opening the camera (1: success, -1: failure
   * @returns {string}: picture’s path
   */
  takePicture(): number;
};

type AyobaChatContext = Pick<
  AyobaApiBridge,
  | 'finish'
  | 'composeMessage'
  | 'getCountry'
  | 'getFile'
  | 'getLastTextMessages'
  | 'getLanguage'
  | 'getMsisdn'
  | 'getCanSendMessage'
  | 'sendGenericEvent'
  | 'sendLocation'
  | 'sendMedia'
  | 'sendMessage'
  | 'takePicture'
  | 'getContacts'
>;

type AyobaDiscoveryContext = Pick<
  AyobaApiBridge,
  | 'finish'
  | 'getCountry'
  | 'getFile'
  | 'getLanguage'
  | 'getMsisdn'
  | 'takePicture'
  | 'sendGenericEvent'
  | 'getContacts'
  | 'startConversation'
  | 'startPayment'
>;

export type { AyobaDiscoveryContext, AyobaChatContext, AyobaApiBridge, Contact };

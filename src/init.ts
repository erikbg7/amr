/**
 * Checks if the microapp is running inside ayoba and on which OS
 * returns the OS name or null if not running inside ayoba
 */
function getAyoba() {
  // @ts-ignore
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;
  const isWindowsDevice = /windows phone/i.test(userAgent);
  const isIosDevice = /iphone|ipad|ipod/i.test(userAgent);
  const isAndroidDevice = /android/i.test(userAgent);

  // Must come first because the UA also contains "Android"
  if (isWindowsDevice) return;
  // @ts-ignore
  if (isIosDevice && !window.MSStream) return;
  // @ts-ignore
  if (isAndroidDevice) return window.Android;
}

export { getAyoba };

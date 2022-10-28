type PaymentStatus = 'Pending' | 'Success' | 'Failure' | 'Unknown';

type PaymentError = { title: string; description: string };

type PaymentErrorId =
  | 'InvalidMicroAppMsidsn'
  | 'InvalidCurrency'
  | 'InvalidPaymentMethod'
  | 'MicroAppUserNotMomoEnabledException'
  | 'MicroAppPendingPaymentException';

const PAYMENT_STATUS: Record<string, PaymentStatus> = {
  PENDING: 'Pending',
  SUCCESS: 'Success',
  FAILURE: 'Failure',
  UNKNOWN: 'Unknown',
};

const PAYMENT_ERROR_ID: Record<string, PaymentErrorId> = {
  INVALID_MICRO_APP_MSISDN: 'InvalidMicroAppMsidsn',
  INVALID_CURRENCY: 'InvalidCurrency',
  INVALID_PAYMENT_METHOD: 'InvalidPaymentMethod',
  MICRO_APP_USER_NOT_MOMO_ENABLED_EXCEPTION: 'MicroAppUserNotMomoEnabledException',
  MICRO_APP_PENDING_PAYMENT_EXCEPTION: 'MicroAppPendingPaymentException',
};

export { PAYMENT_STATUS, PAYMENT_ERROR_ID };
export type { PaymentStatus, PaymentError, PaymentErrorId };

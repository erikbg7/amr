import { PaymentErrorId, PaymentStatus } from './types.payments';

export {};

declare global {
  interface Window {
    onPermissionsAccepted: (paymentMethods: string[]) => void;
    onPaymentStatusChanged: (
      transactionId?: string,
      status?: PaymentStatus,
      error?: PaymentErrorId
    ) => void;
  }
}

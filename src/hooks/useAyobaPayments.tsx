import { useEffect, useState } from 'react';
import { getAyobaMethodsInstance } from '../client';
import { AyobaDiscoveryContext } from '../types.ayoba';
import { PAYMENT_STATUS, PaymentErrorId, PaymentStatus } from '../types.payments';

type PaymentStatusUpdate = {
  error?: PaymentErrorId;
  status: PaymentStatus;
  transactionId?: string;
};
type PaymentEventListener = (evt: CustomEvent<PaymentStatusUpdate>) => void;
type StartPaymentHandler = Pick<AyobaDiscoveryContext, 'startPayment'>;
type PaymentHookReturnType = StartPaymentHandler &
  Partial<PaymentStatusUpdate> & { cleanUp: () => void };

const useAyobaPayments = (): PaymentHookReturnType => {
  const ayobaClient = getAyobaMethodsInstance();
  const [paymentResult, setPaymentResult] = useState<PaymentStatusUpdate>();

  const handlePaymentStart: StartPaymentHandler['startPayment'] = (...args) => {
    ayobaClient.startPayment(...args);
    window?.onPaymentStatusChanged?.('', PAYMENT_STATUS.PENDING);
  };

  useEffect(() => {
    const handleStatusUpdate: PaymentEventListener = (evt) => setPaymentResult(evt.detail);
    document.addEventListener('onPaymentStatusChanged', handleStatusUpdate as EventListener);
    return () => {
      document.removeEventListener('onPaymentStatusChanged', handleStatusUpdate as EventListener);
    };
  }, []);

  return {
    startPayment: handlePaymentStart,
    error: paymentResult?.error,
    status: paymentResult?.status,
    transactionId: paymentResult?.transactionId,
    cleanUp: () => setPaymentResult(undefined),
  };
};

export { useAyobaPayments };
export type { PaymentStatusUpdate };

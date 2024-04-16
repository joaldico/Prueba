import { paymentService } from './index';

export { paymentService } from './index';

describe('UnitTest.PaymentService', () => {
  test('test example', async () => {
    const tokenWs = 'thiisthetoken';
    const res = await paymentService.searchTransactionByToken({ tokenWs });
  });
});

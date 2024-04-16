import * as React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import { SuccessPaymentTemplate } from './';
const mockProps = {
  requestNro: '123',
  customerName: 'Alejandro Velazco',
  dataPayment: [],
};
describe('[UnitTest.SuccessPayment', () => {
  test('Render content', () => {
    const component = render(
      <SuccessPaymentTemplate
        requestNro={mockProps.requestNro}
        customerName={mockProps.customerName}
        dataPayment={mockProps.dataPayment}
      />
    );
    expect(component.container).toHaveTextContent(mockProps.customerName);
  });
});

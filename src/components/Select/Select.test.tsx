import '@testing-library/jest-dom/extend-expect';

import { render } from '@testing-library/react';
import Select from './index';
import { ThemeProviderTest } from '../../utilTest/test';

describe('Select Snapshot ', () => {
  it('Snapshot Select default', () => {
    const props = {
      id: 'select_id',
      label: 'label',
      value: '1',
      onChange: () => {},
      data: [{ label: 'data 1', value: '1' }],
      fullWidth: true,
      placeholder: 'placeholder',
    };

    const { asFragment } = render(
      <ThemeProviderTest>
        <Select {...props} />
      </ThemeProviderTest>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

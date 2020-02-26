import React from 'react';
import { render } from '@testing-library/react';
import { LoginPage } from './LoginPage';

describe('LoginPage', () => {
  it('should render the login header', () => {
    const { getByText } = render(<LoginPage />);

    expect(getByText('Hello Login!')).not.toBeNull();
  });
});

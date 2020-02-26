import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './';

describe('Header', () => {
  it('should render Home and Login links', () => {
    const { getByText } = render(<Header />);

    expect(getByText('Home Link')).not.toBeNull();
    expect(getByText('Login Link')).not.toBeNull();
  });
});

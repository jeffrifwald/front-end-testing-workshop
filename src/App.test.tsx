import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('should render Home and Login links', () => {
    const { getByText } = render(<App />);

    expect(getByText('Home Link')).not.toBeNull();
    expect(getByText('Login Link')).not.toBeNull();
  });
});

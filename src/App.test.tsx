import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  jest.useFakeTimers('modern');
  jest.setSystemTime(new Date('04 Dec 1995 01:01:01 GMT').getTime());

  afterAll(() => {
    jest.clearAllTimers();
  });

  it('renders the correct time', () => {
    render(<App />);
    expect(screen.getByText(/17:01:01/i)).toBeDefined();
  });
});

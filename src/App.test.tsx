import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  afterAll(() => {
    jest.clearAllTimers();
  });

  it('render the current time', () => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date('04 Dec 1995 01:01:01 GMT').getTime());
    render(<App />);
    expect(screen.getByText(/17:01:01/i)).toBeDefined();
  });

  it('should increment seconds by three when 3000 milliseconds pass', () => {
    render(<App />);
    jest.useFakeTimers();
    jest.setSystemTime(new Date('04 Dec 1995 01:01:01 GMT').getTime());

    act(() => {
      jest.advanceTimersByTime(3000);
    });

    expect(screen.getByText(/17:01:04/i)).toBeDefined();
  });

  it('should increment minutes by one when 60000 milliseconds pass', () => {
    render(<App />);
    jest.useFakeTimers();
    jest.setSystemTime(new Date('04 Dec 1995 01:01:01 GMT').getTime());

    act(() => {
      jest.advanceTimersByTime(60000);
    });

    expect(screen.getByText(/17:02:01/i)).toBeDefined();
  });

  it('should increment hours by one when 3600000 milliseconds pass', () => {
    render(<App />);
    jest.useFakeTimers();
    jest.setSystemTime(new Date('04 Dec 1995 01:01:01 GMT').getTime());

    act(() => {
      jest.advanceTimersByTime(3600000);
    });

    expect(screen.getByText(/18:01:01/i)).toBeDefined();
  });
});

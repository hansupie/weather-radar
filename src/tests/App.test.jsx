import { describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App', () => {
  it('renders App', () => {
    render(<App />);
    screen.debug();
  });
});
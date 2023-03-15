import { beforeEach, describe, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { CityWeather } from '../components/CityWeather';

beforeEach(() => {
  render(<CityWeather city="tampere"/>);
});

describe('CityWeather', () => {
  it('renders two loading spinners for one city', () => {
    const spinners = screen.getAllByTestId("spinner")
    expect(spinners.length === 2)
  });
});
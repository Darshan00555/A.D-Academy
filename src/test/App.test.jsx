import App from '../App';
import { render, screen } from '@testing-library/react';

import { describe, expect, it } from 'vitest';

describe('App', () => {
  it('renders the landing page hero content', () => {
    render(<App />);

    expect(
      screen.getByRole('heading', {
        name: /Build Your Future with A\.D Academy/i,
      })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Enroll Now/i })).toBeInTheDocument();
  });
});

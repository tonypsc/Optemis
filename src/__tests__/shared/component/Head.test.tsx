import { render, screen } from '@testing-library/react';
import { Head } from '../../../shared';

describe('StainListItem', () => {
  test('should render Optemis', () => {
    render(<Head />);
    const textElement = screen.getByText(/Optemis/i);
    expect(textElement).toBeInTheDocument();
  });
});

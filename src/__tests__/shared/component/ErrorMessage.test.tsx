import { render, screen } from '@testing-library/react';
import { ErrorMessage } from '../../../shared';

describe('StainListItem', () => {
  test('should render My message', () => {
    render(<ErrorMessage message="My message" />);
    const textElement = screen.getByText(/My message/i);
    expect(textElement).toBeInTheDocument();
  });
});

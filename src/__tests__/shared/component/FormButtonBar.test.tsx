import { render, screen } from '@testing-library/react';
import { FormButtonBar } from '../../../shared';

describe('FormButtonBar', () => {
  test('should render Save', () => {
    render(<FormButtonBar onCancel={() => {}} loading={false} />);
    const textElement = screen.getByText(/Save/i);
    expect(textElement).toBeInTheDocument();
  });

  test('should render Cancel', () => {
    render(<FormButtonBar onCancel={() => {}} loading={true} />);
    const textElement = screen.getByText(/Cancel/i);
    expect(textElement).toBeInTheDocument();
  });

  test('should not have p-button-loading-left class on loading false', () => {
    render(<FormButtonBar onCancel={() => {}} loading={false} />);
    const textElement = screen.getByLabelText(/Save/i);
    expect(textElement).not.toHaveClass('p-button-loading-left');
  });

  test('should have p-button-loading-left class on loading true', () => {
    render(<FormButtonBar onCancel={() => {}} loading={true} />);
    const textElement = screen.getByLabelText(/Save/i);
    expect(textElement).toHaveClass('p-button-loading-left');
  });
});

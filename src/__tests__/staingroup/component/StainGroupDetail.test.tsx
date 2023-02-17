import { render, screen } from '@testing-library/react';
import { StainGroupDetail } from '../../../staingroup/component/StainGroupDetail';
import data from '../../../../db.json';

describe('StainListItem', () => {
  test('should render Covid diagnose', () => {
    render(<StainGroupDetail stainGroup={data.staingroup?.[0]} />);
    const textElement = screen.getByText(/Covid diagnose/i);
    expect(textElement).toBeInTheDocument();
  });
});

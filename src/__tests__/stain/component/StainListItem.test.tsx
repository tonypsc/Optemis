import { render, screen } from '@testing-library/react';
import { StainListItem } from '../../../stain';
import data from '../../../../db.json';

describe('StainListItem', () => {
  test('should render Crystal violet', () => {
    render(
      <StainListItem
        stain={data.stain?.[0]}
        external={false}
        allowDelete={false}
        onDelete={() => {}}
      />
    );
    const textElement = screen.getByText(/Crystal violet/i);
    expect(textElement).toBeInTheDocument();
  });
});

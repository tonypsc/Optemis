import { render, screen } from '@testing-library/react';
import { StainGroupListItem } from '../../../staingroup/component/StainGroupListItem';
import data from '../../../../db.json';

describe('StainListItem', () => {
  test('should render Covid diagnose', () => {
    render(
      <StainGroupListItem
        stainGroup={data.staingroup?.[0]}
        onSelect={() => {}}
        selected={false}
      />
    );
    const textElement = screen.getByText(/Covid diagnose/i);
    expect(textElement).toBeInTheDocument();
  });
});

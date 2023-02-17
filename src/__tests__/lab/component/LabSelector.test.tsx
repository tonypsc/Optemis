import { render, screen } from '@testing-library/react';
import { LabSelector } from '../../../lab';
import data from '../../../../db.json';

describe('LabSelector', () => {
  test('should render Laboratory selection', () => {
    render(
      <LabSelector
        countries={data.country}
        labs={data.lab}
        onSelectCountry={() => {}}
        onSelectLab={() => {}}
        isLoading={false}
      />
    );
    const textElement = screen.getByText(/Laboratory selection/i);
    expect(textElement).toBeInTheDocument();
  });
});

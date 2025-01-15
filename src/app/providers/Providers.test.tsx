import { render, screen } from '@testing-library/react';

import Providers from './Providers';

const renderComponent = () => {
  render(
    <Providers>
      <div data-testid="mock-component">Test Child</div>
    </Providers>
  );
};

describe('Providers', () => {
  test('should render children correctly', () => {
    renderComponent();

    const mockComponent = screen.getByTestId('mock-component');
    expect(mockComponent).toBeInTheDocument();
  });
});

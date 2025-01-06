import { render, screen } from '@testing-library/react';

import Providers from './Providers';

describe('Providers component', () => {
  test('should render children correctly', () => {
    render(
      <Providers>
        <div>Test Child</div>
      </Providers>
    );

    expect(screen.getByText('Test Child')).toBeInTheDocument();
  });
});

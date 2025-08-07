import type { PropsWithChildren, ReactElement } from 'react';

import { render, RenderOptions } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

type ProviderOptions = {
  initialEntries?: string[];
} & Omit<RenderOptions, 'wrapper'>;

const Providers = ({
  children,
  initialEntries = ['/'],
}: PropsWithChildren<{ initialEntries?: string[] }>) => {
  return (
    <MemoryRouter initialEntries={initialEntries}>{children}</MemoryRouter>
  );
};

const renderWithProviders = (
  ui: ReactElement,
  { initialEntries, ...renderOptions }: ProviderOptions = {}
) => {
  return render(ui, {
    wrapper: ({ children }) => (
      <Providers initialEntries={initialEntries}>{children}</Providers>
    ),
    ...renderOptions,
  });
};

export default renderWithProviders;

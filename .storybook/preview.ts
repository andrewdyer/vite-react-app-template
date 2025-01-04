import type { Preview } from '@storybook/react';

import '../src/app/index.css';

import { withI18next, withMemoryRouter, withRedux } from './decorators';

export const decorators = [withI18next, withMemoryRouter, withRedux];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;

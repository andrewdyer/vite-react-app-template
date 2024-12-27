import type { Preview } from '@storybook/react';

import '../src/app/index.css';

import { withMemoryRouter, withRedux } from './decorators';

export const decorators = [withMemoryRouter, withRedux];

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

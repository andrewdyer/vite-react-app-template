import type { Preview } from '@storybook/react';
import withRedux from './decorators/withRedux';

export const decorators = [withRedux];

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

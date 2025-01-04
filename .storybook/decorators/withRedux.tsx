import React from 'react';
import { Provider } from 'react-redux';

import store from '../../src/app/store';

const withRedux = (Story) => (
  <Provider store={store}>
    <Story />
  </Provider>
);

export default withRedux;

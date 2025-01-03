import { I18nextProvider } from 'react-i18next';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import i18n from '@/i18n';
import store from '@/store';

export interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <I18nextProvider i18n={i18n}>
      <ReduxProvider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </ReduxProvider>
    </I18nextProvider>
  );
};

export default Providers;

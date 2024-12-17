import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import { store } from '@/store';

export interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>{children}</BrowserRouter>
    </ReduxProvider>
  );
};

export default Providers;

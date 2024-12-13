import { BrowserRouter } from 'react-router-dom';

export interface ProvidersProps {
  children: React.ReactNode;
}

const Providers = ({ children }: ProvidersProps) => {
  return <BrowserRouter>{children}</BrowserRouter>;
};

export default Providers;

import { Providers } from '@/providers';
import { Router } from '@/router';

import './App.css';

const App = () => {
  return (
    <Providers>
      <Router />
    </Providers>
  );
};

export default App;

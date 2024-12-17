import { Router } from '@/core';
import { Providers } from '@/providers';

import './App.css';

function App() {
  return (
    <Providers>
      <Router />
    </Providers>
  );
}

export default App;

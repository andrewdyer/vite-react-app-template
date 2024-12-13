import { useState } from 'react';

import { Button } from '@shared/components';

import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <Button
        onClick={() => setCount((count) => count + 1)}
        label={`count is ${count}`}
      />
      <p>
        Edit <code>src/modules/demo/components/Counter/Counter.tsx</code> and
        save to test HMR
      </p>
    </div>
  );
};

export default Counter;

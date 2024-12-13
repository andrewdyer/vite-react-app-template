import { useState } from 'react';

import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <p>
        Edit <code>src/modules/demo/components/Counter/Counter.tsx</code> and
        save to test HMR
      </p>
    </div>
  );
};

export default Counter;

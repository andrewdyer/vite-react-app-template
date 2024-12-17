import { useAppDispatch, useAppSelector } from '@/hooks';

import { Button } from '@shared/components';

import { increment, selectCount } from '@demo/slices';

import './Counter.css';

const Counter = () => {
  const count = useAppSelector(selectCount);

  const dispatch = useAppDispatch();

  return (
    <div className="card">
      <Button
        onClick={() => dispatch(increment())}
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

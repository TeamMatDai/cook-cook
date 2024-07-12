'use client';
import { useCounterStore } from '@/providers/CounterStoreProvider';

const Home = () => {
  const { count, incrementCount, decrementCount } = useCounterStore((state) => state);

  return (
    <div>
      Home 페이지
      <div className="font-pretendard font-black">프리텐다드</div>
      <div>
        Count: {count}
        <hr />
        <button type="button" onClick={() => void incrementCount()}>
          Increment Count /
        </button>
        <button type="button" onClick={() => void decrementCount()}>
          Decrement Count
        </button>
      </div>
    </div>
  );
};

export default Home;

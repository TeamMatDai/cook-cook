'use client';
import { useCounterStore } from '@/providers/CounterStoreProvider';
import AuthContent from '../auth/_components/AuthContent/AuthContent';

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
      <AuthContent />
    </div>
  );
};

export default Home;

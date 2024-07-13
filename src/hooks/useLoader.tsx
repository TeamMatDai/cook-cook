import { useEffect, useState } from 'react';

const useLoader = (isPending: boolean) => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    if (isPending) return;

    const timer = setTimeout(() => setShowLoader(false), 200);
    return () => clearTimeout(timer);
  }, [isPending]);

  return showLoader;
};

export default useLoader;

import {useEffect, useState} from 'react';

const useCountNumberDown = (numberDown: number) => {
  const [countDown, setCountDown] = useState(numberDown);

  useEffect(() => {
    const interval = setInterval(() => {
      if (countDown > 0) {
        setCountDown(countDown - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [countDown]);

  return {countDown};
};

export default useCountNumberDown;

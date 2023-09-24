import { useCallback, useState, useEffect } from 'react';

const Clock = () => {
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(1);

  const setClock = useCallback(() => {
    const now = new Date();
    setHours(now.getHours());
    setMinutes(now.getMinutes());
    setSeconds(now.getSeconds());
  }, []);

  useEffect(() => {
    setClock();
    const interval = setInterval(setClock, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDigit = useCallback((number: number) => {
    return ('0' + number).slice(-2);
  }, []);

  const dateTimeString = `${formatDigit(hours)}:${formatDigit(minutes)}:${formatDigit(seconds)}`;

  return <time dateTime={dateTimeString}>{dateTimeString}</time>;
};

export default Clock;

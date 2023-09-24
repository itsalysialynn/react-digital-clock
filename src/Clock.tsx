import { useCallback, useState, useEffect } from 'react';

const Clock = () => {
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(1);
  const [seconds, setSeconds] = useState(1);

  const formatDigit = useCallback((number: number) => {
    return ('0' + number).slice(-2);
  }, []);

  const setClock = useCallback(() => {
    const now = new Date();
    setHours(now.getHours());
    setMinutes(now.getMinutes());
    setSeconds(now.getSeconds());
  }, []);

  useEffect(() => {
    setClock();
  }, []);

  useEffect(() => {}, [seconds, minutes, hours]);

  return <div>{`${formatDigit(hours)}:${formatDigit(minutes)}:${formatDigit(seconds)}`}</div>;
};

export default Clock;

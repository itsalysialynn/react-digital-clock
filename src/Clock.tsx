import { useCallback, useState, useEffect } from 'react';
import styled from 'styled-components';

const ClockLayout = styled.div`
  background: black;
  color: white;
  font-family: 'Lucida Console', 'Courier New', monospace;
  font-size: 8rem;
  padding: 3rem;
  font-weight: bold;
  display: inline-block;
`;

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

  return (
    <ClockLayout>
      <time dateTime={dateTimeString}>{dateTimeString}</time>
    </ClockLayout>
  );
};

export default Clock;

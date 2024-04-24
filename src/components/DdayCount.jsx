import React, { useState, useEffect } from "react";
import styled from "styled-components";

const DdayCount = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  if (typeof window === "undefined") return <></>;

  return (
    <Text>
      {days > 0 && <>{days}일 </>}
      {hours}시 {minutes}분 {seconds}초 남았습니다.
    </Text>
  );
};

const Text = styled.p`
  font-size: 1.4rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default DdayCount;

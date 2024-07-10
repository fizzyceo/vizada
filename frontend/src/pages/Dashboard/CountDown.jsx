import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = ({ secondsLeft, totalSeconds }) => {
  const TIME_LIMIT = totalSeconds; // Total duration in seconds

  const [timeLeft, setTimeLeft] = useState(parseInt(secondsLeft));

  useEffect(() => {
    setTimeLeft(parseInt(secondsLeft));
  }, [secondsLeft]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        if (prevTimeLeft <= 0) {
          clearInterval(timerInterval);
          return 0;
        }
        return prevTimeLeft - 1;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, []); // Runs only on component mount

  const formatTime = (time) => {
    const days = Math.floor(time / (24 * 3600));
    const hours = Math.floor((time % (24 * 3600)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    if (days > 0) {
      return `${days} Days ${hours} Hours`;
    } else if (hours > 0) {
      return `${hours} Hours ${minutes} Minutes`;
    } else {
      return `${minutes} Minutes ${seconds} Seconds`;
    }
  };

  return (
    <div className="w-36 rounded-lg p-4 flex flex-col items-center justify-center">
      <div className="base-timer relative bg-gray-100 rounded-full">
        <CountdownCircleTimer
          isPlaying={timeLeft > 0}
          duration={TIME_LIMIT}
          colors={[["#EF4444"]]}
          size={200}
          strokeWidth={10}
          initialRemainingTime={timeLeft}
          trailColor="transparent"
          onComplete={() => {
            setTimeLeft(0);
          }}
        >
          {({ remainingTime }) => (
            <div className="base-timer__label text-base text-gray-800 p-3">
              {`${formatTime(remainingTime)} left`}
            </div>
          )}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default Timer;

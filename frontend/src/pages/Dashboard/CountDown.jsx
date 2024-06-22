import React, { useState, useEffect } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

function formatTime(time) {
  const days = Math.floor(time / (24 * 3600));
  const hours = Math.floor((time % (24 * 3600)) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  let timeString = "";

  if (days > 0) {
    timeString += `${days} Days `;
  }

  if (hours > 0) {
    timeString += `${hours} Hours `;
  }

  return timeString.trim();
}

const Timer = ({ daysLeft, totalDays }) => {
  const TIME_LIMIT = totalDays * 24 * 60 * 60; // convert total days to seconds
  const initialRemainingTime = daysLeft * 24 * 60 * 60; // convert remaining days to seconds
  const FULL_DASH_ARRAY = 283;
  const RESET_DASH_ARRAY = `-57 ${FULL_DASH_ARRAY}`;

  const [timeLeft, setTimeLeft] = useState(initialRemainingTime);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        const newTimeLeft = prevTimeLeft - 1;
        if (newTimeLeft === 0) {
          clearInterval(timerInterval);
        }
        return newTimeLeft >= 0 ? newTimeLeft : 0;
      });
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [daysLeft, initialRemainingTime]); // reset timer when daysLeft or initialRemainingTime changes

  return (
    <div className="w-32 rounded-lg p-4 flex flex-col items-center justify-center">
      <div className="base-timer relative bg-gray-100 rounded-full">
        <CountdownCircleTimer
          isPlaying
          duration={TIME_LIMIT}
          colors={[["#EF4444"]]}
          size={180}
          strokeWidth={10}
          initialRemainingTime={timeLeft}
          trailColor="transparent"
          onComplete={() => {}}
        >
          {({ remainingTime }) => (
            <div className="base-timer__label text-xl text-gray-800">
              {`${formatTime(remainingTime)} left`}
            </div>
          )}
        </CountdownCircleTimer>
      </div>
    </div>
  );
};

export default Timer;

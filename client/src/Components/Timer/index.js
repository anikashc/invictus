import React, { useEffect, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import "./style.css";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}



const minuteSeconds = 60;
const hourSeconds = 3600;
const daySeconds = 86400;



const renderTime = (dimension, time) => {
  return (
    <div className="time-wrapper">
      <div className="time">{time}</div>
      <div className="dimension">{dimension}</div>
    </div>
  );
};

const getTimeSeconds = (time) => (minuteSeconds - time) | 0;
const getTimeMinutes = (time) => ((time % hourSeconds) / minuteSeconds) | 0;
const getTimeHours = (time) => ((time % daySeconds) / hourSeconds) | 0;
const getTimeDays = (time) => (time / daySeconds) | 0;

export default function Timer() {
  
  const stratTime = Date.now() / 1000; // use UNIX timestamp in seconds
  // const { height, width } = useWindowDimensions();

  const remainingTime = 1621492200 - stratTime;
  const days = Math.ceil(remainingTime / daySeconds);
  const daysDuration = days * daySeconds;
  const [timerSize, setTimerSize] = useState(150);
  let timerProps = {
    isPlaying: true,
    size: timerSize,
    strokeWidth: 6
  };
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    
    windowDimensions.width<425? setTimerSize(60) : (windowDimensions.width<600?setTimerSize(100):setTimerSize(150));

    timerProps = {
      isPlaying: true,
      size: timerSize,
      strokeWidth: 6
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [windowDimensions]);
  return (
    <React.Fragment>

      <div className="App">
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#FFFFFF"]]}
          trailColor=""
          duration={daysDuration}
          initialRemainingTime={remainingTime}
        >
          {({ elapsedTime }) =>
            renderTime("days", getTimeDays(daysDuration - elapsedTime))
          }
        </CountdownCircleTimer>
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#FFFFFF"]]}
          trailColor=""
          duration={daySeconds}
          initialRemainingTime={remainingTime % daySeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > hourSeconds
          ]}
        >
          {({ elapsedTime }) =>
            renderTime("hours", getTimeHours(daySeconds - elapsedTime))
          }
        </CountdownCircleTimer>
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#FFFFFF"]]}
          trailColor=""
          duration={hourSeconds}
          initialRemainingTime={remainingTime % hourSeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > minuteSeconds
          ]}
        >
          {({ elapsedTime }) =>
            renderTime("minutes", getTimeMinutes(hourSeconds - elapsedTime))
          }
        </CountdownCircleTimer>
        <CountdownCircleTimer
          {...timerProps}
          colors={[["#FFFFFF"]]}
          trailColor=""
          duration={minuteSeconds}
          initialRemainingTime={remainingTime % minuteSeconds}
          onComplete={(totalElapsedTime) => [
            remainingTime - totalElapsedTime > 0
          ]}
        >
          {({ elapsedTime }) =>
            renderTime("seconds", getTimeSeconds(elapsedTime))
          }
        </CountdownCircleTimer>
      </div>
     
    </React.Fragment>
  );
}

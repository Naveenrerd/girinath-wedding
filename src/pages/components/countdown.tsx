import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";
import FlipperTime from "./flipperTime";

dayjs.extend(relativeTime);

export interface ITimeLeft {
  day: number;
  hour: number;
  minute: number;
  seconds: number;
}

const getTimeLeft = (): ITimeLeft => {
  const today = dayjs();
  let weddingDay = dayjs("2022-09-09").endOf("day");

  const diffDays = weddingDay.diff(today, "d");
  weddingDay = weddingDay.subtract(diffDays, "d");

  const diffHrs = weddingDay.diff(today, "h");
  weddingDay = weddingDay.subtract(diffHrs, "h");

  const diffMins = weddingDay.diff(today, "m");
  weddingDay = weddingDay.subtract(diffMins, "m");

  const diffSec = weddingDay.diff(today, "s");

  return {
    day: diffDays,
    hour: diffHrs,
    minute: diffMins,
    seconds: diffSec,
  };
};

const TimerBox: React.FC<{
  unit: number;
  text: string;
  isInitial: boolean;
}> = ({ unit, text, isInitial }) => (
  <Box sx={{ margin: "auto", maxWidth: "250px" }}>
    <FlipperTime time={unit} isInitial={isInitial} />
    <Typography variant="h6" color="#fff">
      {text}
    </Typography>
  </Box>
);

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState<ITimeLeft>(getTimeLeft());
  const [isInitial, setisInitial] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setisInitial(false);
      setTimeLeft(getTimeLeft());
    }, 1000);
  }, []);

  return (
    <Box>
      <Typography
        variant="h3"
        gutterBottom
        sx={{ fontWeight: 400, color: "#7DF9FF" }}
      >
        Countdown till <strong>Giri</strong> gets laid
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "auto",
          width: "100%",
          flexWrap: "wrap",
        }}
      >
        <TimerBox unit={timeLeft.day} text="Days" isInitial={isInitial} />
        <TimerBox unit={timeLeft.hour} text="Hours" isInitial={isInitial} />
        <TimerBox unit={timeLeft.minute} text="Minutes" isInitial={isInitial} />
        <TimerBox
          unit={timeLeft.seconds}
          text="Seconds"
          isInitial={isInitial}
        />
      </Box>
    </Box>
  );
};

export default Countdown;

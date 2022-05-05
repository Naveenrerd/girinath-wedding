import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useEffect, useState } from "react";
import FlipperTime from "./flipperTime";

dayjs.extend(relativeTime);

const TimerBox: React.FC<{ unit: number; text: string }> = ({
  unit,
  text,
}: {
  unit: number;
  text: string;
}) => (
  <Box sx={{ margin: "auto", maxWidth: "250px" }}>
    <FlipperTime time={unit} />
    <Typography variant="h6" color="#fff">
      {text}
    </Typography>
  </Box>
);

const Countdown: React.FC = () => {
  const [timeSet, setTimeSet] = useState({
    day: 0,
    hour: 0,
    minute: 0,
    seconds: 0,
  });

  useEffect(() => {
    setInterval(() => {
      const today = dayjs();
      let weddingDay = dayjs("2022-09-09").endOf("day");

      const diffDays = weddingDay.diff(today, "d");
      weddingDay = weddingDay.subtract(diffDays, "d");

      const diffHrs = weddingDay.diff(today, "h");
      weddingDay = weddingDay.subtract(diffHrs, "h");

      const diffMins = weddingDay.diff(today, "m");
      weddingDay = weddingDay.subtract(diffMins, "m");

      const diffSec = weddingDay.diff(today, "s");

      setTimeSet({
        day: diffDays,
        hour: diffHrs,
        minute: diffMins,
        seconds: diffSec,
      });
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
        <TimerBox unit={timeSet.day} text="Days" />
        <TimerBox unit={timeSet.hour} text="Hours" />
        <TimerBox unit={timeSet.minute} text="Minutes" />
        <TimerBox unit={timeSet.seconds} text="Seconds" />
      </Box>
    </Box>
  );
};

export default Countdown;

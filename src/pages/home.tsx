import { Box } from "@mui/material";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Countdown from "./components/countdown";
import FreeCoupon from "./components/freecoupon";
import Pictures from "./components/pictures";

dayjs.extend(relativeTime);

const HomePage: React.FC = () => {
	return (
		<Box height="100vh" sx={{ padding: "10px" }}>
			<Countdown />
			<FreeCoupon />
			<Pictures />
		</Box>
	);
};

export default HomePage;

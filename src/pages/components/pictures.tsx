/* eslint-disable jsx-a11y/alt-text */
import { Box } from "@mui/material";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import giri1 from "../../assets/1.jpg";
import giri2 from "../../assets/2.jpg";
import giri3 from "../../assets/3.jpg";
import giri4 from "../../assets/4.jpg";
import giri5 from "../../assets/5.jpg";
import giri6 from "../../assets/6.jpg";

var Carousel = require("react-responsive-carousel").Carousel;

const Pictures: React.FC = () => {
	return (
		<Box mt={5}>
			<Carousel showArrows={true} onChange={() => null} onClickItem={() => null} onClickThumb={() => null}>
				<div>
					<img src={giri5} />
				</div>
				<div>
					<img src={giri2} />
				</div>
				<div>
					<img src={giri6} />
				</div>
				<div>
					<img src={giri1} />
				</div>
				<div>
					<img src={giri4} />
				</div>
			</Carousel>
		</Box>
	);
};

export default Pictures;

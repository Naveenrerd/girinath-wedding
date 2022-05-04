import { Box, Button, Dialog } from "@mui/material";
import { useState } from "react";
import n1 from "../../assets/n1.jpg";

const FreeCoupon: React.FC = () => {
	const [open, setOpen] = useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = (value: string) => {
		setOpen(false);
	};

	return (
		<Box mt={5}>
			<Button variant="contained" onClick={handleClickOpen}>
				Click here for ₹500 free voucher
			</Button>
			<Dialog onClose={handleClose} open={open} sx={{ backgroundColor: "white" }}>
				<img src={n1} alt="n1" />
			</Dialog>
		</Box>
	);
};

export default FreeCoupon;

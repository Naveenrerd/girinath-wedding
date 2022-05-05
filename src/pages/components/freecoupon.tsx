import { Box, Button, Dialog, IconButton } from "@mui/material";
import { useState } from "react";
import n1 from "../../assets/n1.png";
import CloseIcon from "@mui/icons-material/Close";

const FreeCoupon: React.FC = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box mt={5}>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        sx={{ backgroundColor: "#fa5b3d", fontWeight: 700, fontSize: 18 }}
      >
        Click here for ₹500 free voucher
      </Button>
      <Dialog onClose={handleClose} open={open}>
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
          }}
        >
          <img src={n1} alt="n1" height="300px" />
          <IconButton
            aria-label="close"
            sx={{
              position: "absolute",
              top: 2,
              right: 2,
              color: "black",
            }}
            onClick={handleClose}
          >
            <CloseIcon
              sx={{
                fontSize: 30,
              }}
            />
          </IconButton>
        </Box>
      </Dialog>
    </Box>
  );
};

export default FreeCoupon;

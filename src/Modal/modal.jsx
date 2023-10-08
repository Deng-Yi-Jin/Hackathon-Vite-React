import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import CloseButton from "../Close/Close";
import "./modal.css";
import Subscribe from "../SubscribeButton/Subscribe";
import { Divider } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -100%)",
  width: 900,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const hStyle = {
  color: "black",
  transform: "translate(20%, -100%)",
  // position: 'absolute',
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="Modal">
      <Button
        sx={{
          backgroundColor: "Cyan",
          borderColor: "Black",
          color: "Black",
          width: 300,
          height: 65,
        }}
        onClick={handleOpen}
      >
        Collaborative Project
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <h2 style={hStyle}>Collaborative Project Learning Booster</h2>
          <Typography
            color={"black"}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Libft
          </Typography>
          <Typography
            color={"black"}
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            October 6, 2023 at 14:30
          </Typography>
          <Typography
            color={"black"}
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            📅 a day ago-----------------------⏲️for about a
            day-----------------------👤djin, u81z01s06
          </Typography>
          <Divider />
          <Button>
            <Subscribe />
          </Button>
          <CloseButton />
        </Box>
      </Modal>
    </div>
  );
}

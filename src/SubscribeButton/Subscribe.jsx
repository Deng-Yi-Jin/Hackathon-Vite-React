import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import "./Button.css";
import { Divider } from "@mui/material";
import Teammate_pfp from "./Teammate";

const style = {
  position: "absolute",
  top: "50%",
  right: "50%",
  transform: "translate(50%, -100%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Subscribe() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button
        sx={{
          backgroundColor: "#138f67",
          color: "black",
          right: -790,
          bottom: -10,
        }}
        onClick={handleOpen}
      >
        Subscribe
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            textAlign={"center"}
            color={"black"}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Welcome Co-pilot!
          </Typography>
          <Divider />
          <Teammate_pfp />
          <Typography
            textAlign={"center"}
            color={"black"}
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            Meet your temporary teammate :D
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

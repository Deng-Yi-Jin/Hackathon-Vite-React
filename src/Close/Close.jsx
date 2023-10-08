import "./Close.css";
import Button from "@mui/material/Button";

const handleClose = () => {
  setOpen(false);
};

export default function CloseButton() {
  return (
    <Button
      className="buttonClose"
      onClick={handleClose}
      sx={{ backgroundColor: "#FFFFFF", color: "Black" }}
      variant="contained"
    >
      Close
    </Button>
  );
}

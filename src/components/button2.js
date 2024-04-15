import { Button } from "@mui/material";

const Button2 = ({ title = "Button Title", icon = false }) => {
  return (
    <Button
      color="primary"
      variant="contained"
      sx={{ borderRadius: "0px 0px 0px 0px" }}
    >
      Button Title
    </Button>
  );
};

export default Button2;

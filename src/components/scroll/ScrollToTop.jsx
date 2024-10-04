import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fab, useScrollTrigger, Zoom } from "@mui/material";

export default function ScrollToTop() {
  return (
    <Zoom in={useScrollTrigger({ threshold: 100 })}>
      <Fab
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        size="small"
        variant="circular"
        sx={{ position: "fixed", right: 33, bottom: 33 }}
        color="primary"
        aria-label="add"
      >
        <KeyboardArrowUpIcon fontSize="meduim" />
      </Fab>
    </Zoom>
  );
}

import { Box, Button, Typography } from "@mui/material";

export default function Footer() {
    const handleButtonClick = () => {
        window.open("https://my-portflio-6500a.web.app/", "_blank");
      };
  return (
    <Box
      sx={{
        mt:5,
        bgcolor: "#2B3445",
        py: 1.3,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
      }}
    >
      <Typography
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        color={"HighlightText"}
        variant="h6"
        sx={{ fontSize: 18 }}
      >
        Designed and developed by
        <Button
        onClick={handleButtonClick}
          sx={{
            mx: 0.5,
            fontSize: "18px",
            textTransform: "capitalize",
            color: "#ff7790",
          }}
          variant="text"
          color="primary"
        >
          Eng.Baraa Fedallah
        </Button>
        ©2024
      </Typography>
    </Box>
  );
}

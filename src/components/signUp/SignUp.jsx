import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import eCommerceImg from "../../images/commerce.jpg";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
export default function SignUp() {
  const theme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Container
      maxWidth="xl"
      sx={{
        background: theme.palette.text.primary,
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          background: theme.palette.background.paper,
          height: "80vh",
          width: "70%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "7px",
        }}
      >
        <Box sx={{ height: "75%" }} display={"flex"} alignItems={"start"}>
          <Box
            display={{ md: "flex", xs: "none" }}
            flexDirection={"column"}
            alignItems={"center"}
            gap={2}
          >
            <img
              src={eCommerceImg}
              style={{ width: "75%", borderRadius: "7px" }}
            />
            <Link to="/" style={{ color: "blue" }}>
              Go back to home
            </Link>
          </Box>
        </Box>

        <Box
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          sx={{ width: "100%", height: "100%" }}
        >
          <Box
            display={"flex"}
            sx={{ width: "70%", height: "85%" }}
            flexDirection={"column"}
            alignItems={"start"}
            gap={{md:2.7,xs:2}}
          >
            <Typography variant="h4">Sign Up</Typography>
            <TextField
              id="standard-search"
              label="UserName"
              type="search"
              variant="standard"
              fullWidth
            />
            <TextField
              id="standard-search"
              label="Email"
              type="search"
              variant="standard"
              fullWidth
            />
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="standard-adornment-password">
                Create password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>

            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="standard-adornment-password">
                Confirm password
              </InputLabel>
              <Input
                id="standard-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button sx={{ textTransform: "capitalize" }} variant="contained">
              Sign Up
            </Button>
            <Link to="/login" style={{ color: "blue" }}>
              Already have an account?
            </Link>
            <Link to="/" style={{ color: "blue" }}>
              <Typography display={{ md: "none", xs: "flex" }}>Go back to home</Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

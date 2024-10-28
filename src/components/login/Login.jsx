import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import eCommerceImg from "../../images/commerce.jpg";
import { useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import TwitterIcon from "@mui/icons-material/Twitter";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
export default function Login() {
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
              style={{ width: "75%", borderRadius: "7px"}}
            />
            <Link to="/signUp" style={{ color: "blue" }}>
              Create an account
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
            sx={{ width: "70%", height: "70%" }}
            flexDirection={"column"}
            alignItems={"start"}
            gap={2}
          >
            <Typography variant="h4">Login</Typography>
            <TextField
              id="standard-search"
              label="Email"
              type="search"
              variant="standard"
              fullWidth
            />
            <FormControl variant="standard" fullWidth>
              <InputLabel htmlFor="standard-adornment-password">
                Password
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
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
            />
            <Button sx={{ textTransform: "capitalize" }} variant="contained">
              Login in
            </Button>
            <Stack direction={"row"} alignItems={"center"} spacing={-1}>
              <Typography
                pr={1}
                color={theme.palette.text.primary}
                fontSize={"18px"}
              >
                Or login with
              </Typography>
              <IconButton>
                <FacebookOutlinedIcon sx={{ color: "#1877F2", fontSize: 25 }} />
              </IconButton>
              <IconButton>
                <GoogleIcon sx={{ color: "#DB4437", fontSize: 25 }} />
              </IconButton>
              <IconButton>
                <TwitterIcon sx={{ color: "#1DA1F2", fontSize: 25 }} />
              </IconButton>
            </Stack>
            <Link to="/signUp" style={{ color: "blue" }}>
              <Typography display={{ md: "none", xs: "flex" }}>Create an account</Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

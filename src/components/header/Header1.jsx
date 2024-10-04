import { useContext, useState } from "react";
import { ColorModeContext } from "../../theme";
import { Container, IconButton, Stack, useTheme } from "@mui/material";
import {
  DarkModeOutlined,
  ExpandMore,
  LightModeOutlined,
} from "@mui/icons-material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
export default function Header1() {
  const options = ["AR", "EN"];
  const [anchorEl, setAnchorEl] = useState(null);

  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    setSelectedIndex(index);
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  return (
    <Box sx={{ bgcolor: "#2B3445",borderBottomRightRadius:4,borderBottomLeftRadius:4 }}>
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Typography
            sx={{
              mr: 1,
              p: "3px 10px",
              bgcolor: "#D23F57",
              borderRadius: "12px",
              fontSize: "md",
              fontWeight: "bold",
              color: "#fff",
            }}
          >
            HOT
          </Typography>
          <Typography
            sx={{
              fontSize: "md",
              fontWeight: "300",
              color: "#fff",
            }}
          >
            Free Express Shipping
          </Typography>
          <Box flexGrow={1} />

          <div className="mode" style={{ width: "33px" }}>
            {theme.palette.mode === "light" ? (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <LightModeOutlined sx={{ color: "#ffc21a", fontSize: "md" }} />
              </IconButton>
            ) : (
              <IconButton
                onClick={() => {
                  localStorage.setItem(
                    "mode",
                    theme.palette.mode === "dark" ? "light" : "dark"
                  );
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                <DarkModeOutlined sx={{ fontSize: "md" }} />
              </IconButton>
            )}
          </div>

          <List
            component="nav"
            aria-label="Device settings"
            sx={{ mt: 1, mb: 1, p: 0 }}
          >
            <ListItem
            sx={{cursor:"pointer"}}
              aria-expanded={open ? "true" : undefined}
              onClick={handleClickListItem}
            >
              <ListItemText
                sx={{
                  ".MuiTypography-root": { fontSize: "15px", color: "white" },
                }}
                secondary={options[selectedIndex]}
              />
              <ExpandMore sx={{ color: "white" }} />
            </ListItem>
          </List>
          <Menu
            sx={{ ml: 1 }}
            id="lock-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "lock-button",
              role: "listbox",
            }}
          >
            {options.map((option, index) => (
              <MenuItem
                key={option}
                selected={index === selectedIndex}
                onClick={(event) => handleMenuItemClick(event, index)}
                sx={{ fontSize: "15px", p: "1px 10px", minHeight: "10px" }}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>

          <TwitterIcon sx={{ fontSize: "25px", color: "#fff" }} />
          <FacebookIcon sx={{ fontSize: "25px", color: "#fff", mx: 2 }} />
          <InstagramIcon sx={{ fontSize: "25px", color: "#fff" }} />
        </Stack>
      </Container>
    </Box>
  );
}

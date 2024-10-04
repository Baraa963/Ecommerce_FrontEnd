/* eslint-disable no-unused-vars */
import {
  Accordion,
  AccordionSummary,
  Box,
  Container,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  SwipeableDrawer,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import WindowIcon from "@mui/icons-material/Window";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import SportsEsportsOutlinedIcon from "@mui/icons-material/SportsEsportsOutlined";
import ElectricMopedOutlinedIcon from "@mui/icons-material/ElectricMopedOutlined";
import DevicesOutlinedIcon from "@mui/icons-material/DevicesOutlined";
import MenuBookOutlinedIcon from "@mui/icons-material/MenuBookOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@emotion/react";
import { ArrowDownwardOutlined } from "@mui/icons-material";
import HeaderLinks from "./HeaderLinks";
import axios from "axios";

export default function Header3() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const [categoryQuery, setCategoryQuery] = useState("productsCategory");
  const [categoryData, setCategoryData] = useState([]);
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseCategory = await axios.get(
          `http://127.0.0.1:8000/api/${categoryQuery}`
        );
        // Benzersiz kategorileri almak için Set kullanıldı
        const uniqueCategories = [...new Set(responseCategory.data)];
        setCategoryData(uniqueCategories);
        setOptions(uniqueCategories);
      } catch (err) {
        console.error("API çağrısı sırasında hata oluştu:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mt: 3,
      }}
    >
      <Box>
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{
            width: "222px",
            bgcolor: theme.palette.ListColor.main,
            color: theme.palette.text.secondary,
          }}
        >
          <WindowIcon />
          <Typography sx={{ p: 0, textTransform: "capitalize", ml: 1 }}>
            Categories
          </Typography>
          <Box flexGrow={1} />
          <KeyboardArrowRightIcon />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{
            ".MuiPaper-root": {
              width: 220,
              bgcolor: theme.palette.ListColor.main,
            },
          }}
        >
          {options.map((option, index) => (
            <MenuItem onClick={handleClose} key={index}>
              <ListItemText>{option}</ListItemText>
            </MenuItem>
          ))}

          {/* <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <DevicesOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Electronics</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <MenuBookOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Books</ListItemText>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <SportsEsportsOutlinedIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Games</ListItemText>
          </MenuItem> */}
        </Menu>
      </Box>
      {useMediaQuery("(min-width:1200px)") && (
        <Stack gap={4} direction={"row"} alignItems={"center"}>
          <HeaderLinks title={"Home"} />
          <HeaderLinks title={"Mega Menu"} />
          <HeaderLinks title={"Full Screen Menu"} />
          <HeaderLinks title={"Pages"} />
          <HeaderLinks title={"User Account"} />
          <HeaderLinks title={"Vendoor Account"} />
        </Stack>
      )}

      {useMediaQuery("(max-width:1200px)") && (
        <IconButton onClick={toggleDrawer("top", true)}>
          <MenuIcon />
        </IconButton>
      )}

      <SwipeableDrawer
        anchor={"top"}
        open={state["top"]}
        onClose={toggleDrawer("top", false)}
        onOpen={toggleDrawer("top", true)}
        sx={{
          ".MuiPaper-root.css-12cfoy0-MuiPaper-root-MuiDrawer-paper": {
            height: "100%",
          },
        }}
      >
        <Box
          sx={{ width: "75%", mx: "auto", mt: 6, position: "relative", pt: 10 }}
        >
          <IconButton
            onClick={toggleDrawer("top", false)}
            sx={{
              ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
              position: "absolute",
              top: 0,
              right: 10,
            }}
          >
            <CloseIcon />
          </IconButton>
          {[
            { mainLink: "Home", subLink: ["Link1", "Link2", "Link3"] },
            { mainLink: "Mega menu", subLink: ["Link1", "Link2", "Link3"] },
            {
              mainLink: "Full Screen Menu",
              subLink: ["Link1", "Link2", "Link3"],
            },
            { mainLink: "Pages", subLink: ["Link1", "Link2", "Link3"] },
            { mainLink: "User Account", subLink: ["Link1", "Link2", "Link3"] },
            {
              mainLink: "Vendor Account",
              subLink: ["Link1", "Link2", "Link3"],
            },
          ].map((item) => {
            return (
              <Accordion
                key={item.mainLink}
                elevation={0}
                sx={{ bgcolor: "initial" }}
              >
                <AccordionSummary
                  expandIcon={<ArrowDownwardOutlined />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  <Typography>{item.mainLink}</Typography>
                </AccordionSummary>
                <List sx={{ py: 0, my: 0 }}>
                  {item.subLink.map((link) => {
                    return (
                      <ListItem key={link} sx={{ py: 0, my: 0 }}>
                        <ListItemButton>
                          <ListItemText primary={link} />
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                </List>
              </Accordion>
            );
          })}
        </Box>
      </SwipeableDrawer>
    </Container>
  );
}

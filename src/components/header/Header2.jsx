import { Container, IconButton, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Menu_List from "./Menu_List";
import { Link } from "react-router-dom";

export default function Header2() {
  const Search = styled("div")(({ theme }) => ({
    flexGrow: 0.6,
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    border: "1px solid #777",
    transition: "ease-in 0.3s",
    "&:hover": {
      border: "1px solid #333",
      background: "#999",
    },
    marginLeft: 0,
    minWidth: "266px", // Fixed typo here (minwidth to minWidth)
    height: "46px",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "80%",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#777",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));

  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <Container sx={{ my: 3, display: "flex", justifyContent: "space-between" }}>
      <Search
        sx={{
          borderRadius: "22px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />

        <Menu_List />
      </Search>

      <Stack direction={"row"} alignItems={"center"}>
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="primary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
        <IconButton>
          <Link to="/signUp" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Person2OutlinedIcon />
          </Link>
        </IconButton>
      </Stack>
    </Container>
  );
}

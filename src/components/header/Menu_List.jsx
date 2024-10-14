/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { ExpandMore } from "@mui/icons-material";
import { useTheme } from "@emotion/react";
import axios from "axios";
import { useProducts } from "../../contexts/ProductsContext";
import { Link } from "react-router-dom";

export default function Menu_List() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    if (options[index] !== "Products") {
      setSelectedIndex(index);
      setAnchorEl(null);
      fetchFilteredProducts(options[index]);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();

  const [categoryQuery, setCategoryQuery] = useState("productsTitle");
  const [categoryData, setCategoryData] = useState([]);
  const [options, setOptions] = useState([]);

  const { setProducts } = useProducts(); // Get setProducts from context

  const fetchFilteredProducts = async (categoryTitle) => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/filteredProducts",
        {
          params: {
            title: categoryTitle,
          },
        }
      );

      setProducts(response.data); // Save products to context
      // console.log(response.data); // Log products to console
    } catch (err) {
      console.error("Error fetching filtered products:", err);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const responseCategory = await axios.get(
          `http://127.0.0.1:8000/api/${categoryQuery}`
        );
        const uniqueCategories = [
          "Products",
          "All products",
          ...new Set(responseCategory.data),
        ];
        setCategoryData(uniqueCategories);
        setOptions(uniqueCategories);
      } catch (err) {
        console.error("Error fetching categories:", err);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div>
      <List
        component="nav"
        aria-label="Device settings"
        sx={{
          bgcolor: theme.palette.ListColor.main,
          borderBottomRightRadius: 22,
          borderTopRightRadius: 22,
          p: 0,
        }}
      >
        <ListItem
          sx={{ cursor: "pointer" }}
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClickListItem}
        >
          <ListItemText
            secondary={options[selectedIndex]}
            sx={{
              width: 100,
              textAlign: "center",
              "&:hover:": { cursor: "pointer" },
            }}
          />

          <ExpandMore sx={{ bgcolor: theme.palette.ListColor.main }} />
        </ListItem>
      </List>
      <Menu
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
          
            <Link key={option} to="/products" style={{textDecoration:"none",color: theme.palette.text.primary}}>
              <MenuItem
             sx={{ fontSize: "14px" }}
             
             selected={index === selectedIndex}
             onClick={(event) => handleMenuItemClick(event, index)}
             disabled={option === "Products"}
              >
                {option}
              </MenuItem>
            </Link>
          
        ))}
      </Menu>
    </div>
  );
}

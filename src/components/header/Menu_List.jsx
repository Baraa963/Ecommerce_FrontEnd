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

export default function Menu_List() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event, index) => {
    // Eğer seçilen kategori 'Products' ise işlem yapma
    if (options[index] !== "Products") {
      setSelectedIndex(index);
      setAnchorEl(null);

      // Seçilen kategoriye göre ürünleri filtrele
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

  const [products, setProducts] = useState([]); // API'den dönen ürünler için state
  const fetchFilteredProducts = async (categoryTitle) => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/filteredProducts",
        {
          params: {
            title: categoryTitle, // Eğer 'All products' seçildiyse tüm ürünleri getir
          },
        }
      );

      setProducts(response.data); // API'den gelen ürünleri state'e kaydet
      console.log(response.data);
    } catch (err) {
      console.error("Filtrelenmiş ürünleri alırken hata oluştu:", err);
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const responseCategory = await axios.get(
          `http://127.0.0.1:8000/api/${categoryQuery}`
        );
        // Benzersiz kategorileri almak için Set kullanıldı
        const uniqueCategories = [
          "Products", // 'Products' görünür kalacak
          "All products",
          ...new Set(responseCategory.data),
        ];
        setCategoryData(uniqueCategories);
        setOptions(uniqueCategories);
      } catch (err) {
        console.error("API çağrısı sırasında hata oluştu:", err);
      }
    };

    fetchProducts();
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
              width: 90,
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
          <MenuItem
            sx={{ fontSize: "14px" }}
            key={option}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
            disabled={option === "Products"} // 'Products' seçilemez olacak
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

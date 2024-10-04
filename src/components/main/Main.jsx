import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CircularProgress,
  Container,
  Dialog,
  IconButton,
  Rating,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import AddShoppingCartOutlinedIcon from "@mui/icons-material/AddShoppingCartOutlined";
import { useEffect, useState } from "react";
import { Close } from "@mui/icons-material";
import ProductDetails from "./ProductDetails";
import { AnimatePresence, motion } from "framer-motion";
import axios from "axios";

export default function Main() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState("all");
  const [allproductData, setAllProductData] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [categoryData, setCategoryData] = useState([]);

  const [clickedProduct, setClickedProduct] = useState({});

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setSelectedProduct(newAlignment);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // Fetch all Products Data
        const response = await axios.get(
          `http://127.0.0.1:8000/api/allProducts`
        );
        // console.log(response.data)
        setAllProductData(response.data);

        const responseCategory = await axios.get(
          `http://127.0.0.1:8000/api/productsCategory`
        );
        const uniqueCategories = [...new Set(responseCategory.data)];
        setCategoryData(uniqueCategories);
      } catch (err) {
        console.error("API çağrısı sırasında hata oluştu:", err);
        setError(err);
      }
      setIsLoading(false);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    // Filter products based on selected category
    if (selectedProduct === "all") {
      setFilteredProducts(allproductData);
    } else {
      const filtered = allproductData.filter(
        (product) => product.productCategory === selectedProduct
      );
      setFilteredProducts(filtered);
    }
  }, [selectedProduct, allproductData]);

  if (isLoading) {
    return (
      <Box sx={{ textAlign: "center", py: 11 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Container sx={{ py: 11, textAlign: "center" }}>
        <Typography variant="h6">Lütfen Daha Sonra Tekrar Deneyin</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ py: 3 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexWrap={"wrap"}
        gap={3}
      >
        <Box>
          <Typography variant="h6">Selected Products</Typography>
          <Typography fontWeight={300} variant="body1">
            All new arrivals in our exclusive brand selection
          </Typography>
        </Box>
        <ToggleButtonGroup
          color="error"
          value={selectedProduct}
          exclusive
          onChange={handleAlignment}
          aria-label="product categories"
          sx={{
            ".Mui-selected": {
              border: "2px solid rgba(233, 69, 96, 0.5) !important",
              color: "#e94560",
              backgroundColor: "initial",
            },
            ".MuiToggleButton-root": {
              border: "1px solid #d2d1d1", // Genel sınır ekleniyor
              borderRadius: "4px",
              color: theme.palette.text.primary,
            },
          }}
        >
          <ToggleButton
            sx={{ mx: "5px !important", color: theme.palette.text.primary }}
            value="all"
            aria-label="All Products"
          >
            All Products
          </ToggleButton>

          {categoryData.map((item, index) => (
            <ToggleButton
              key={index}
              sx={{
                mx: "5px !important",
                color: theme.palette.text.primary,
              }}
              value={item} // Ensure the correct category value
              aria-label={item}
            >
              {item}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Stack>

      <Stack
        direction={"row"}
        flexWrap={"wrap"}
        justifyContent={"space-between"}
        sx={{ cursor: "pointer" }}
      >
        <AnimatePresence>
          {filteredProducts.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ transform: "scale(0)", opacity: 0 }}
              animate={{ transform: "scale(1)", opacity: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <Card
                sx={{
                  width: 330,
                  height: 500,
                  mt: 6,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  ":hover .MuiCardMedia-root": {
                    scale: "1.11",
                    transition: "0.8s",
                  },
                }}
              >
                <CardMedia
                  sx={{
                    position: "relative",
                    width: "110%",
                    height: 270,
                    objectFit: "cover",
                  }}
                  image={item.productImg}
                  title={item.productTitle}
                />

                <CardContent
                  sx={{ position: "absolute", top: 325, width: "100%" }}
                >
                  <Stack
                    direction={"row"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <Typography gutterBottom variant="h6" component="div">
                      {item.productTitle}
                    </Typography>
                    <Typography variant="subtitle1" component="p">
                      ${item.productPrice}
                    </Typography>
                  </Stack>

                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.productDiscription}
                  </Typography>
                </CardContent>

                <CardActions sx={{ justifyContent: "space-between" }}>
                  <Button
                    onClick={() => {
                      handleClickOpen();
                      setClickedProduct(item);
                    }}
                    size="large"
                    sx={{ textTransform: "capitalize" }}
                  >
                    <AddShoppingCartOutlinedIcon
                      fontSize="small"
                      sx={{ mr: 1 }}
                    />
                    Sepete Ekle
                  </Button>
                  <Rating
                    name="read-only"
                    value={parseFloat(item.productRating)}
                    precision={0.5}
                    readOnly
                  />
                </CardActions>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </Stack>

      <Dialog
        sx={{
          ".MuiPaper-root": { minWidth: { md: "95%", lg: 860 } },
          height: "100vh",
        }}
        open={open}
        onClose={handleClose}
        aria-labelledby="product-details-title"
        aria-describedby="product-details-description"
      >
        <IconButton
          onClick={handleClose}
          sx={{
            ":hover": { color: "red", rotate: "180deg", transition: "0.3s" },
            position: "absolute",
            top: 0,
            right: 10,
          }}
        >
          <Close />
        </IconButton>
        <ProductDetails clickedProduct={clickedProduct} />
      </Dialog>
    </Container>
  );
}

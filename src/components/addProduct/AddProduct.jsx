/* eslint-disable no-unused-vars */
import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Container,
  FormControl,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Footer from "../footer/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import { Send } from "@mui/icons-material";
import { toast, ToastContainer } from "react-toastify"; // Import Toastify
import "react-toastify/dist/ReactToastify.css"; // Import CSS

export default function AddProduct() {
  const theme = useTheme();
  const [categoryQuery, setCategoryQuery] = useState("productsCategory");
  const [options, setOptions] = useState([]);

  const [newProduct, setNewProduct] = useState({
    productTitle: "",
    productPrice: "",
    productRating: "",
    productCategory: "",
    productDiscription: "",
    productImg: "",
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const responseCategory = await axios.get(
          `http://127.0.0.1:8000/api/${categoryQuery}`
        );
        const uniqueCategories = [...new Set(responseCategory.data)];
        setOptions(uniqueCategories);
      } catch (err) {
        console.error("API çağrısı sırasında hata oluştu:", err);
      }
    };

    fetchCategories();
  }, []);

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/newProduct",
        {
          productTitle: newProduct.productTitle,
          productPrice: parseFloat(newProduct.productPrice),
          productDiscription: newProduct.productDiscription,
          productRating: parseFloat(newProduct.productRating),
          productCategory: newProduct.productCategory,
          productImg: newProduct.productImg || null,
        }
      );
      console.log("Product added successfully:", response.data);

      // Show success toast
      toast.success("Product added successfully!");

      // Reset the form fields
      setNewProduct({
        productTitle: "",
        productPrice: "",
        productRating: "",
        productCategory: "",
        productDiscription: "",
        productImg: "",
      });
    } catch (error) {
      console.error("Error adding product:", error.response.data);
      toast.error("Error adding product."); // Show error toast
    }
  };

  return (
    <>
      <Container sx={{ mt: 3.5, textAlign: "start" }}>
        <Box
          sx={{ background: theme.palette.bg.main, p: 5, borderRadius: "5px" }}
        >
          <Typography variant="h4" sx={{ pb: 5.5 }}>
            Add a new product
          </Typography>
          <Box>
            <Stack
              sx={{
                display: { md: "flex", sm: "flex" },
                flexDirection: { md: "row", sm: "column" },
                gap: 3,
                alignItems: "flex-start",
              }}
            >
              <TextField
                sx={{
                  width: { md: "32.3%", xs: "100%" },
                  mb: { xs: 1, md: 0 },
                }}
                label="Product Name"
                placeholder="Enter product name here"
                value={newProduct.productTitle}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, productTitle: e.target.value })
                }
              />
              <FormControl
                sx={{
                  width: { md: "32.3%", xs: "100%" },
                  mb: { xs: 1, md: 0 },
                }}
              >
                <InputLabel htmlFor="outlined-adornment-amount">
                  Amount
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-amount"
                  startAdornment={
                    <InputAdornment position="start">$</InputAdornment>
                  }
                  label="Amount"
                  value={newProduct.productPrice}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      productPrice: e.target.value,
                    })
                  }
                />
              </FormControl>
              <TextField
                sx={{
                  width: { md: "32.4%", xs: "100%" },
                  mb: { xs: 1, md: 0 },
                }}
                label="Rating"
                placeholder="Enter product rating here"
                value={newProduct.productRating}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    productRating: e.target.value,
                  })
                }
              />
            </Stack>

            <Box sx={{ py: 3.5 }}>
              <FormControl fullWidth>
                <InputLabel id="category-select-label">Category</InputLabel>
                <Select
                  labelId="category-select-label"
                  value={newProduct.productCategory}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      productCategory: e.target.value,
                    })
                  }
                  input={<OutlinedInput label="Category" />}
                >
                  {options.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>

            <Box sx={{ pb: 3.5 }}>
              <TextField
                label="Description"
                multiline
                rows={4}
                placeholder="Enter product description here"
                fullWidth
                value={newProduct.productDiscription}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    productDiscription: e.target.value,
                  })
                }
              />
            </Box>

            <Box>
              <TextField
                label="Image URL"
                multiline
                rows={1.2}
                placeholder="Enter the image link here"
                fullWidth
                value={newProduct.productImg}
                onChange={(e) =>
                  setNewProduct({ ...newProduct, productImg: e.target.value })
                }
              />
            </Box>

            <Button
              sx={{ my: 3.5 }}
              variant="contained"
              background={theme.palette.bg.main}
              endIcon={<Send />}
              onClick={handleSubmit}
            >
              Send
            </Button>
          </Box>
        </Box>
      </Container>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
        
      />
      <Footer />
    </>
  );
}

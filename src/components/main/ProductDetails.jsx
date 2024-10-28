/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function ProductDetails({ clickedProduct }) {
  console.log(clickedProduct)
  
  // eslint-disable-next-line no-unused-vars
  const [alignment, setAlignment] = useState("left");
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      
      sx={{ flexDirection: {xs:"column", sm: "column", md: "row" } ,gap:{sm:0,md:2}}}
    >
      <Box className="box-img" display={"flex"}>
        <img
          width={300}
          src={clickedProduct.productImg}
          style={{ backgroundColor: "white",borderRadius:"3px" }}
        />
      </Box>

      <Box
        sx={{
          textAlign: {xs:"center", sm: "center", md: "left" },
          py: { xs: "0px", sm: "15px" },
        }}
      >
        <Typography variant="h6">{clickedProduct.productTitle}</Typography>
        <Typography my={0.4} fontSize={"22px"} color={"crimson"} variant="h6">
          {clickedProduct.productPrice}
        </Typography>
        <Typography variant="body1">
          {clickedProduct.productDiscription}
        </Typography>

        <Button
          sx={{ textTransform: "capitalize", mb: { xs: 1, sm: 0 } }}
          variant="contained"
        >
          <AddShoppingCartOutlined sx={{ mr: 1 }} fontSize="small" />
          Buy now
        </Button>
      </Box>
    </Box>
  );
}

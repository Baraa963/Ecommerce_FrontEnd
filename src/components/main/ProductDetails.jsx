/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Box,
  Button,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";

export default function ProductDetails({ clickedProduct }) {
  console.log(clickedProduct)
  const [selectedImg, setSelectedImg] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [alignment, setAlignment] = useState("left");

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
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

        <Stack
          direction={"row"}
          gap={1}
          my={2}
          sx={{ justifyContent: { xs: "center", sm: "left" } }}
        >
          {/* <ToggleButtonGroup
            value={selectedImg}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{
              flexWrap: "wrap",
              justifyContent: "center",
              ".Mui-selected": {
                border: "2px solid royalblue !important",
                borderRadius: "5px !important",
                opacity:"1",
                backgroundColor: "initial",
              },
            }}
          >
            {clickedProduct.productImg.map((item, index) => {
              console.log(item);
              return (
                <ToggleButton
                  key={item.id}
                  value={index}
                  sx={{
                    width: "110px",
                    height: "110px",
                    mx: 1,
                    p: "0px",
                    opacity: "0.5",
                  }}
                  aria-label="left aligned"
                >
                  <img
                    onClick={() => {
                      setSelectedImg(index);
                    }}
                    style={{
                      borderRadius: 3,
                      backgroundColor: "white",
                      cursor: "pointer",
                    }}
                    height={"100%"}
                    width={"100%"}
                    src={clickedProduct.productImg}
                  />
                </ToggleButton>
              );
            })}
          </ToggleButtonGroup> */}
        </Stack>

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

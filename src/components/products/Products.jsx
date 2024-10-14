/* eslint-disable no-unused-vars */
import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useProducts } from "../../contexts/ProductsContext.jsx";
import Footer from "../footer/Footer";

export default function Products() {
  const { products } = useProducts(); // Get products from context

  useEffect(() => {
    console.log(products); // Log the shared products to console
  }, [products]);

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Container sx={{mt:3.5}}>
        <Stack
          direction={"row"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          sx={{ cursor: "pointer" }}
        >
          <AnimatePresence>
            {products.map((item) => (
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

                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {item.productDiscription}
                    </Typography>
                  </CardContent>

                  <CardActions sx={{ justifyContent: "space-between" }}>
                    <Button
                      onClick={() => {
                        // handleClickOpen();
                        // setClickedProduct(item);
                      }}
                      size="large"
                      sx={{ textTransform: "capitalize" }}
                    >
                      <AddShoppingCartOutlined
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
      </Container>
      <Footer />
    </>
  );
}

import { Box, Button, Container, Link, Stack, Typography } from "@mui/material";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";

// import required modules
import { Pagination } from "swiper/modules";
import { useTheme } from "@emotion/react";
import IconSection from "./IconSection";

export default function Hero() {
  const theme = useTheme();
  const sliderData = [
    { text: "MEN", link: "src/images/banner-15.jpg" },
    { text: "WOMEN", link: "src/images/banner-25.jpg" },
  ];
  return (
    <Container>
      <Box
        sx={{ pt: 4, mt: 2.5, display: "flex", alignItems: "center", gap: 2 }}
      >
        <Swiper
          loop={true}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {sliderData.map((item) => {
            return (
              <SwiperSlide key={item.link} className="parent-slider">
                <img src={item.link} />
                <Box
                  sx={{
                    [theme.breakpoints.up("sm")]: {
                      position: "absolute",
                      left: "10%",
                      textAlign: "left",
                    },
                    [theme.breakpoints.down("md")]: {
                      pt: 4,
                      pb: 6,
                    },
                  }}
                >
                  <Typography sx={{ color: "#222" }} variant="h6">
                    LIFESTYLE COLLECTION
                  </Typography>

                  <Typography
                    sx={{ color: "#222", fontWeight: "400", my: 1 }}
                    variant="h4"
                  >
                    {item.text}
                  </Typography>

                  <Stack
                    sx={{ justifyContent: { xs: "center", sm: "left" } }}
                    direction={"row"}
                    alignItems={"center"}
                  >
                    <Typography sx={{ color: "#333", mr: 1 }} variant="h5">
                      SALE UP TO
                    </Typography>

                    <Typography sx={{ color: "#D23F57" }} variant="h5">
                      30% OFF
                    </Typography>
                  </Stack>

                  <Typography
                    sx={{ color: "#000", fontWeight: 300, my: 1 }}
                    variant="body1"
                  >
                    Get Free Shipping On Orders Over $99.00
                  </Typography>
                  <Button
                    sx={{
                      px: 5,
                      py: 1,
                      mt: 2,
                      backgroundColor: "#222",
                      boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      color: "#fff",
                      borderRadius: "1px",
                      "&:hover": {
                        bgcolor: "#151515",
                        boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                      },
                    }}
                    variant="contained"
                  >
                    Shop Now
                  </Button>
                </Box>
              </SwiperSlide>
            );
          })}
        </Swiper>

        <Box
          sx={{
            display: {
              xs: "none",
              md: "block",
              minWidth: "26.6%",
            },
          }}
        >
          <Box sx={{ position: "relative", mt: 1 }}>
            <img src="src\images\banner-17.jpg" width={"100%"} />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2B3445", fontSize: "18px" }}
              >
                NEW ARRIVALS
              </Typography>

              <Typography
                variant="caption"
                sx={{ color: "#2B3445", lineHeight: "16px", mt: 1 }}
              >
                SUMMER
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: "#2B3445", lineHeight: "16px", mt: 1 }}
              >
                SALE 20% OFF
              </Typography>

              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": { color: "#D23F57" },
                }}
                href="#"
                underline="none"
              >
                shop new
                <ArrowForwardOutlinedIcon />
              </Link>
            </Stack>
          </Box>

          <Box sx={{ position: "relative" }}>
            <img src="src\images\banner-16.jpg" width={"100%"} />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: 31,
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2B3445", fontSize: "18px" }}
              >
                GAMING $K
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: "#2B3445", lineHeight: "16px", mt: 1 }}
              >
                DESKTOP &
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: "#2B3445", lineHeight: "16px", mt: 1 }}
              >
                LAPTOPS
              </Typography>

              <Link
                sx={{
                  color: "#2B3445",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  transition: "0.2s",
                  "&:hover": { color: "#D23F57" },
                }}
                href="#"
                underline="none"
              >
                shop new
                <ArrowForwardOutlinedIcon />
              </Link>
            </Stack>
          </Box>
        </Box>
      </Box>
      <IconSection />
    </Container>
  );
}

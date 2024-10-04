import "./App.css";
import Header1 from "./components/header/Header1";
import Header2 from "./components/header/Header2";
import Header3 from "./components/header/Header3";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/hero/Hero";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";
import { motion } from "framer-motion";
import { ProductsProvider } from "./contexts/ProductsContext.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./components/products/Products.jsx";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ProductsProvider>
          <CssBaseline />
          <Router>
            <motion.div
              key={theme.palette.mode}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <Header1 />
              <Header2 />
              <Header3 />

              {/* Define your Routes here */}
              <Routes>
                <Route
                  path="/"
                  element={
                    <Box bgcolor={theme.palette.bg.main}>
                      <Hero />
                      <Main />
                      <Footer />
                    </Box>
                  }
                />
                <Route path="/products" element={<Products />} />
              </Routes>

              <ScrollToTop />
            </motion.div>
          </Router>
        </ProductsProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

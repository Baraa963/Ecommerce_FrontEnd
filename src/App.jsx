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
import { ProductsProvider } from "./contexts/ProductsContext";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Products from "./components/products/Products";
import AddProduct from "./components/addProduct/AddProduct";
import Login from "./components/login/Login";
import SignUp from "./components/signUp/SignUp";

function App() {
  const [theme, colorMode] = useMode();
  const location = useLocation(); // الحصول على المسار الحالي

  const isAuthRoute =
    location.pathname === "/login" || location.pathname === "/signUp";

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ProductsProvider>
          <CssBaseline />
          <motion.div
            key={theme.palette.mode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {/* عرض الهيدرات فقط إذا لم يكن المسار هو /login */}
            {!isAuthRoute && (
              <>
                <Header1 />
                <Header2 />
                <Header3 />
              </>
            )}

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
              <Route path="/addproducts" element={<AddProduct />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signUp" element={<SignUp />} />
            </Routes>

            <ScrollToTop />
          </motion.div>
        </ProductsProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

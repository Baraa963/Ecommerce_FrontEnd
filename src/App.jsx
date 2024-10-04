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


function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <motion.div
          key={theme.palette.mode}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Header1 />
          <Header2 />
          <Header3 />
          <Box bgcolor={theme.palette.bg.main}>
            <Hero />
            <Main />
            <Footer />
          </Box>
          <ScrollToTop />
        </motion.div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

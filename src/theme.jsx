import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

// Temaya göre design tokenları
export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          ListColor: {
            main: "#F6F9FC",
          },
          bg: {
            main: "#F6F6F6",
          },
          // Light mode için palette değerleri
          text: {
            primary: "#2B3445",
          },
          neutral: {
            main: "#64748B",
          },
          favColor: {
            main: grey[300],
          },
        }
      : {
          ListColor: {
            main: "#252b32",
          },
          bg: {
            main: "#1D2021",
          },
          // Dark mode için palette değerleri
          neutral: {
            main: "#64748B",
          },
          favColor: {
            main: grey[800],
          },
          text: {
            primary: "#fff",
          },
        }),
  },
});

// ColorModeContext
export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

// Custom hook for mode
export const useMode = () => {
  // LocalStorage'dan mode'u alıyoruz
  const [mode, setMode] = useState(
    localStorage.getItem("mode") ? localStorage.getItem("mode") : "light"
  );

  // Temayı değiştirme fonksiyonu
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          const newMode = prevMode === "light" ? "dark" : "light";
          localStorage.setItem("mode", newMode); // Mode'u localStorage'a kaydet
          return newMode;
        });
      },
    }),
    []
  );

  // MUI temasını oluşturma
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return [theme, colorMode];
};

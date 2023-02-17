import { createTheme } from "@mui/material/styles";

export const shades = {
  skyBlue: {
    100: "#e7f5fb",
    200: "#cfebf7",
    300: "#b7e2f3",
    400: "#9fd8ef",
    500: "#87ceeb",
    600: "#6ca5bc",
    700: "#517c8d",
    800: "#36525e",
    900: "#1b292f",
  },
  blue: {
    100: "#ccccff",
    200: "#9999ff",
    300: "#6666ff",
    400: "#3333ff",
    500: "#0000ff",
    600: "#0000cc",
    700: "#000099",
    800: "#000066",
    900: "#000033",
  },
  black: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000",
  },
  primary: {
    100: "#cccccc",
    200: "#999999",
    300: "#666666",
    400: "#333333",
    500: "#000000",
    600: "#000000",
    700: "#000000",
    800: "#000000",
    900: "#000000",
  },
  secondary: {
    100: "#f7ccd2",
    200: "#ef99a4",
    300: "#e66677",
    400: "#de3349",
    500: "#d6001c",
    600: "#ab0016",
    700: "#800011",
    800: "#56000b",
    900: "#2b0006",
  },
  neutral: {
    100: "#f5f5f5",
    200: "#ecebeb",
    300: "#e2e1e1",
    400: "#d9d7d7",
    500: "#cfcdcd",
    600: "#a6a4a4",
    700: "#7c7b7b",
    800: "#535252",
    900: "#292929",
  },
  yellow: {
    100: "#ffffcc",
    200: "#ffff99",
    300: "#ffff66",
    400: "#ffff33",
    500: "#ffff00",
    600: "#cccc00",
    700: "#999900",
    800: "#666600",
    900: "#333300",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: shades.primary[500],
    },
    secondary: {
      main: shades.secondary[500],
    },
    neutral: {
      dark: shades.neutral[700],
      main: shades.neutral[500],
      light: shades.neutral[100],
    },
  },
  typography: {
    fontFamily: ["Fauna One", "sans-serif"].join(","),
    fontSize: 11,
    h1: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 48,
    },
    h2: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 36,
    },
    h3: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 20,
    },
    h4: {
      fontFamily: ["Cinzel", "sans-serif"].join(","),
      fontSize: 14,
    },
  },
});

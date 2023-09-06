import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { IconButton, ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const root = ReactDOM.createRoot(document.getElementById("root"));

// const lightTheme = createTheme({
//   typography: {
//     fontFamily: "Poppins",
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: {
//         "@font-face": {
//           fontFamily: "Poppins",
//         },
//         body: {
//           fontSize: "3rem",
//         },
//       },
//     },
//   },
//   palette: {
//     primary: {
//       main: "#D84773",
//       light: "#E78DA9",
//       dark: "#D84773",
//     },
//     secondary: {
//       main: "#E78DA9",
//       light: "#8B73A0",
//       dark: "#E78DA9",
//     },
//   },
//   mode: "light",
// });

// const darkTheme = createTheme({
//   typography: {
//     fontFamily: "Poppins",
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: {
//         "@font-face": {
//           fontFamily: "Poppins",
//         },
//         body: {
//         },
//       },
//     },
//   },
//   palette: {
//     primary: {
//       main: "#1a1625",
//       light: "#000",
//       dark: "#D84773",
//     },
//     secondary: {
//       main: "#000",
//       light: "#8B73A0",
//       dark: "#E78DA9",
//     },
//     text: {
//       primary: '#000', // Font color for primary text
//       secondary: '#666', // Font color for secondary text
//     },
//   },
//   mode: "dark",
// });



// function ThemeToggle() {
//   const [isDarkMode, setIsDarkMode] = useState(true);
//   const [theme, setTheme] = useState(false)

//   const toggleTheme = () => {
//     setIsDarkMode(!isDarkMode);
//   };

//   return (
//     <div>
//       <IconButton onClick={toggleTheme}>
//         {isDarkMode ? <Brightness7Icon /> : <Brightness4Icon />}
//       </IconButton>
//       <ThemeProvider theme={darkTheme}>
//         <CssBaseline />
//         <App />
//       </ThemeProvider>
//     </div>
//   );
// }

root.render(
  <React.StrictMode>
    {/* <ThemeProvider theme={darkTheme}> */}
      <App />
    {/* </ThemeProvider> */}
  </React.StrictMode>
);

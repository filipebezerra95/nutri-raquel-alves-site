import React from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyles } from "./styles/GlobalStyles.js";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme.js";
import router from "./routes.jsx";

createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyles />
      <RouterProvider router={router} />
    </>
  </ThemeProvider>,
);

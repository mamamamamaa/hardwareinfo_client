import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

import { App } from "./App";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { AuthProvider } from "./providers";

console.log("dasdasdasddasdas");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter basename="/">
    <ThemeProvider theme={createTheme()}>
      <AuthProvider>
        <CssBaseline />
        <App />
      </AuthProvider>
    </ThemeProvider>
  </BrowserRouter>
);

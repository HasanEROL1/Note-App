import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import store, {persistor}from "./redux/store.ts";
import { PersistGate } from "redux-persist/integration/react";

// MUI 'ın tema sistemi
const darkTheme = createTheme({
  palette:{
    mode: "dark",
    primary:{main:"#fff"},
    secondary: {main:"rgb(105,105,105)"}
  }

})

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
  <ThemeProvider theme={darkTheme}>
    <CssBaseline>
        <App/>
    </CssBaseline>
  </ThemeProvider>
      </PersistGate>
    </Provider>
  </StrictMode>
);

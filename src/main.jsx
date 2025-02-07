import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import LanguageProvider from "./context/LanguageProvider.jsx";
import MediaProvider from "./context/MediaProvider.jsx";
import ScrollProvider from "./context/ScrollProvider.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        {/* <MediaProvider> */}
        {/* <ScrollProvider> */}
        <App />
        {/* </ScrollProvider> */}
        {/* </MediaProvider> */}
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);

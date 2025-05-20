import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
// import LanguageProvider from "./context/LanguageProvider.jsx";
import MediaProvider from "./context/MediaProvider.jsx";
import ScrollProvider from "./context/ScrollProvider.jsx";
import SlowScrollContainer from "./components/SlowScrollContainer.jsx";
import HeaderProvider from "./context/HeaderProvider.jsx";
import LanguageProvider from "./context/LanguageProvider.jsx";
import OnloadProvider from "./context/OnloadProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <HeaderProvider>
        {/* <OnloadProvider> */}
        <LanguageProvider>
          <App />
        </LanguageProvider>
        {/* </OnloadProvider> */}
      </HeaderProvider>
    </BrowserRouter>
  </StrictMode>
);

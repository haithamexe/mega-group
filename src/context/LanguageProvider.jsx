import React, { useEffect, useState, useContext, createContext } from "react";
import { getLanguage } from "../utils/languages";

const LanguageContext = createContext();

export const useLanguageContext = () => {
  return useContext(LanguageContext);
};

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const countryToLanguage = {
    TR: "tr",
    AE: "ar",
    SA: "ar",
    QA: "ar",
    OM: "ar",
    BH: "ar",
    IQ: "ar",
    KW: "ar",
    DZ: "ar",
    EG: "ar",
    JO: "ar",
    LB: "ar",
    LY: "ar",
    MA: "ar",
    MR: "ar",
    PS: "ar",
    SY: "ar",
    TN: "ar",
    YE: "ar",
    KM: "ar",
  };

  const setLanguageFunction = (language) => {
    const langFormated = getLanguage(language);
    setLanguage(langFormated);
    localStorage.setItem("language", language.toLowerCase());
  };

  useEffect(() => {
    const detectLanguage = async () => {
      try {
        const localLanguage = localStorage.getItem("language");
        if (localLanguage) {
          const langFormated = getLanguage(localLanguage);
          console.log("localLanguage", langFormated);
          setLanguage(langFormated);
          return;
        }
        const requestOptions = {
          method: "GET",
          redirect: "follow",
        };
        const response = await fetch(
          `https://api.ipgeolocation.io/v2/ipgeo?apiKey=${
            import.meta.env.VITE_IP_GEOLOCATION_API_KEY
          }`,
          requestOptions
        );

        const data = await response.json();
        const country = data.location.country_code2;
        const lang = countryToLanguage[country] || "en";
        setLanguageFunction(lang);
      } catch {
        const langFormated = getLanguage("ar");
        setLanguage(langFormated);
        console.error("Failed to detect language");
      }
    };

    detectLanguage();
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (language.language === "ar") {
      root.setAttribute("lang-dir", "rtl");
    } else {
      root.setAttribute("lang-dir", "ltr");
    }

    if (language.language === "tr") {
      root.setAttribute("lang-type", "long");
    } else {
      root.setAttribute("lang-type", "normal");
    }
  }, [language]);

  const values = {
    language,
    setLanguage: setLanguageFunction,
  };

  return (
    <LanguageContext.Provider value={values}>
      {children}
    </LanguageContext.Provider>
  );
}

export default LanguageProvider;

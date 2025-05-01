import React, { useEffect, useState, useContext, createContext } from "react";
import { getLanguage } from "../utils/languages";

const LanguageContext = createContext();

const useLanguageContext = () => {
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
    localStorage.setItem("language", language);
    const langFormated = getLanguage(language);
    setLanguage(langFormated);
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
        const response = await fetch("https://ipapi.co/json");
        const data = await response.json();
        const country = data.country_code;
        console.log("country", country);
        const lang = countryToLanguage[country] || "en";
        console.log("language", lang);
        setLanguageFunction(lang);
      } catch {
        const langFormated = getLanguage("ar");
        setLanguage(langFormated);
        console.error("Failed to detect language");
      }
    };

    detectLanguage();
  }, []);

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

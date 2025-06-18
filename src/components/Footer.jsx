import { useState, useRef, useEffect } from "react";
import "../styles/main.css";
import { Languages, Globe } from "lucide-react";
import { useLanguageContext } from "../context/LanguageProvider";
import { Link } from "react-router-dom";

function Footer() {
  const [dropDownOpen, setDropDownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { setLanguage, language } = useLanguageContext();

  useEffect(() => {
    const handleClickOutside = (event) => {
      console.log(event);
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        event.target.className != "languages-icon-footer"
      ) {
        setDropDownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className={"footer-container"}>
      <div className="footer">
        <section
          className={
            language.language === "ar"
              ? "footer-body direction-right"
              : "footer-body"
          }
        >
          <div className="footer-socials">
            <div className="footer-logo">
              <img
                src="/images/mega-logo-blue-white.png"
                alt="Mega Group Logo"
              />
            </div>
          </div>
          <div className={"footer-links"}>
            <div className="footer-link">
              <Link to="/">
                <h1>{language?.Footer?.home?.title}</h1>
              </Link>
              {language?.Footer?.home?.links.map((link, index) => (
                <Link to={`/`}>
                  <p>{link}</p>
                </Link>
              ))}
            </div>
            {/* <div className="footer-link">
              <Link to="/">
                <h1>{language?.Footer?.home?.title}</h1>
              </Link>
              {language?.Footer?.home?.links.map((link, index) => (
                <Link key={index} to={`/`}>
                  <p>{link}</p>
                </Link>
              ))}
            </div> */}
            <div className="footer-link footer-services-link">
              <Link to="/services">
                <h1>{language?.Footer?.services?.title}</h1>
              </Link>
              {language?.Footer?.services?.links.map((link, index) => (
                <Link key={index} to="/services">
                  <p>{link}</p>
                </Link>
              ))}
            </div>
            <div className="footer-link">
              <Link to="/prices">
                <h1>{language?.Footer?.prices?.title}</h1>
              </Link>
              {language?.Footer?.prices?.links.map((link, index) => (
                <Link key={index} to="/prices">
                  <p>{link}</p>
                </Link>
              ))}
            </div>
            <div className="footer-link">
              <Link to="/ourwork">
                <h1>{language?.Footer?.our_work?.title}</h1>
              </Link>
              {language?.Footer?.our_work?.links.map((link, index) => (
                <Link key={index} to="/ourwork">
                  <p>{link}</p>
                </Link>
              ))}
            </div>
            <div className="footer-link">
              <Link to="/about">
                <h1>{language?.Footer?.about?.title}</h1>
              </Link>
              {language?.Footer?.about?.links.map((link, index) => (
                <Link to="/about" key={index}>
                  <p>{link}</p>
                </Link>
              ))}
            </div>
            <div className="footer-link">
              <Link to="/contact">
                <h1>{language?.Footer?.contact?.title}</h1>
              </Link>
              {language?.Footer?.contact?.links.map((link, index) => (
                <Link key={index} to="/contact">
                  <p>{link}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
        {/* <section className="footer-foot">
          <div className="footer-addressess">
            <div className="footer-address address-no-border">
              <h1>Libya</h1>
              <p>1234 Street Name</p>
              <p>trablus, al3asma, 12345</p>
              <p>276 33 10 535 90+</p>
            </div>
            <div className="footer-address">
              <h1>Turkey</h1>
              <p>1234 Street Name</p>
              <p>Istanbul, bubuduzu, 12345</p>
              <p>276 33 10 535 90+</p>
            </div>
            <div className="footer-rights">
              <h1>Mega Group &copy; 2021-{new Date().getFullYear()}</h1>
            </div>
          </div>
        </section> */}
        <section className="footer-foot">
          <div className="footer-social-links">
            <a href="https://www.instagram.com/megagroup.ly/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/megagroup.ly" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="https://wa.me/905351033276" target="_blank">
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
          <div className="footer-rights">
            <div className="footer-rights-container">
              <h1>Mega Group &copy; 2021-{new Date().getFullYear()}</h1>
              {/* <Languages
                className="languages-icon-footer"
                onClick={() => alert("Language change is not available yet")}
                size={25}
              /> */}
              <h1
                className="languages-icon-footer"
                onClick={() => setDropDownOpen((prev) => !prev)}
                style={{
                  cursor: "pointer",
                }}
              >
                <Globe className="languages-icon-footer-globe" />
                {language.language === "en"
                  ? "Language"
                  : language.language === "tr"
                  ? "Dil"
                  : "اللغة"}
              </h1>
              {dropDownOpen && (
                <div className="languages-dropdown-footer" ref={dropdownRef}>
                  <div
                    className="languages-dropdown-item"
                    onClick={() => {
                      setLanguage("ar");
                      setDropDownOpen(false);
                    }}
                  >
                    <p>عربي</p>
                  </div>
                  <div
                    className="languages-dropdown-item"
                    onClick={() => {
                      setLanguage("en");
                      setDropDownOpen(false);
                    }}
                  >
                    <p> English </p>
                  </div>
                  <div
                    className="languages-dropdown-item"
                    onClick={() => {
                      setLanguage("tr");
                      setDropDownOpen(false);
                    }}
                  >
                    <p>Türkçe</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Footer;

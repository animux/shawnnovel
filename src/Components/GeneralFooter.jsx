import React from "react";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import "./comp.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import {
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const GeneralFooter = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const d = new Date();
  return (
    <>
      {/* Disclaimer | Copyright © 2020-2021 Shawn Novel & Associates | Developed by POSH Studio */}
      {!isTabletOrMobileDevice ? (
        <div className="gFooter">
          <div className="gFooterWrapper">
            <div className="bottomLinks">
              <NavLink
                style={{
                  textDecoration: "none",
                  color: "#fafafa",
                }}
                to={`/disclaimer`}
              >
                <p>Disclaimer</p>
              </NavLink>
            </div>
            <p>Copyright © {d.getFullYear()} Shawn Novel & Associates</p>
            <p style={{ color: "rgba(255, 255, 255, 0.815)" }}>
              Developed by
              <span>
                <a
                  href="https://www.aveneur.com"
                  style={{
                    textDecoration: "none",
                    color: "#177e70",
                    cursor: "pointer",
                  }}
                >
                  {" "}
                  Aveneur
                </a>
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div className="">
          {/* GENERAL FOOTER */}
          <div className="gFooterHM">
            <div className="gFooterWrapper">
              <div className="bottomLinks">
                <NavLink
                  style={{
                    textDecoration: "none",
                    color: "#fafafa",
                  }}
                  to={`/disclaimer`}
                >
                  <p>Disclaimer</p>
                </NavLink>
              </div>
              <p>Copyright © {d.getFullYear()}<br/>Shawn Novel & Associates</p>

              <p style={{ color: "rgba(255, 255, 255, 0.815)" }}>
                Developed by
                <span>
                  <a
                    href="https://www.aveneur.com"
                    style={{
                      textDecoration: "none",
                      color: "#177e70",
                      cursor: "pointer",
                    }}
                  >
                    {" "}
                    Aveneur
                  </a>
                </span>
              </p>
              <div className="navIconsM">
                <h3>
                  <a href="https://www.facebook.com/ShawnNovelandAssociates">
                    <FaFacebook />
                  </a>
                </h3>
                <h3>
                  <a href="mailto: admin@shawnnovel.com">
                  <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                </h3>
                <h3>
                  <a href="https://www.linkedin.com/company/shawn-novel-associates/">
                    <FaLinkedinIn />
                  </a>
                </h3>
              </div>
            </div>
          </div>
        
        </div>
      )}
    </>
  );
};

export default GeneralFooter;

import { observer } from "mobx-react-lite";
import React, { useEffect, useState, useContext } from "react";
import "./comp.scss";
import "./serviceDropdown.scss";
import { useMediaQuery } from "react-responsive";
import Dropdown from "./Dropdown";
import { RootStoreContext } from "../stores/rootStore";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import {
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const store = useContext(RootStoreContext);
  const { setDropdown, dropdown, burger, setBurger } = store.navStore;
  const { getServices } = store.commonStore;

  useEffect(() => {
    getServices();
  }, [getServices]);

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const handleHover = () => {
    setDropdown(true);
  };
  const handleHoverClose = () => {
    setDropdown(false);
  };
  const handleClick = () => {
    setDropdown(!dropdown);
  };
  const handleBurger = () => {
    setBurger();
  };

  const [navbarbg, setNavbarbg] = useState(false);

  const changebg = () => {
    if (window.scrollY >= "10") {
      setNavbarbg(true);
    } else {
      setNavbarbg(false);
    }
  };

  window.addEventListener("scroll", changebg);

  return (
    <>
      {!isTabletOrMobileDevice ? (
        <>
          <div
            className={navbarbg ? "TopBarBg active" : "TopBar"}
            onMouseDown={handleHoverClose}
          >
            <div className="TopCont">
              <div className="TopContL">
                <h4>260/C Tejgaon I/A, Dhaka-1208</h4>
              </div>
              <div className="TopContC">
                <h4>
                  <a
                    href="mailto: admin@shawnnovel.com"
                    style={{
                      textDecoration: "none",
                      color: "rgb(47, 47, 47)",
                      fontSize: "0.8rem",
                    }}
                  >
                    admin@shawnnovel.com
                  </a>
                </h4>
              </div>
              <div className="TopContR">
                <h3>
                  <a href="https://www.facebook.com/ShawnNovelandAssociates">
                    <FaFacebook />
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
          <div className={navbarbg ? "navContainer active" : "navContainer"}>
            <div className="logoContainer">
              <NavLink
                style={{ textDecoration: "none", color: "rgb(76, 76, 76)" }}
                to="/"
              >
                <div className={navbarbg ? "logoWrapperAfter" : "logoWrapper"}>
                  <h2>Shawn Novel & Associates</h2>
                </div>
              </NavLink>
            </div>
            <nav className="menuContainer">
              <h4 onMouseOver={handleHoverClose}>
                <NavLink
                  style={{ textDecoration: "none", color: "rgb(76, 76, 76)" }}
                  to="/aboutUs"
                >
                  About Us
                </NavLink>
              </h4>
              <div className="menuContainerService">
                <h4
                  onMouseOver={handleHover}
                  onClick={handleClick}
                  style={{ textDecoration: "none", color: "rgb(76, 76, 76)" }}
                >
                  Services
                </h4>
              </div>
              <h4 onMouseOver={handleHoverClose}>
                <NavLink
                  style={{ textDecoration: "none", color: "rgb(76, 76, 76)" }}
                  to="/people"
                >
                  People
                </NavLink>
              </h4>
              <h4 onMouseOver={handleHoverClose}>
                <NavLink
                  style={{ textDecoration: "none", color: "rgb(76, 76, 76)" }}
                  to="/clients"
                >
                  Clients
                </NavLink>
              </h4>
              <h4 onMouseOver={handleHoverClose}>
                <NavLink
                  style={{ textDecoration: "none", color: "rgb(76, 76, 76)" }}
                  to="/newsList"
                >
                  News & Publications
                </NavLink>
              </h4>
              <h4 onMouseOver={handleHoverClose}>
                <NavLink
                  style={{ textDecoration: "none", color: "rgb(76, 76, 76)" }}
                  to="/joinUs"
                >
                  Join Us
                </NavLink>
              </h4>
              <h4 onMouseOver={handleHoverClose}>
                <NavLink
                  style={{ textDecoration: "none", color: "rgb(76, 76, 76)" }}
                  to="/contactUs"
                >
                  Contact Us
                </NavLink>
              </h4>
            </nav>
          </div>
          {dropdown && <Dropdown />}
        </>
      ) : (
        <>
          <div
            className={navbarbg ? "navMobContainer active" : "navMobContainer"}
          >
            <div className="logoContainerM">
              <NavLink style={{ textDecoration: "none", color: "#000" }} to="/">
                <h6>Shawn Novel & Associates</h6>
              </NavLink>
            </div>

            <div className="hamburger" onClick={handleBurger}>
              <div className="lines"></div>
              <div className="lines"></div>
              <div className="lines"></div>
            </div>
          </div>
          {burger && (
            <div className="MobNavOpen">
              <div className="logoContainerM2" onClick={handleBurger}>
                <NavLink
                  style={{ textDecoration: "none", color: "#000" }}
                  to="/"
                >
                  <h2>Shawn Novel & Associates</h2>
                </NavLink>
              </div>
              <div className="cross" onClick={handleBurger}></div>
              <div className="MobContainer">
                {" "}
                <nav className="menuContainerM">
                  <h4 onMouseOver={handleHoverClose} onClick={handleBurger}>
                    <NavLink
                      style={{ textDecoration: "none", color: "#fafafa" }}
                      to="/aboutUs"
                    >
                      About Us
                    </NavLink>
                  </h4>
                  <h4 onClick={handleClick} >
                  <NavLink onClick={handleClick}
                      style={{ textDecoration: "none", color: "#fafafa" }}
                      to=""
                    >
                    Services
                    </NavLink>
                  </h4>
                  <h4 onMouseOver={handleHoverClose} onClick={handleBurger}>
                    <NavLink
                      style={{ textDecoration: "none", color: "#fafafa" }}
                      to="/people"
                    >
                      People
                    </NavLink>
                  </h4>
                  <h4 onMouseOver={handleHoverClose} onClick={handleBurger}>
                    <NavLink
                      style={{ textDecoration: "none", color: "#fafafa" }}
                      to="/clients"
                    >
                      Clients
                    </NavLink>
                  </h4>
                  <h4 onMouseOver={handleHoverClose} onClick={handleBurger}>
                    <NavLink
                      style={{ textDecoration: "none", color: "#fafafa" }}
                      to="/newsList"
                    >
                      News & Publications
                    </NavLink>
                  </h4>
                  <h4 onMouseOver={handleHoverClose} onClick={handleBurger}>
                    <NavLink
                      style={{ textDecoration: "none", color: "#fafafa" }}
                      to="/joinUs"
                    >
                      Join Us
                    </NavLink>
                  </h4>
                  <h4 onMouseOver={handleHoverClose} onClick={handleBurger}>
                    <NavLink
                      style={{ textDecoration: "none", color: "#fafafa" }}
                      to="/contactUs"
                    >
                      Contact Us
                    </NavLink>
                  </h4>
                </nav>
              </div>
              {dropdown && <Dropdown />}
            </div>
          )}
        </>
      )}
    </>
  );
};

export default observer(Navbar);

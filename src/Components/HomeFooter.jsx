import { observer } from "mobx-react-lite";
import React, { useEffect, useContext } from "react";
import { RootStoreContext } from "../stores/rootStore";
import "./comp.scss";
import { useMediaQuery } from "react-responsive";
import { NavLink } from "react-router-dom";
import Slider from "react-slick";
import R2 from "./r1.jpg";
import R1 from "./r2.png";
import R3 from "./r3.jpg";
import R5 from "./R4.png";
import R4 from './r5.png';
import "../index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import {
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const HomeFooter = () => {
  const store = useContext(RootStoreContext);
  const { newsList, getNewsList, loadingNewsList } = store.commonStore;
  const d = new Date();
  useEffect(() => {
    getNewsList();
  }, [getNewsList]);
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  const tickersettings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    autoplaySpeed: 1500,
    arrows: false,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    beforeChange: function (currentSlide, nextSlide) {
      console.log("before change", currentSlide, nextSlide);
    },
    afterChange: function (currentSlide) {
      console.log("after change", currentSlide);
    },
  };
  const ChambersSetting = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    fade: true,
    speed: 2000,
    autoplaySpeed:8000,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    swipeToSlide: true,
  };

  return (
    <>
      {!isTabletOrMobileDevice ? (
        <>
          <div className="homeFooter">
            <div className="homeFooterCenter">
              <h1>News & Publications</h1>
              <div className="tickrWrapper">
                {/* HERE IS THE TICKER MADE WITH REACT SLICK */}

                {loadingNewsList ? (
                  <div>
                    <h1>Loading</h1>
                  </div>
                ) : (
                  <>
                    <Slider className="slder" {...tickersettings}>
                      {newsList ? (
                        newsList.results.map((item, index) => {
                          return (
                            <div key={index} className="newsBoxHome">
                              <NavLink
                                style={{
                                  textDecoration: "none",
                                  color: "#000",
                                }}
                                to={`/news/${item.id}`}
                              >
                                <p>{item.heading}</p>
                              </NavLink>
                            </div>
                          );
                        })
                      ) : (
                        <div style={{ height: "100px", width: "100px" }}>
                          {" "}
                          Nothing to display
                        </div>
                      )}
                    </Slider>
                  </>
                )}
              </div>
            </div>
            <div className="homeFooterRight">
              <Slider className="slder" {...ChambersSetting}>
                <div className="chamberBox">
                  <img src={R1} />
                </div>
                <div className="chamberBox">
                  <img src={R2} />
                </div>
                <div className="chamberBox">
                  <img src={R3} />
                </div>
                <div className="chamberBox">
                  <img src={R4} />
                </div>
                <div className="chamberBox">
                  <img src={R5} />
                </div>
              </Slider>
            </div>
          </div>
          {/* GENERAL FOOTER */}
          <div className="gFooterH">
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
        </>
      ) : (
        <div className="homeFooterM">
          <div className="homeFooterCenterM">
            <h2>News & Publications</h2>
            <div className="tickrWrapperM">
              {/* HERE IS THE TICKER MADE WITH REACT SLICK */}

              {loadingNewsList ? (
                <div> loading</div>
              ) : (
                <>
                  <Slider className="slderM" {...tickersettings}>
                    {newsList ? (
                      newsList.results.map((item, index) => {
                        return (
                          <div key={index} className="newsBoxHomeM">
                            <NavLink
                              style={{ textDecoration: "none", color: "#000" }}
                              to={`/news/${item.id}`}
                            >
                              <p>{item.heading}</p>
                            </NavLink>
                          </div>
                        );
                      })
                    ) : (
                      <div style={{ height: "100px", width: "100px" }}>
                        {" "}
                        Nothing to display
                      </div>
                    )}
                  </Slider>
                </>
              )}
            </div>
          </div>
          <div className="homeFooterRightM">
            {/* <h1>Contact Us</h1> */}
            <div className="AppointmentContainer">
              {/* <div className="cinfo">
                <h4>260/C Tejgaon I/A Dhaka, 1208</h4>
                <h4>admin@shawnnovel.com</h4>
              </div> */}
              <div className="CandP">
                <Slider className="slderM" {...ChambersSetting}>
                  <div className="chamberBoxM">
                    <img src={R1} />
                  </div>
                  <div className="chamberBoxM">
                    <img src={R2} />
                  </div>
                  <div className="chamberBoxM">
                    <img src={R3} />
                  </div>
                </Slider>
              </div>
            </div>
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
                <p>
                  Copyright © {d.getFullYear()}
                  <br />
                  Shawn Novel & Associates
                </p>

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
        </div>
      )}
    </>
  );
};

export default observer(HomeFooter);

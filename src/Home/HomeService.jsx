import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useContext, useEffect } from "react";
import { RootStoreContext } from "../stores/rootStore";
import "./homeService.scss";
import { observer } from "mobx-react-lite";
import "../Components/serviceDropdown.scss";
import "../index.scss";

import { useHistory } from "react-router-dom";

import { useMediaQuery } from "react-responsive";

function HomeService() {
  const store = useContext(RootStoreContext);
  const { setDropdown, dropdown } = store.navStore;
  const { services2, loadingServices } = store.commonStore;
  const history = useHistory();
  const settings = {
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    arrows: false,
  };
  const settingsM = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    arrows: false,
  };

  const handleClick = () => {
    setDropdown(!dropdown);
  };

  const handleGoToService = (item) => {
    console.log(item);
    console.log("going");
    history.push(`/service/${item.id}`);
  };
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  return (
    <>
      {!isTabletOrMobileDevice ? (
        <div className="homeServiceContainer">
          <div className="serviceLabel" onClick={handleClick}>
            <h1>Services at a Glance</h1>
          </div>
          <div>
            {!loadingServices ? (
              <Slider className="homeServiceSlider" {...settings}>
                {services2.map((item, index) => {
                  return (
                    <div key={index} className="homeServiceItem">
                      <h4
                        onClick={() => {
                          handleGoToService(item);
                        }}
                      >
                        {item.heading}
                      </h4>
                    </div>
                  );
                })}
              </Slider>
            ) : (
              <div className="homeServiceSlider">
                  <p>Loading</p>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="homeServiceContainerM">
          <div
            className="serviceLabelM"
            onClick={handleClick}
          >
            <h2>Services at a Glance</h2>
          </div>
          <div>
            {!loadingServices ? (
              <Slider className="homeServiceSliderM" {...settingsM}>
                {services2.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="homeServiceItemM"
                      onClick={() => {
                        handleGoToService(item);
                      }}
                    >
                      <h4>{item.heading}</h4>
                    </div>
                  );
                })}
              </Slider>
            ) : (
              <div className="homeServiceSliderM">
                  <p>Loading</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default observer(HomeService);

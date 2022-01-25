import React from "react";
import "./home.scss";
import { Fade } from "react-slideshow-image";
import Image from "./6.jpeg";
import Image2 from "./3.jpeg";
import Image3 from "./21.jpeg";
import SlideTexts from "../Components/SlideTexts";
import HomeService from "./HomeService";
import { SlideTextItem } from "../Components/SlideTextItem";
import HomeFooter from "../Components/HomeFooter";
import { useMediaQuery } from "react-responsive";

function Home() {
  const fadeImages = [Image, Image2, Image3];
  const fadeProps = {
    indicators: false,
    // indicators: i => (<div className="indicator"></div>)
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
  };
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  return (
    <>
      {!isTabletOrMobileDevice ? (
        <div className="homeHeight">
          <Fade {...fadeProps} className="mainContainer">
            {SlideTextItem.map((item, index) => (
              <div className="each-fade" key={index}>
                <div className="image-container">
                  {item.title === "Our Vision" ? (
                    <SlideTexts
                      item={item.title}
                      description={item.description}
                      color={item.color}
                    />
                  ) : item.title === "Our Goal" ? (
                    <SlideTexts
                      item={item.title}
                      description={item.description}
                      color={item.color}
                    />
                  ) : (
                    <SlideTexts
                      item={item.title}
                      description={item.description}
                      color={item.color}
                    />
                  )}
                  <img className="forFade" src={fadeImages[index]} />
                </div>
              </div>
            ))}
          </Fade>
          <HomeService />
        </div>
      ) : (
        <>
        <div className="homeHeightM">
          <Fade {...fadeProps} className="mainContainerM">
            {SlideTextItem.map((item, index) => (
              <div key={index}>
                <div className="image-containerM">
                  {item.title === "Our Vision" ? (
                    <SlideTexts
                      item={item.title}
                      description={item.description}
                      color={item.color}
                    />
                  ) : item.title === "Our Goal" ? (
                    <SlideTexts
                      item={item.title}
                      description={item.description}
                      color={item.color}
                    />
                  ) : (
                    ""
                  )}
                  <img className="forFade" src={fadeImages[index]} />
                </div>
              </div>
            ))}
          </Fade>
        </div>
          <HomeService />
        </>
      )}
      <HomeFooter />
    </>
  );
}

export default Home;

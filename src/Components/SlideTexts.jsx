import React from "react";
import { useMediaQuery } from "react-responsive";
import "./comp.scss";

function SlideTexts(props) {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  return (
    <>
      {!isTabletOrMobileDevice ? (
        <div
          className="ourBelief"
          style={{ backgroundImage: `${props.color}` }}
        >
          {/* FOR THE TITLE PART */}
          <div className="ourBeliefWrapper">
            <div className="title">
              <div className="titleBox">
                <h1>{props.item}</h1>
              </div>
            </div>
            {/* FOR THE EXCERPT PART */}
            <div className="excerpt">
              <div className="excerptBox">
                <p>{props.description}</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      ) : (
        <div
          className="ourBeliefM"
          style={{ backgroundImage: `${props.color}` }}
        >
          {/* FOR THE TITLE PART */}
          <div className="ourBeliefWrapperM">
            <div className="titleM">
              <div className="titleBoxM">
                <h1>{props.item}</h1>
              </div>
            </div>
            {/* FOR THE EXCERPT PART */}
            <div className="excerptM">
              <div className="excerptBoxM">
                <p>{props.description}</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
}

export default SlideTexts;

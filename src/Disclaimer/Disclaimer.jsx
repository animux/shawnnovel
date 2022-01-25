import React from "react";
import GeneralFooter from "../Components/GeneralFooter";
import "./disclaimer.scss";
import { useMediaQuery } from "react-responsive";
const Disclaimer = () => {
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <div className="Disclaimer">
          <h1>Disclaimer</h1>
          <p>
            The information, objects, commentary, publication, news, opinions
            and any other materials mentioned herein this website are provided
            only for general information purpose and does not amount to or
            intended as, legal advice to any person and / or entity, and should
            not be relied upon for that purpose. No material on this site is an
            invitation for lawyer-client relationship. Everyone visiting this
            website does so of their own accord for obtaining general
            information and transmission, receipt or use of this site does not
            constitute or create a lawyer-client relationship. This website is
            neither intended nor to be viewed as source for advertisement,
            solicitation, invitation or inducement. Shawn Novel & Associates is
            not responsible for any information on this website that contains
            materials prepared by third parties or for information contained on
            linked sites or for any reliance that may be placed upon them.
          </p>
        </div>
      ) : (
        <div className="DisclaimerM">
          <h1>Disclaimer</h1>
          <p>
            The information, objects, commentary, publication, news, opinions
            and any other materials mentioned herein this website are provided
            only for general information purpose and does not amount to or
            intended as, legal advice to any person and / or entity, and should
            not be relied upon for that purpose. No material on this site is an
            invitation for lawyer-client relationship. Everyone visiting this
            website does so of their own accord for obtaining general
            information and transmission, receipt or use of this site does not
            constitute or create a lawyer-client relationship. This website is
            neither intended nor to be viewed as source for advertisement,
            solicitation, invitation or inducement. Shawn Novel & Associates is
            not responsible for any information on this website that contains
            materials prepared by third parties or for information contained on
            linked sites or for any reliance that may be placed upon them.
          </p>
        </div>
      )}

      <GeneralFooter />
    </>
  );
};

export default Disclaimer;

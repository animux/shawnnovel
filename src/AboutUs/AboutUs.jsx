import { observer } from "mobx-react-lite";
import React from "react";
import "./aboutUs.scss";
import aboutImg from "./about.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import GeneralFooter from "../Components/GeneralFooter";
const AboutUs = () => {
  return (
    <>
      <div className="aboutUsContainer">
        <div
          className="aboutUsImage"
          style={{ backgroundImage: `url(${aboutImg})` }}
        ></div>
        <div className="aboutUsContent">
          <div className="aboutUsDescription">
            <h1>About Us</h1>
            <br />
            <p>
              Shawn Novel & Associates is a reputed law firm committed to
              providing excellent quality legal services to its clients. At our
              firm, we understand the needs of our clients and value them in the
              highest priority. Our expertise and experience are devoted to
              prompt delivery of professional legal services to our clients. We
              strive and ensure to protect and safeguard our clients’ interests
              through preventive measures. By the same token whenever needed, we
              are equally determined in adopting corrective measure for our
              clients to recover in cagey and volatile markets. With high level
              of standard, expertise, commitment and determination, we maintain
              an upfront position in representing clients in the national and
              international arena. We believe in leadership, creativity and
              extraordinary client service, and have developed teams of
              specialized lawyers to provide expert legal advice and
              representation to all our clients.
              <br />
              <br />
              Since its establishment, the firm has represented its corporate
              clients from incorporation to their pertinent legal matters,
              advising and addressing issues on company structure and
              shareholder’s rights, rectification of share registers and
              liquidation. We have successfully represented clients before Court
              on commercial issues, corporate and banking matters involving
              cheque fraud and contract enforcement. We are experienced in
              advising clients on laws and regulations pertaining to compliance.
              We represent and advise foreign corporations in government
              procurement contracts and projects. We advise companies in major
              industrial level point joint ventures and regularly advise, draft
              and carry out due diligence on employment issues in light of the
              prevailing labor laws and their subsequent amendments. Clients
              seek our advice in matters of securities and derivatives and
              compliance with SEC laws.
              <br />
              <br />
              We dispense legal opinions in areas of acquisition finance, asset
              finance, the global capital markets, project finance, real estate
              finance, restructuring and insolvency and trade, commodity and
              export finance.
              <br />
              <br />
              We pride in our extensive expertise in cross-border transactions
              and especially in the area of investment law. We support a
              plethora of startups in various stages of their business
              development from incubation to the advanced series of investments,
              both in local and international jurisdictions. Our investment
              advisory ranges from setting up cap tables for companies with a
              holding structure based abroad to advising on various forms of
              investment such as debt financing, equity financing, debt-equity
              swap, convertible notes, etc. We also work with various national
              and international angel investors, VC firms, accelerators in
              furthering the booming startup ecosystem in Bangladesh. Our
              affiliation with top law firms across the globe guarantees a
              full-service support from our side ranging from providing legal
              opinion to actual execution of the mandate in foreign soil.
              <br />
              <br />
              We are equipped to carry out extensive due diligence for property
              owners and take pride in representing them in real estate
              transactions and contentious claims. We also offer a full range of
              legal services to life and general insurance companies and
              represent them in litigation, ADR, arbitration and settlements.
              <br />
              <br />
              We are very much aware as to the growing number of disputes in the
              admiralty and the maritime arena by reason of Bangladesh Sea ports
              emerging as an important harbor in International Trade. We are
              well equipped to advise the clients in matters of admiralty and
              maritime law and have the requisite experience in handling cases
              of such nature. We are specialized in dealing with claims arising
              in conjunction and addition to the admiralty and maritime sectors
              extending to marine insurance. In cases of dispute and / or
              interpretation of clauses, we encourage and facilitate speedy and
              amicable settlements by means of ADR like negotiation, mediation
              and arbitration.
            </p>
          </div>
          <div className="aboutUsSidebar">
            <div>
              <p className="sidebar-heading">Shawn Novel & Associates</p>

              <p>
                <FontAwesomeIcon icon={faMapMarkerAlt} /> 260/C Tejgaon I/A,
                Dhaka- 1208
              </p>
              <p>
                <FontAwesomeIcon icon={faPhoneAlt} /> Tel: +88 (02) 88- 78565{" "}
              </p>
              <p>
                {" "}
                <FontAwesomeIcon icon={faEnvelope} />{" "}
                <a
                  href="mailto:admin@shawnnovel.com"
                  style={{ textDecoration: "none", color: "rgb(47,47,47)" }}
                >
                  admin@shawnnovel.com
                </a>{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="forBabout"></div>
        <GeneralFooter />
      </div>
    </>
  );
};

export default observer(AboutUs);

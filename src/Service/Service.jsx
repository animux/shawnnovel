import { observer } from "mobx-react-lite";
import React, { useEffect, useContext } from "react";
import { RootStoreContext } from "../stores/rootStore";
import "./service.scss";
import { useParams } from "react-router-dom";
import GeneralFooter from "../Components/GeneralFooter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";

const Service = () => {
  const { id } = useParams();
  console.log(id);
  const store = useContext(RootStoreContext);
  const { service, loadingService, getService } = store.commonStore;
  useEffect(() => {
    getService(id);
  }, [getService, id]);
  return (
    <>
      {/* <div className="nav"></div> */}
      <div className="serviceContainer">
        {loadingService ? (
          <div className="serviceContent" style={{ textAlign: "center" }}>
            loading
          </div>
        ) : (
          <>
            <div
              className="serviceImage"
              style={{
                backgroundImage: `url(${service ? service.image : ""})`,
              }}
            ></div>
            <div className="serviceContent">
              <div className="serviceDescription">
                <div className="forCol1">
                  <h1>{service ? service.heading : "None"}</h1>
                  <h4>{service ? service.type : "None"}</h4>
                </div>
                <p>{service ? (service.content.map((item, index) => 
                              <span key={index}>{item} <br /><br /></span>
                            )) : "None"}
                            </p>
              </div>
              <div className="serviceSidebar">
                <div className="forStick">
                  <p className="sidebar-heading">Shawn Novel & Associates</p>
                  <p>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> 260/C Tejgaon I/A,
                    Dhaka - 1208{" "}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPhoneAlt} /> Tel: +88 (02) 88-
                    78565{" "}
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} />{" "}
                    <a
                      href="mailto: admin@shawnnovel.com"
                      style={{ textDecoration: "none", color: "rgb(47,47,47)" }}
                    >
                      {" "}
                      admin@shawnnovel.com{" "}
                    </a>
                  </p>
                </div>
              </div>

          <GeneralFooter />
            </div>
          </>
        )}
        <div className="forB">
        </div>
        
      </div>
    </>
  );
};

export default observer(Service);

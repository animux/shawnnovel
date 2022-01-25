import { observer } from "mobx-react-lite";
import React, { useEffect, useContext } from "react";
import { RootStoreContext } from "../stores/rootStore";
import "./news.scss";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import GeneralFooter from "../Components/GeneralFooter";

const News = () => {
  const { id } = useParams();
  console.log(id);
  const store = useContext(RootStoreContext);
  const { news, loadingNews, getNews } = store.commonStore;
  useEffect(() => {
    getNews(id);
  }, [getNews, id]);
  return (
    <>
      {/* <div className="nav"></div> */}
      <div className="newsCont">
        {loadingNews ? (
          <div className="newsContent" style={{ textAlign: "center" }}>
            loading
          </div>
        ) : (
          <>
            <div
              className="newsImage"
              style={{
                backgroundImage: `url(${news ? news.image : ""})`,
              }}
            ></div>
            <div className="newsContent">
              <div className="newsDescription">
                <h1>{news ? news.heading : "None"}</h1>
                <p>{news ? (news.content.map((item, index) => 
                              <span key={index}>{item} <br /><br /></span>
                            )) : "None"}</p>
              </div>
              <div className="newsSidebar">
                <div className="forStick">
                  <p className="sidebar-heading">Shawn Novel & Associates</p>

                  <p>
                    <FontAwesomeIcon icon={faMapMarkerAlt} /> 260/C Tejgaon I/A
                    Dhaka - 1208
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPhoneAlt} /> Tel: +88 (02) 88-
                    78565{" "}
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      icon={faEnvelope}
                    /> admin@shawnnovel.com{" "}
                  </p>
                </div>
              </div>
              <GeneralFooter />
            </div>
          </>
        )}
        <div className="forB"></div>
      </div>
    </>
  );
};

export default observer(News);

import { observer } from "mobx-react-lite";
import React, { useEffect, useContext } from "react";
import { RootStoreContext } from "../stores/rootStore";
import GeneralFooter from "../Components/GeneralFooter";
import { useMediaQuery } from "react-responsive";
import "./clients.scss";
import "../index.scss";
const Clients = () => {
  const store = useContext(RootStoreContext);
  const { clients, getClients, loadingClients } = store.commonStore;
  useEffect(() => {
    getClients();
  }, [getClients]);
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <div className="clientContainer">
          <div className="clientWrapper">
            <h6>
              Industry leaders worldwide have trusted Shawn Novel & Associates
              for their legal services.
            </h6>
          </div>
          <div className="itemWrapper">
            {loadingClients ? (
              <div className="wrap"></div>
            ) : (
              <>
                {clients.length != 0 ? (
                  clients.map((item, index) => {
                    return (
                      <div key={index}>
                        <img src={item.logo} />
                      </div>
                    );
                  })
                ) : (
                  <div style={{ height: "100px", width: "100px" }}>
                    {" "}
                    Nothing to display
                  </div>
                )}
              </>
            )}
          </div>
          <GeneralFooter />
        </div>
      ) : (
        <>
          <div className="clientContainer">
            <div className="clientWrapperM">
            <h6>
              Industry leaders worldwide have trusted Shawn Novel & Associates
              for their legal services.
            </h6>
            </div>
            <div className="itemWrapperM">
              <>
                {clients.length != 0 ? (
                  clients.map((item, index) => {
                    return (
                      <div key={index}>
                        <img src={item.logo} />
                      </div>
                    );
                  })
                ) : (
                  <div style={{ height: "100px", width: "100px" }}>
                    {" "}
                    Nothing to display
                  </div>
                )}
              </>
            </div>
            <GeneralFooter />
          </div>
        </>
      )}
    </>
  );
};

export default observer(Clients);

import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import "./serviceDropdown.scss";
import { useMediaQuery } from "react-responsive";
import { RootStoreContext } from "../stores/rootStore";
import { NavLink } from "react-router-dom";
const Dropdown = () => {
  const store = useContext(RootStoreContext);
  const { setDropdown, dropdown, setBurger } = store.navStore;
  const { services, loadingServices } = store.commonStore;
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <div className="dropdownContainer">
          <div className="dropdown">
            {loadingServices ? (
              <div className="itemContainer"> loading </div>
            ) : (
              <>
                <div className="itemContainer">
                  <div className="dropDownTitle ">Cross Border Transactions</div>
                  <div className="dropdownGrid">
                    {services.CBT.length != 0 ? (
                      services.CBT.map((item, index) => (
                        <div key={index} className="dropdownSubTitle">
                          <NavLink
                            className="dropHover"
                            style={{ textDecoration: "none" }}
                            to={`/service/${item.id}`}
                            onClick={() => {
                              setDropdown(false);
                            }}
                          >
                            {item.heading}
                          </NavLink>
                        </div>
                      ))
                    ) : (
                      <div className="dropdownSubTitle">
                        {" "}
                        Nothing to display
                      </div>
                    )}
                  </div>
                </div>
                <div className="itemContainer">
                  <div className="dropDownTitle">Corporate & Compliance</div>
                  <div className="dropdownGrid">
                    {services.CC.length != 0 ? (
                      services.CC.map((item, index) => (
                        <div key={index} className="dropdownSubTitle">
                          <NavLink
                            className="dropHover"
                            style={{ textDecoration: "none" }}
                            to={`/service/${item.id}`}
                            onClick={() => {
                              setDropdown(false);
                            }}
                          >
                            {item.heading}
                          </NavLink>
                        </div>
                      ))
                    ) : (
                      <div className="dropdownSubTitle">
                        {" "}
                        Nothing to display
                      </div>
                    )}
                  </div>
                </div>
                <div className="itemContainer">
                  <div className="dropDownTitle">
                    Construction & Real Estate
                  </div>
                  <div className="dropdownGrid">
                    {services.CRE.length != 0 ? (
                      services.CRE.map((item, index) => (
                        <div key={index} className="dropdownSubTitle">
                          <NavLink
                            className="dropHover"
                            style={{ textDecoration: "none" }}
                            to={`/service/${item.id}`}
                            onClick={() => {
                              setDropdown(false);
                            }}
                          >
                            {item.heading}
                          </NavLink>
                        </div>
                      ))
                    ) : (
                      <div className="dropdownSubTitle">
                        {" "}
                        Nothing to display
                      </div>
                    )}
                  </div>
                </div>
                <div className="itemContainer">
                  <div className="dropDownTitle">Commercial Transactions</div>
                  <div className="dropdownGrid">
                    {services.CT.length != 0 ? (
                      services.CT.map((item, index) => (
                        <div key={index} className="dropdownSubTitle">
                          <NavLink
                            className="dropHover"
                            style={{ textDecoration: "none" }}
                            to={`/service/${item.id}`}
                            onClick={() => {
                              setDropdown(false);
                            }}
                          >
                            {item.heading}
                          </NavLink>
                        </div>
                      ))
                    ) : (
                      <div className="dropdownSubTitle">
                        {" "}
                        Nothing to display
                      </div>
                    )}
                  </div>
                </div>
                <div className="itemContainer Dispute">
                  <div className="dropDownTitle ">Dispute Resolution</div>
                  <div className="dropdownGrid">
                    {services.DR.length != 0 ? (
                      services.DR.map((item, index) => (
                        <div key={index} className="dropdownSubTitle ">
                          <NavLink
                            className="dropHover"
                            style={{ textDecoration: "none" }}
                            to={`/service/${item.id}`}
                            onClick={() => {
                              setDropdown(false);
                            }}
                          >
                            {item.heading}
                          </NavLink>
                        </div>
                      ))
                    ) : (
                      <div className="dropdownSubTitle">
                        {" "}
                        Nothing to display
                      </div>
                    )}
                  </div>
                </div>
                <div className="itemContainer ">
                  <div className="dropDownTitle">Employment & Labor</div>
                  <div className="dropdownGrid">
                    {services.EL.length != 0 ? (
                      services.EL.map((item, index) => (
                        <div key={index} className="dropdownSubTitle">
                          <NavLink
                            className="dropHover"
                            style={{ textDecoration: "none" }}
                            to={`/service/${item.id}`}
                            onClick={() => {
                              setDropdown(false);
                            }}
                          >
                            {item.heading}
                          </NavLink>
                        </div>
                      ))
                    ) : (
                      <div className="dropdownSubTitle">
                        {" "}
                        Nothing to display
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="dropdownContainerM" >
          <div className="dropdownM" >
            {loadingServices ? (
              <div className="itemContainerM"> loading </div>
            ) : (
              <>
                <div className="itemContainerM">
                  <div className="dropDownTitleM">Cross Border Transactions</div>
                  <div className="dropdownGrid">
                    {services.CBT.length != 0 ? (
                      services.CBT.map((item, index) => (
                        <div key={index} className="dropdownSubTitle">
                          <NavLink
                            className="dropHover"
                            style={{ textDecoration: "none" }}
                            to={`/service/${item.id}`}
                            onClick={() => {
                              setDropdown(false);
                              setBurger();
                            }}
                          >
                            {item.heading}
                          </NavLink>
                        </div>
                      ))
                    ) : (
                      <div className="dropdownSubTitle">
                        {" "}
                        Nothing to display
                      </div>
                    )}
                  </div>
                </div>
                <div className="itemContainerM">
                  <div className="dropDownTitleM">Corporate & Compliance</div>
                  <div className="dropdownGrid">
                    {services.CC.length != 0 ? (
                      services.CC.map((item, index) => (
                        <div key={index} className="dropdownSubTitle">
                          <NavLink
                            className="dropHover"
                            style={{ textDecoration: "none" }}
                            to={`/service/${item.id}`}
                            onClick={() => {
                              setDropdown(false);
                              setBurger();
                            }}
                          >
                            {item.heading}
                          </NavLink>
                        </div>
                      ))
                    ) : (
                      <div className="dropdownSubTitle">
                        {" "}
                        Nothing to display
                      </div>
                    )}
                  </div>
                </div>
                <div className="itemContainerM">
                  <div className="dropDownTitleM">
                    Construction & Real Estate
                  </div>
                  <div className="dropdownGrid">
                    {services.CRE.length != 0 ? (
                      services.CRE.map((item, index) => (
                        <div key={index} className="dropdownSubTitle">
                          <NavLink
                            className="dropHover"
                            style={{ textDecoration: "none" }}
                            to={`/service/${item.id}`}
                            onClick={() => {
                              setDropdown(false);
                              setBurger();
                            }}
                          >
                            {item.heading}
                          </NavLink>
                        </div>
                      ))
                    ) : (
                      <div className="dropdownSubTitle">
                        {" "}
                        Nothing to display
                      </div>
                    )}
                  </div>
                </div>
                <div className="itemContainerM">
                  <div className="dropDownTitleM">Commercial Transactions</div>
                  <div className="dropdownGrid">
                    {services.CT.length != 0 ? (
                      services.CT.map((item, index) => (
                        <div key={index} className="dropdownSubTitle">
                          <NavLink
                            className="dropHover"
                            style={{ textDecoration: "none" }}
                            to={`/service/${item.id}`}
                            onClick={() => {
                              setDropdown(false);
                              setBurger();
                            }}
                          >
                            {item.heading}
                          </NavLink>
                        </div>
                      ))
                    ) : (
                      <div className="dropdownSubTitle">
                        {" "}
                        Nothing to display
                      </div>
                    )}
                  </div>
                </div>
                <div className="itemContainerM">
                  <div className="dropDownTitleM">Dispute Resolution</div>
                  <div className="dropdownGrid">
                    {services.DR.length != 0 ? (
                      services.DR.map((item, index) => (
                        <div key={index} className="dropdownSubTitle">
                          <NavLink
                            className="dropHover"
                            style={{ textDecoration: "none" }}
                            to={`/service/${item.id}`}
                            onClick={() => {
                              setDropdown(false);
                              setBurger();
                            }}
                          >
                            {item.heading}
                          </NavLink>
                        </div>
                      ))
                    ) : (
                      <div className="dropdownSubTitle">
                        {" "}
                        Nothing to display
                      </div>
                    )}
                  </div>
                </div>
                <div className="itemContainerM">
                  <div className="dropDownTitleM ELM">Employment & Labor</div>
                  <div className="dropdownGrid">
                    {services.EL.length != 0 ? (
                      services.EL.map((item, index) => (
                        <div key={index} className="dropdownSubTitle">
                          <NavLink
                            className="dropHover"
                            style={{ textDecoration: "none" }}
                            to={`/service/${item.id}`}
                            onClick={() => {
                              setDropdown(false);
                              setBurger();
                            }}
                          >
                            {item.heading}
                          </NavLink>
                        </div>
                      ))
                    ) : (
                      <div className="dropdownSubTitle">
                        {" "}
                        Nothing to display
                      </div>
                    )}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};
export default observer(Dropdown);

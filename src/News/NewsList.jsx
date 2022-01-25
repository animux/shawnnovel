import { observer } from "mobx-react-lite";
import React, { useEffect, useContext } from "react";
import { RootStoreContext } from "../stores/rootStore";
import GeneralFooter from "../Components/GeneralFooter";
import { useMediaQuery } from "react-responsive";
import "./newsList.scss";
import "../index.scss";
import { NavLink, useParams } from "react-router-dom";
import Paginator from "./Paginator";
const NewsList = () => {
  const { page } = useParams();
  const store = useContext(RootStoreContext);
  const { newsList, getNewsList, loadingNewsList } = store.commonStore;
  useEffect(() => {
    getNewsList(page);
  }, [getNewsList, page]);
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <div className="newsContainer">
          <div className="newsWrapper">
            <h2>News & Publications</h2>
          </div>
          <div className="nitemWrapper">
            {loadingNewsList ? (
              <div>
                <h4>Loading</h4>
              </div>
            ) : (
              <>
                {newsList ? (
                  newsList.results.map((item, index) => {
                    return (
                      <NavLink
                        key={index}
                        style={{ textDecoration: "none", color: "#000" }}
                        to={`/news/${item.id}`}
                      >
                        <div className="newsBox">
                          <div className="niCont">
                            <img src={item.image} />
                            <p>{item.heading}</p>
                          </div>
                        </div>
                      </NavLink>
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
          {newsList ? (
            <Paginator
              pages={Math.ceil(newsList.count / 6)}
              next={page ? (newsList.next ? parseInt(page) + 1 : null) : 2}
              previous={newsList.previous ? parseInt(page) - 1 : null}
            />
          ) : (
            ""
          )}
          <GeneralFooter />
        </div>
      ) : (
        <>
          {loadingNewsList ? (
            <div>
              <h4>Loading</h4>
            </div>
          ) : (
            <div className="newsContainerM">
              <div className="newsWrapperM">
                <h2>News & Publications</h2>
              </div>
              <div className="nitemWrapperM">
                {newsList ? (
                  newsList.results.map((item, index) => {
                    return (
                      <NavLink
                        style={{ textDecoration: "none", color: "#000" }}
                        to={`/news/${item.id}`}
                      >
                        <div key={index} className="newsBoxM">
                          <img src={item.image} />

                          {item.heading}
                        </div>
                      </NavLink>
                    );
                  })
                ) : (
                  <div style={{ height: "100px", width: "100px" }}>
                    {" "}
                    Nothing to display
                  </div>
                )}
              </div>
              {newsList ? (
                <Paginator
                  pages={Math.ceil(newsList.count / 6)}
                  next={page ? (newsList.next ? parseInt(page) + 1 : null) : 2}
                  previous={newsList.previous ? parseInt(page) - 1 : null}
                />
              ) : (
                ""
              )}
              <GeneralFooter />
            </div>
          )}
        </>
      )}
    </>
  );
};

export default observer(NewsList);

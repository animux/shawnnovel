import React, { useEffect, useContext, useState } from "react";
import GeneralFooter from "../Components/GeneralFooter";
import Head from "./ShawnNovel.jpeg";
import "./people.scss";
import { useMediaQuery } from "react-responsive";
import { RootStoreContext } from "../stores/rootStore";
import { observer } from "mobx-react-lite";
import { FaLinkedinIn } from "react-icons/fa";
import blank from "./blank.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const People = () => {
  const store = useContext(RootStoreContext);
  const { peopleList, loadingPeople, getPeople } = store.commonStore;
  const [loadingImage, setLoadingImage] = useState(true);

  const [headSec, setheadSec] = useState(false);

  const [currentSrAss, setcurrentSrAss] = useState(null);
  const [currentAss, setcurrentAss] = useState(null);
  const [currentOC, setcurrentOC] = useState(null);

  const handleImageLoaded = () => {
    setLoadingImage(false);
  };

  const handleHead = () => {
    setheadSec(!headSec);
  };

  const closeEverything = () => {
    if (headSec === true) {
      setheadSec(false);
    }
    if (currentSrAss) {
      setcurrentSrAss(null);
    }
    if (currentAss) {
      setcurrentAss(null);
    }
    if (currentOC) {
      setcurrentOC(null);
    }
  };

  useEffect(() => {
    getPeople();
  }, [getPeople]);

  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });
  return (
    <>
      {!isTabletOrMobileDevice ? (
        <>
          <div className="forBG" onClick={closeEverything}></div>
          <div className="MainContainer" onClick={closeEverything}>
            {/* HEAD OF THE FIRM */}
            <div className="Section1">
              {!headSec ? (
                <div className="HeadContainerBefore" onClick={handleHead}>
                  <h1>Head of the Firm</h1>
                  <img src={Head} />
                  <h2>Shawn S. Novel</h2>
                </div>
              ) : (
                <div className="HeadContainerAfter">
                  <h1>Head of the Firm</h1>
                  <div className="HeadContents">
                    <div className="HeadLeft">
                      <img src={Head} />
                      <div className="forAligning">
                        <h2>Shawn S. Novel</h2>
                        <h4>LL. B. (Hons.), Cardiff University</h4>
                        <h4>LL.M., Cornell Law School</h4>
                        <h4>Barrister at Law of Lincoln’s Inn</h4>
                        <h4>Attorney at Law, New York, USA</h4>
                        <h4>Advocate, Supreme Court of Bangladesh</h4>
                        <div className="ButtonCont">
                          <div className="mailButton">
                            <a
                              href="mailto:snovel@shawnnovel.com"
                              style={{
                                textDecoration: "none",
                                color: "#1d1d1d",
                              }}
                            >
                              <FontAwesomeIcon icon={faEnvelope} />
                            </a>
                          </div>
                          <div className="mailButton">
                            <a
                              href="https://www.linkedin.com/in/shawnnovel"
                              style={{ textDecoration: "none" }}
                            >
                              <FaLinkedinIn
                                style={{ color: "#1d1d1d", marginTop: "0.7vh" }}
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="HeadRight">
                      <p>
                        Mr. Shawn S. Novel is a Barrister at Law of England and
                        Wales and licensed to practice in the USA as Attorney at
                        Law admitted in the New York State Bar. He is also an
                        Advocate of the Supreme Court of Bangladesh. His
                        concentration on business law and financial institutions
                        during his LL.M. at Cornell Law School has equipped him
                        with the right set of tools to gain an international
                        perspective of business and the legal conduits essential
                        in addressing clients’ needs. Having practiced as
                        attorney in a New York based law firm and litigated
                        before the Federal Courts, he has gained a deep and
                        thorough understanding of ethics, values and principles
                        of international workplaces and has instilled and
                        incorporated the same in his firm in Bangladesh. Mr.
                        Novel is specialized in international commercial law and
                        cross-border transactions with paramount experience on
                        devising models for entities in setting up ventures
                        across borders. He has worked as a transactional lawyer
                        in Thailand and has structured deals in Southeast Asia
                        having advised clients from Hong Kong and Singapore and
                        understands the regional market. He has extensive
                        experience in advising MNCs on investment and corporate
                        strategies.
                        <br />
                        <br />
                        Throughout his career, Mr. Novel has judiciously advised
                        and represented leading Bangladeshi textile
                        conglomerates, automobile companies, pharmaceuticals and
                        insurance companies on multifarious complex legal issues
                        including corporate restructuring, M&A and litigation in
                        local and foreign jurisdictions. His firm being a
                        pioneer in the startup ecosystem of Bangladesh, Mr.
                        Novel has introduced noteworthy contemporary strategies
                        for the growth of startups through his work with a
                        number of prominent accelerator programs and investors.
                        He has implemented one of the first ESOPs in Bangladesh.
                        In the field of IP, he has won a landmark judgment on
                        trademark and passing-off. His pro bono contribution and
                        ideation in the e-commerce sector is expected to play an
                        opportune role in furthering the policies of the
                        country.
                      </p>{" "}
                    </div>
                  </div>
                </div>
              )}
              <div></div>
            </div>

            {/* SR. Associate */}
            <div className="Section2">
              {!loadingPeople ? (
                <>
                  <div className="assocHeading">
                  {!currentSrAss &&<h1>Senior Associates</h1>}
                  </div>
                  {peopleList ? (
                    peopleList.Seniors.map((item, index) => (
                      <>
                        {!currentSrAss && (
                          <div
                            key={index}
                            className="SrContainerBefore"
                            onClick={() => {
                              setcurrentSrAss(item);
                            }}
                          >
                            {loadingImage && <img src={blank} />}
                            <div className="imgBorder">
                              <img
                                src={item.picture}
                                style={loadingImage ? { display: "none" } : {}}
                                onLoad={handleImageLoaded}
                              />
                            </div>
                            <h2>{item.name}</h2>
                          </div>
                        )}
                      </>
                    ))
                  ) : (
                    <div className="ItemCont">Nothing to show</div>
                  )}
                  {currentSrAss && (
                    <div className="HeadContainerAfter">
                    <h1>Senior Associate</h1>
                      <div className="HeadContents">
                        <div className="HeadLeft">
                          <div className="imgBorder2">
                            <img src={currentSrAss.picture} />
                          </div>
                          <h2>{currentSrAss.name}</h2>
                          <div className="ForCreds">
                            {currentSrAss.credentials.map((item, index) => (
                              <h4 key={index}>{item}</h4>
                            ))}
                          </div>
                        </div>
                        <div className="HeadRight">
                          <p>{currentSrAss.description}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="ItemCont"> Loading</div>
              )}
              <div></div>
            </div>

            {/* Associate */}
            <div className="Section2">
              {!loadingPeople ? (
                <>
                  <div className="assocHeading">
                  {!currentAss &&<h1>Associates</h1>}
                  </div>
                  {peopleList ? (
                    peopleList.Associates.map((item, index) => (
                      <>
                        {!currentAss && (
                          <div
                            key={index}
                            className="SrContainerBefore"
                            onClick={() => {
                              setcurrentAss(item);
                            }}
                          >
                            {loadingImage && <img src={blank} />}
                            <div className="imgBorder">
                              <img
                                src={item.picture}
                                style={loadingImage ? { display: "none" } : {}}
                                onLoad={handleImageLoaded}
                              />
                            </div>
                            <h2>{item.name}</h2>
                          </div>
                        )}
                      </>
                    ))
                  ) : (
                    <div className="ItemCont">Nothing to show</div>
                  )}
                  {currentAss && (
                    <div className="HeadContainerAfter">
                    <h1>Associate</h1>
                      <div className="HeadContents">
                        <div className="HeadLeft">
                          <div className="imgBorder2">
                            <img src={currentAss.picture} />
                          </div>
                          <h2>{currentAss.name}</h2>
                          <div className="ForCreds">
                            {currentAss.credentials.map((item, index) => (
                              <h4 key={index}>{item}</h4>
                            ))}
                          </div>
                        </div>
                        <div className="HeadRight">
                          <p>{currentAss.description}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="ItemCont"> Loading</div>
              )}
              <div></div>
            </div>

            {/* Of Counsel */}
            <div className="Section2">
              {!loadingPeople ? (
                <>
                  <div className="assocHeading">
                    {!currentOC &&<h1>Of Counsel</h1>}
                  </div>
                  {peopleList ? (
                    peopleList.OffCouncel.map((item, index) => (
                      <>
                        {!currentOC && (
                          <div
                            key={index}
                            className="SrContainerBefore"
                            onClick={() => {
                              setcurrentOC(item);
                            }}
                          >
                            {loadingImage && <img src={blank} />}
                            <div className="imgBorder">
                              <img
                                src={item.picture}
                                style={loadingImage ? { display: "none" } : {}}
                                onLoad={handleImageLoaded}
                              />
                            </div>
                            <h2>{item.name}</h2>
                          </div>
                        )}
                      </>
                    ))
                  ) : (
                    <div className="ItemCont">Nothing to show</div>
                  )}
                  {currentOC && (
                    <div className="HeadContainerAfter">
                    <h1>Of Counsel</h1>
                      <div className="HeadContents">
                        <div className="HeadLeft">
                          <div className="imgBorder2">
                            <img src={currentOC.picture} />
                          </div>
                          <h2>{currentOC.name}</h2>
                          <div className="ForCreds">
                            {currentOC.credentials.map((item, index) => (
                              <h4 key={index}>{item}</h4>
                            ))}
                          </div>
                        </div>
                        <div className="HeadRight">
                          <p>{currentOC.description}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="ItemCont"> Loading</div>
              )}
              <div></div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="forBGM" onClick={closeEverything}></div>
          <div className="MainContainer" onClick={closeEverything}>
            {/* HEAD OF THE FIRM */}
            <div className="Section1M">
              {!headSec ? (
                <div className="HeadContainerBefore" onClick={handleHead}>
                  <h1>Head of the Firm</h1>
                  <img src={Head} />
                  <h2>Shawn S. Novel</h2>
                </div>
              ) : (
                <div className="HeadContainerAfter">
                  <h1>Head of the Firm</h1>
                  <div className="HeadContents">
                    <div className="HeadLeft">
                      <img src={Head} />
                      <h2>Shawn S. Novel</h2>
                      <h4>LL. B. (Hons.), Cardiff University</h4>
                      <h4>LL.M., Cornell Law School</h4>
                      <h4>Barrister at Law of Lincoln’s Inn</h4>
                      <h4>Attorney at Law, New York, USA</h4>
                      <h4>Advocate, Supreme Court of Bangladesh</h4>
                      <div className="ButtonContM">
                        <div className="mailButton">
                          <a
                            href="mailto:snovel@shawnnovel.com"
                            style={{ textDecoration: "none", color: "#1d1d1d" }}
                          >
                            <FontAwesomeIcon icon={faEnvelope} />
                          </a>
                        </div>
                        <div className="mailButton">
                          <a
                            href="https://www.linkedin.com/in/shawnnovel"
                            style={{ textDecoration: "none" }}
                          >
                            <FaLinkedinIn
                              style={{ color: "#1d1d1d", marginTop: "0.2vh" }}
                            />
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="HeadRight">
                      <h5>
                        Mr. Shawn S. Novel is a Barrister at Law of England and
                        Wales and licensed to practice in the USA as Attorney at
                        Law admitted in the New York State Bar. He is also an
                        Advocate of the Supreme Court of Bangladesh. His
                        concentration on business law and financial institutions
                        during his LL.M. at Cornell Law School has equipped him
                        with the right set of tools to gain an international
                        perspective of business and the legal conduits essential
                        in addressing clients’ needs. Having practiced as
                        attorney in a New York based law firm and litigated
                        before the Federal Courts, he has gained a deep and
                        thorough understanding of ethics, values and principles
                        of international workplaces and has instilled and
                        incorporated the same in his firm in Bangladesh. Mr.
                        Novel is specialized in international commercial law and
                        cross-border transactions with paramount experience on
                        devising models for entities in setting up ventures
                        across borders. He has worked as a transactional lawyer
                        in Thailand and has structured deals in Southeast Asia
                        having advised clients from Hong Kong and Singapore and
                        understands the regional market. He has extensive
                        experience in advising MNCs on investment and corporate
                        strategies.
                        <br />
                        <br />
                        Throughout his career, Mr. Novel has judiciously advised
                        and represented leading Bangladeshi textile
                        conglomerates, automobile companies, pharmaceuticals and
                        insurance companies on multifarious complex legal issues
                        including corporate restructuring, M&A and litigation in
                        local and foreign jurisdictions. His firm being a
                        pioneer in the startup ecosystem of Bangladesh, Mr.
                        Novel has introduced noteworthy contemporary strategies
                        for the growth of startups through his work with a
                        number of prominent accelerator programs and investors.
                        He has implemented one of the first ESOPs in Bangladesh.
                        In the field of IP, he has won a landmark judgment on
                        trademark and passing-off. His pro bono contribution and
                        ideation in the e-commerce sector is expected to play an
                        opportune role in furthering the policies of the
                        country.
                      </h5>{" "}
                    </div>
                  </div>
                </div>
              )}
              <div></div>
            </div>

            {/* SR. Associate */}
            <div className="Section2M">
              {!currentSrAss && <h1>Senior Associates</h1>}
              {!loadingPeople ? (
                <>
                  {peopleList ? (
                    peopleList.Seniors.map((item, index) => (
                      <>
                        {!currentSrAss && (
                          <div
                            key={index}
                            className="SrContainerBefore"
                            onClick={() => {
                              setcurrentSrAss(item);
                            }}
                          >
                            {loadingImage && <img src={blank} />}
                            <div className="imgBorder">
                              <img
                                src={item.picture}
                                style={loadingImage ? { display: "none" } : {}}
                                onLoad={handleImageLoaded}
                              />
                            </div>
                            <h2>{item.name}</h2>
                          </div>
                        )}
                      </>
                    ))
                  ) : (
                    <div className="ItemCont">Nothing to show</div>
                  )}
                  {currentSrAss && (
                    <div className="HeadContainerAfter">
                      <h1>Senior Associate</h1>
                      <div className="HeadContents">
                        <div className="HeadLeft">
                          <div className="imgBorder2">
                            <img src={currentSrAss.picture} />
                          </div>
                          <h2>{currentSrAss.name}</h2>
                          <div className="ForCreds">
                            {currentSrAss.credentials.map((item, index) => (
                              <h4 key={index}>{item}</h4>
                            ))}
                          </div>
                        </div>
                        <div className="HeadRight">
                          <h5>{currentSrAss.description}</h5>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="ItemCont"> Loading</div>
              )}
              <div></div>
            </div>

            {/* Associate */}
            <div className="Section2M">
              {!currentAss && <h1>Associates</h1>}
              {!loadingPeople ? (
                <>
                  {peopleList ? (
                    peopleList.Associates.map((item, index) => (
                      <>
                        {!currentAss && (
                          <div
                            key={index}
                            className="SrContainerBefore"
                            onClick={() => {
                              setcurrentAss(item);
                            }}
                          >
                            {loadingImage && <img src={blank} />}
                            <div className="imgBorder">
                              <img
                                src={item.picture}
                                style={loadingImage ? { display: "none" } : {}}
                                onLoad={handleImageLoaded}
                              />
                            </div>
                            <h2>{item.name}</h2>
                          </div>
                        )}
                      </>
                    ))
                  ) : (
                    <div className="ItemCont">Nothing to show</div>
                  )}
                  {currentAss && (
                    <div className="HeadContainerAfter">
                      <h1>Associate</h1>
                      <div className="HeadContents">
                        <div className="HeadLeft">
                          <div className="imgBorder2">
                            <img src={currentAss.picture} />
                          </div>
                          <h2>{currentAss.name}</h2>
                          <div className="ForCreds">
                            {currentAss.credentials.map((item, index) => (
                              <h4 key={index}>{item}</h4>
                            ))}
                          </div>
                        </div>
                        <div className="HeadRight">
                          <h5>{currentAss.description}</h5>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="ItemCont"> Loading</div>
              )}
              <div></div>
            </div>

            {/* Of Counsel */}
            <div className="Section2M">
              {!currentOC && <h1>Of Counsel</h1>}
              {!loadingPeople ? (
                <>
                  {peopleList ? (
                    peopleList.OffCouncel.map((item, index) => (
                      <>
                        {!currentOC && (
                          <div
                            key={index}
                            className="SrContainerBefore"
                            onClick={() => {
                              setcurrentOC(item);
                            }}
                          >
                            {loadingImage && <img src={blank} />}
                            <div className="imgBorder">
                              <img
                                src={item.picture}
                                style={loadingImage ? { display: "none" } : {}}
                                onLoad={handleImageLoaded}
                              />
                            </div>
                            <h2>{item.name}</h2>
                          </div>
                        )}
                      </>
                    ))
                  ) : (
                    <div className="ItemCont">Nothing to show</div>
                  )}
                  {currentOC && (
                    <div className="HeadContainerAfter">
                      <h1>Of Counsel</h1>
                      <div className="HeadContents">
                        <div className="HeadLeft">
                          <div className="imgBorder2">
                            <img src={currentOC.picture} />
                          </div>
                          <h2>{currentOC.name}</h2>
                          <div className="ForCreds">
                            {currentOC.credentials.map((item, index) => (
                              <h4 key={index}>{item}</h4>
                            ))}
                          </div>
                        </div>
                        <div className="HeadRight">
                          <h5>{currentOC.description}</h5>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <div className="ItemCont"> Loading</div>
              )}
              <div></div>
            </div>

            <div className="forB"></div>
          </div>
        </>
      )}
      <GeneralFooter />
    </>
  );
};

export default observer(People);

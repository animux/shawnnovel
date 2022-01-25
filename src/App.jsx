import React, { useState, useEffect, useContext } from "react";
import Home from "./Home/Home";
import { observer } from "mobx-react-lite";
import Service from "./Service/Service";
import Navbar from "./Components/Navbar";
import { Route, Switch } from "react-router-dom";
import AboutUs from "./AboutUs/AboutUs";
import "./Home/home.scss";
import Contact from "./ContactUs/Contact";
import Join from "./JoinUs/Join";
import Clients from "./Clients/Clients";
import People from "./People/People";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import NewsList from "./News/NewsList";
import News from "./News/News";
import { RootStoreContext } from "./stores/rootStore";
import Logo from "../thumbnail.jpeg"
import Disclaimer from "./Disclaimer/Disclaimer";
import Privacy from "./Disclaimer/Privacy";


const App = () => {
  const store = useContext(RootStoreContext);
  const { setDropdown, dropdown } = store.navStore;
  const handleHoverClose = () => {
    if (dropdown === true) {
      setDropdown(false);
    }
  };
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => setSpinner(false), 1000);
  }, []);

  return (
    <>
      {!spinner ? (
        <>
          <div onClick={handleHoverClose}>
            <ToastContainer hideProgressBar autoClose={2500} position="top-right"  style={{width:"max-content", paddingRight:"10px"}}/>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/service/:id" component={Service} />
              <Route exact path="/newsList/:page?" component={NewsList} />
              <Route exact path="/news/:id" component={News} />
              <Route exact path="/aboutUs" component={AboutUs} />
              <Route exact path="/contactUs" component={Contact} />
              <Route exact path="/joinUs" component={Join} />
              <Route exact path="/clients" component={Clients} />
              <Route exact path="/people" component={People} />
              <Route exact path="/disclaimer" component={Disclaimer} />
              <Route exact path="/privacy-policy" component={Privacy} />
            </Switch>
          </div>
        </>
      ) : (
        <div className="wrap">
          <img src={Logo}/>
        </div>
      )}
    </>
  );
};

export default observer(App);

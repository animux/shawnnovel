import React, {useState} from "react";
import "./contact.scss";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhoneAlt,
  faEnvelope,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import GeneralFooter from "../Components/GeneralFooter";
import { useMediaQuery } from "react-responsive";
import { toast } from "react-toastify";

const Contact = () => {
  const [sent, setSent] =useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  function sendEmail(e) {
    e.preventDefault();
    if(!sent){
      emailjs
      .sendForm(
        "gmail",
        "template_8p1lw3a",
        e.target,
        "user_p5s8eFw3bmtSRxbD1KbUn"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      setSent(true);
    }

  }
  const isTabletOrMobileDevice = useMediaQuery({
    query: "(max-device-width: 1224px)",
  });

  return (
    <div className="contactContainer">
      {/* Top Part */}
      {!isTabletOrMobileDevice ? (
        <div>
          <div className="consultWrapper"></div>
          {/* Form & Map Part */}
          <div className="fandmCont">
            <div className="fandm">
              {/* Form */}
              <div className="forCForm">
                <div className="ForInfo">
                  <div className="contactInfo">
                    <h3 style={{ fontWeight: "700" }}>
                      <span>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </span>
                      <p>260/C Tejgaon I/A, Dhaka-1208</p>
                    </h3>
                    <h3 style={{ fontWeight: "700" }}>
                      <span>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                      </span>
                      <p>+88 (02) 88-78565, +88 016-1555-5687</p>
                    </h3>

                    <h3 style={{ fontWeight: "700" }}>
                      <span>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <a
                        href="mailto: admin@shawnnovel.com"
                        style={{
                          textDecoration: "none",
                          color: "rgb(47,47,47)",
                        }}
                      >
                        admin@shawnnovel.com
                      </a>
                    </h3>
                  </div>
                </div>
                <div className="forCMap">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3651.3776421428825!2d90.402325!3d23.769563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8671c44991ec9a40!2sShawn%20Novel%20%26%20Associates!5e0!3m2!1sen!2sbd!4v1625753876064!5m2!1sen!2sbd"
                    style={{ border: "0", width: "100%", height: "100%" }}
                    loading="lazy"
                  ></iframe>
                </div>
              </div>
              {/*Map*/}
              <form className="CForm" onSubmit={sendEmail}>
                <h1>For Appointment</h1>
                <div className="forAlign1"></div>
                <div className="forAlign">
                  <h3>Your Email Address</h3>
                  <input
                    type="text"
                    name="user_email"
                    placeholder="Email"
                    // {...register("user_email", {
                    //   required: true,
                    //   pattern: /^\S+@\S+$/i,
                    // })}
                  />
                </div>
                <div className="forAlign">
                  <h3>Message</h3>
                  <textarea
                    name="message"
                    rows="6"
                    // {...register("message", { required: true, maxLength: 21 })}
                  />
                </div>
                <div className="ContactSubmit">
                  <input type="submit" value={sent? "Sent" : "Send"} />
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="consultWrapperM"></div>
          <div className="fandmM">
            {/* Form */}
            <div className="forCFormM">
              <div className="forBg">
                <form className="CFormM" onSubmit={sendEmail}>
                  <div className="contactInfoM">
                    <h3 style={{ fontWeight: "700" }}>
                      <span>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                      </span>
                      <p>260/C Tejgaon I/A, Dhaka-1208</p>
                    </h3>
                    <h3 style={{ fontWeight: "700" }}>
                      <span>
                        <FontAwesomeIcon icon={faPhoneAlt} />
                      </span>
                      <p>+88 (02) 88-78565, +88 016-1555-5687</p>
                    </h3>

                    <h3 style={{ fontWeight: "700" }}>
                      <span>
                        <FontAwesomeIcon icon={faEnvelope} />
                      </span>
                      <a
                        href="mailto: admin@shawnnovel.com"
                        style={{
                          textDecoration: "none",
                          color: "rgb(47,47,47)",
                        }}
                      >
                        admin@shawnnovel.com
                      </a>
                    </h3>
                  </div>
                  <h2>For Appointment</h2>

                  <div className="forAlignM">
                    <h3>Your Email Address</h3>
                    <input
                      type="text"
                      name="user_email"
                      placeholder="Email"
                      // {...register("user_email", {
                      //   required: true,
                      //   pattern: /^\S+@\S+$/i,
                      // })}
                    />
                  </div>

                  <div className="forAlignM">
                    <h3>Message</h3>
                    <textarea rows="4"
                      name="message"
                      // {...register("message", { required: true, maxLength: 21 })}
                    />
                  </div>

                  <div className="ContactSubmit">
                    <input type="submit" value={sent? "Sent" : "Send"} />
                  </div>
                </form>
              </div>
            </div>
            {/* Map */}
            <div className="forCMapM">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3651.3776421428825!2d90.402325!3d23.769563!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x8671c44991ec9a40!2sShawn%20Novel%20%26%20Associates!5e0!3m2!1sen!2sbd!4v1625753876064!5m2!1sen!2sbd"
                style={{ border: "0", width: "100%", height: "100%" }}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      )}

      <GeneralFooter />
    </div>
  );
};

export default Contact;

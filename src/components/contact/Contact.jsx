import React from "react";
import "./contact.css";
import msgIcon from "../../assets/msg-icon.png";
import mailIcon from "../../assets/mail-icon.png";
import phoneIcon from "../../assets/phone-icon.png";
import locationIcon from "../../assets/location-icon.png";
import whiteArrow from "../../assets/white-arrow.png";

export default function Contact() {
  return (
    <div className="contact">
      <div className="contact-col">
        <h3>
          Send us a message <img src={msgIcon} alt="message icon image" />
        </h3>
        <p>
          Feel free to reach through contact form or find our contact
          information below. Your feedback, questions, and suggestions are
          important to us as we strive to provide exceptional service to our
          university community.
        </p>

        <ul>
          <li>
            <img src={mailIcon} alt="mail icon image" />
            contact@gmail.com
          </li>
          <li>
            <img src={phoneIcon} alt="phone icon image" />
            +123-456-789
          </li>
          <li>
            <img src={locationIcon} alt="location icon image" />
            77 Massachusetts Ave, cambridge <br /> MA 02139, United States
          </li>
        </ul>
      </div>
      <div className="contact-col">
        <form>
          <label>Phone Number</label>
          <input
            type="number"
            name="phone"
            placeholder="Enter your phone number.."
          />
          <label>Write your message here</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Enter your message..."
          ></textarea>
          <button type="submit" className="btn dark-btn">
            Submit Now
            <img src={whiteArrow} alt="white arrow image" />
          </button>
        </form>
        <span>sending</span>
      </div>
    </div>
  );
}

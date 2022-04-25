import React from "react";
import ProfilePicture from "../images/Profile-Picture.jpg";
import EmailIcon from "../images/Icon.png";

export default function Info() {
    return(
    <div className="info">
      <img className="profile-picture" src={ProfilePicture} alt="ProfilePicture" />
      <h1>Khawaja Usama Yasir</h1>
      <p>Frontend Developer</p>
      <a className="email-link" href="mailto:usamayasir32@gmail.com" target="_blank" rel="noreferrer">
        <button className="btn">
          <img className="email-icon" src={EmailIcon} alt="EmailIcon" />
          <p>Email</p>
        </button>
      </a>
    </div>
    )
}
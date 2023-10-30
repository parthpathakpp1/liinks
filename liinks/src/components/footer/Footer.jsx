import React from "react";
import "./Footer.css"; // Import your CSS file
import YourComponent from "./othercompo";

const Footer = () => {
  return (
    <>
    <YourComponent />
    <div className="footerContainer footerStyle">

      <div className="copyrightStyle text">© Liinks, LLC. All Rights Reserved</div>
    </div>
    </>
  );
};

export default Footer;

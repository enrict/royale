import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, isGoogleBtn, inverted, ...otherProps }) => (
  <button
    className={`${inverted ? "inverted" : ""} ${
      isGoogleBtn ? "google-login" : ""
    } custom-button `}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;

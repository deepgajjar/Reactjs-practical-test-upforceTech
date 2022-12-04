import React from "react";
import string from "../../assets/strings.json";
import "./style.css";

const CustomeButton = ({ onClickHandler }) => {
  return (
    <div
      className="signUpButton d-flex justify-content-center align-items-center"
      onClick={onClickHandler}
    >
      {string.common.sign_up_txt}
    </div>
  );
};
export default React.memo(CustomeButton);

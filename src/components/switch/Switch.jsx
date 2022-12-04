import React, { useState } from "react";
import "./style.css";
import string from '../../assets/strings.json';

const Switch = ({ swichClickHandler, formSwitch }) => {
  return (
    <div
      className="switchContainer d-flex bg-dark justify-content-between align-items-center"
      onClick={swichClickHandler}
    >
      <span
        className={`
        d-flex 
        justify-content-center 
        align-items-center
        switchButton
         ${formSwitch ? "switchToggle" : "text-white"}
        `}
      >
        {string.common.fan_signup}
      </span>
      <span
        className={`
        d-flex 
        justify-content-center
        align-items-center 
        switchButton
        ${formSwitch ? "text-white" : "switchToggle"}
        `}
      >
        {string.common.talent_signup}
      </span>
    </div>
  );
};

export default React.memo(Switch);

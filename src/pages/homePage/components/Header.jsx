import React, { useState } from "react";
import strings from "../../../assets/strings.json";
import { Switch } from "../../../components";

const Header = ({ swichClickHandler,formSwitch }) => {
  return (
    <>
      <Switch swichClickHandler={swichClickHandler} formSwitch={formSwitch} />
      <h1 className="text-white formTitle">
        {formSwitch ? strings.form.fanAccount : strings.form.talentAccount}
      </h1>
    </>
  );
};
export default React.memo(Header);

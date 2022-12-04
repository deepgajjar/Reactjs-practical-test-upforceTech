import { CheckBox } from "../../../components";
import "../style.css";
import strings from "../../../assets/strings.json";
import React from "react";

const TermAndCondition = ({ formik }) => {
  return (
    <div className="d-flex ">
      <CheckBox formik={formik} />
      <p className="text-white agreeFontSize">
        {strings.common.agreeTxt}
        <span className="termsAndCondition">
          {strings.common.term_and_condition}
        </span>
      </p>
    </div>
  );
};
export default React.memo(TermAndCondition);

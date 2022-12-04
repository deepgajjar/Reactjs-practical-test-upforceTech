import React from "react";
import { Input } from "reactstrap";
import "./style.css";

const CheckBox = ({ formik }) => {
  return (
    <Input
      id="acceptTerms"
      type="checkbox"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.acceptTerms}
      checked={formik.values.acceptTerms}
    />
  );
};

export default React.memo(CheckBox);

import React from "react";
import { Input, Label } from "reactstrap";
import "./style.css";

const TextField = ({ title, placeHolder, formik, ...props }) => {
  return (
    <div
      className="textLabelBox d-flex flex-column"
      style={{ marginBottom: "30px" }}
    >
      <Label for="exampleEmail" className="labelStyle text-white">
        {title}
      </Label>
      <Input
        className="textField"
        placeholder={placeHolder}
        onBlur={formik?.handleBlur}
        value={formik?.values?.[props?.name]}
        onChange={formik?.handleChange}
        {...props}
      />
      {formik?.touched?.[props?.name] && formik?.errors?.[props?.name] ? (
        <div className="text-white error-msg">{formik?.errors?.[props?.name]}</div>
      ) : null}
    </div>
  );
};

export default React.memo(TextField);

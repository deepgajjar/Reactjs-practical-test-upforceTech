import CustomeButton from "../../components/button/CustomeButton";
import { TermAndCondition, Header } from "./components";
import { TextField } from "../../components";
import "./style.css";
import { formValidationSchema } from "../../assets/validations";
import { textFieldsParams } from "../../assets/forms";
import string from "../../assets/strings.json";
import React, { useCallback, useState } from "react";
import { useFormik } from "formik";

const Home = () => {
  const [formSwitch, setFromSwitch] = useState(false);
  const submitHandler = async (values) => {
    delete values?.acceptTerms;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };
    const url = `http://wren.in:3200/api/sign-up/${
      formSwitch ? "fan" : "http://wren.in:3200/api/sign-up/talent"
    }`;
    try {
      const apiResponse = await fetch(url, options);
      const parsedData = await apiResponse.json();
      if (!apiResponse.ok) {
        throw Error(parsedData.status);
      }
      alert(string.common.success_msg);
    } catch (error) {
      alert(string.common.error_msg);
    } finally {
      formik.resetForm();
    }
  };
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      username: "",
      email: "",
      password: "",
      acceptTerms: false,
    },
    validationSchema: formValidationSchema,
    onSubmit: submitHandler,
  });

  const swichClickHandler = useCallback(() => {
    setFromSwitch((prevState) => !prevState);
  }, []);

  const onClickHandler = useCallback(() => {
    formik?.values?.acceptTerms && formik.handleSubmit();
  }, [formik?.values?.acceptTerms]);

  return (
    <div className="mainContainer bg-dark d-flex justify-content-center align-items-center">
      <div className="innerContainer">
        <div className="d-flex flex-column align-items-center">
          <Header
            swichClickHandler={swichClickHandler}
            formSwitch={formSwitch}
          />
          {textFieldsParams?.map((item, index) => (
            <TextField key={`text-filed-${index}`} formik={formik} {...item} />
          ))}
          <TermAndCondition formik={formik} />
          <CustomeButton onClickHandler={onClickHandler} />
        </div>
      </div>
    </div>
  );
};

export default React.memo(Home);

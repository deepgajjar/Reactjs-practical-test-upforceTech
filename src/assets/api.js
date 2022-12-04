export const signUpCall = async (values,formSwitch,formik) => {
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
      alert("You have signed successfully.");
    } catch (error) {
      alert("Something went wrong plese signup again.");
    } finally {
      formik.resetForm();
    }
  }
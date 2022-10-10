import { Form, Formik, withFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import * as Yup from "yup";
import Input from "./Input";

const LoginApiCall = (values) => {
  console.log("email and password", values.email, values.password);
};

const schema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(16).required(),
});

// const {
//   handleChange,
//   values,
//   handleSubmit,
//   errors,
//   handleBlur,
//   touched,
//   isValid,
//   placeholder,
// } = useFormik({
//   initialValues: {},
//   onSubmit: LoginApiCall,
//   initialValues: schema,
// });
const initialValues = {
  email: "",
  password: "",
};

export const LoginPage = ({
  errors,
  touched,
  values,
  handleBlur,
  handleChange,
  handleSubmit,
}) => {
  console.log("error valus", errors, values);
  return (
    <div>
      <div className=" w-full h-screen overflow-scroll bg-gray-100 px-40 py-10">
        <form
          onSubmit={handleSubmit}
          className=" rounded-md flex flex-col space-y-5 shadow-md bg-white  p-20 "
        >
          <h1
            className="text-2xl font-bold 
           mb-4"
          >
            Login easycart
          </h1>

          <Input
            label="email-address"
            id="email-address "
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            name="email"
            autoComplete="email"
            required="required"
            placeholder="Email address"
            touched={touched.email}
            error={errors.email}
          />

          <Input
            label="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            id="password"
            type="password"
            name="password"
            autoComplete=" current-password"
            required="required"
            placeholder="Passward"
            touched={touched.password}
            error={errors.password}
          />

          <div>
            <input type="checkbox" className="w-3 h-3" />
            <span className="ml-2">Remember me</span>
          </div>
          <div className="flex justify-end items-center gap-2">
            <Link to="/singup/" className="text-indigo-500">
              Sing Up
            </Link>
            <span>||</span>
            <Link to="/forgetpass/" className="text-indigo-500">
              lost your password
            </Link>
          </div>
          <div>
            <Button
              type="Submit"
              className="px-6 py-2 bg-red-600 disabled:bg-red-300 "
            >
              Login
            </Button>
          </div>
        </form>
      </div>
      );
    </div>
  );
};

const myHoc = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: LoginApiCall,
});

const easyLogin = myHoc(LoginPage);
export default easyLogin;

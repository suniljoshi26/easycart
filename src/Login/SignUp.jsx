import { useFormik, withFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import * as Yup from "yup";
import Input from "./Input";

const SignUpApi = (values) => {};

const schema = Yup.object().shape({
  FullName: Yup.string().min(4).max(50).required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).max(16).required(),
  confirmPassword: Yup.string().min(8).max(16).required(),
});

const initialValues = {
  FullName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = ({
  handleSubmit,
  values,
  errors,
  handleBlur,
  handleChange,
  touched,
}) => {
  // const {

  // } = useFormik({

  //   onSubmit: SignUpApi,
  //   validationSchema: schema,
  // });

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
            Sign-Up
          </h1>
          <div>
            <Input
              label="FullName"
              id="FullName"
              onChange={handleChange}
              onBlur={handleBlur}
              error={errors.FullName}
              touched={touched.FullName}
              type="text"
              value={values.FullName}
              name="FullName"
              autoComplete="full name"
              required="required"
              placeholder="Full_Name"
            />
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
            <Input
              label="confirmPassword"
              value={values.confirmPassword}
              onChange={handleChange}
              onBlur={handleBlur}
              id="confirmPassword"
              type="password"
              name="confirmPassword"
              autoComplete=" current-password"
              required="required"
              placeholder="PassconfirmPasswordward"
              touched={touched.confirmPassword}
              error={errors.confirmPassword}
            />
          </div>

          <Link to="/login/" className="text-indigo-500 text-end text-xl">
            Login
          </Link>
          <div>
            <Button type="Submit">Sign Up</Button>
          </div>
        </form>
      </div>
    </div>
  );
};
const myHoc = withFormik({
  validationSchema: schema,
  initialValues: initialValues,
  handleSubmit: SignUpApi,
});

const easySignUp = myHoc(SignUp);

export default easySignUp;

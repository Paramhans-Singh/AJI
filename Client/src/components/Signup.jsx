import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../styles/auth.css";

const Signup = ({actions}) => {
  const SignupSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });
  const handleSubmit = (values) => {    
    console.log(values);
  };
  return (
    <div className="signup">
      <h1 className="auth-heading">New Registeration</h1>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={SignupSchema}
        onSubmit={handleSubmit}
      >
        <Form className="auth-form">
          <div className='inputField-container'>
            <Field type="text" name="username" placeholder="Username" className="inputField"/>
            <ErrorMessage name="username" component="div" className='errorMessage'/>
          </div>
          <div className='inputField-container'>
            <Field type="email" name="email" placeholder="Email" className="inputField"/>
            <ErrorMessage name="email" component="div" className='errorMessage'/>
          </div>
          <div className='inputField-container'>
            <Field type="password" name="password" placeholder="Password" className="inputField"/>
            <ErrorMessage name="password" component="div" className='errorMessage'/>
          </div>
          <button type="submit" className="submitBtn">Sign Up</button>
        </Form>
      </Formik>
        <div className='exists'>
            <div className='auth-text'>Already have an account? <span onClick={
                ()=>{
                    actions(true);
                }
            } className='auth-link'>Login</span></div>
        </div>
    </div>

  );
};

export default Signup;

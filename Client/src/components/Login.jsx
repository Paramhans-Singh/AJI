import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import '../styles/auth.css';
import { AuthContext } from '../context/AuthContext';
import { Navigate, redirect, useLocation } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const Login = ({actions}) => {


  
  const handleSubmit = (values) => {
    setLoginState(true);
    console.log(values);

  };
  const {loginState, setLoginState} = useContext(AuthContext)
  const location = useLocation();
  if(loginState){
    return <Navigate to={location.state?.from || '/dashboard'} />
  }


  return (
    <div className='login'>
      <h1 className='auth-heading'>Login</h1>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        <Form className='auth-form'>
          <div className='inputField-container'>
            <Field type="email" name="email" placeholder="Email" className="inputField" />
            <ErrorMessage name="email" component="div" className='errorMessage'/>
          </div>
          <div className='inputField-container'>
            <Field type="password" name="password" placeholder="Password" className="inputField" />
            <ErrorMessage name="password" component="div" className='errorMessage'/>
          </div>
          <button type="submit" className='submitBtn'>Login</button>
        </Form>
      </Formik>
      <div className='exists'>
        <div className='auth-text'>Don't have an account? <span onClick={
            ()=>{
                actions(false);
            }
        }
        className='auth-link'>Register</span></div>
      </div>
    </div>
  );
};

export default Login;

import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyTextInput } from '../components';

import '../styles/styles.css';

export const RegisterFormikPage = () => {
  return (
    <div>
      <h1>Register Formik Page</h1>

      <Formik initialValues={{
          name: '',
          email: 'ddominguez@dev.com',
          password: '',
          password2: ''
        }}
        onSubmit={(values) => {
          console.log(values)
        }}
        validationSchema={
          Yup.object({
            name: Yup.string().min(3, 'Enter at leats 3 characters').max(15, 'Enter 15 characters or less').required('Name is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6, 'Password must have at least 6 characters').required('Password is required'),
            password2: Yup.string().oneOf([Yup.ref('password')], 'Passwords must match').required('Password confirmation is required'),
          })
        }
      >
        { ({ handleReset }) => (
          <Form noValidate autoComplete='none'>
              <MyTextInput label='Name' name='name' id='name' placeholder='Enter your name' autoComplete="new-name"/>
              <MyTextInput label='Email address' name='email' id='email' type='email' placeholder='Enter your email address' autoComplete="new-email"/>
              <MyTextInput label='Password' name='password' id='password' type='password' placeholder='Enter your password'/>
              <MyTextInput label='Confirm your password' name='password2' id='password2' type='password' placeholder='Enter the same password as above'/>
              <button type="submit">Register</button>
              <button type="button" onClick={handleReset}>Reset</button>
          </Form>  
        )

        }

      </Formik>
    </div> 
  )
}

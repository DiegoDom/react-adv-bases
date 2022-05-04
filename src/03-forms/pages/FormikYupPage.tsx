
import { useFormik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikYupPage = () => {

  const { errors, touched, getFieldProps, handleSubmit } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: (values) => {  
      console.log(values);
    },
    validationSchema: Yup.object({
      firstName: Yup.string().max(15, 'First name must be 15 characters or less').required('First name is required'),
      lastName: Yup.string().required('Last name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required')
    })
  });


  return (
    <div>
       <h1>Formik YUP Tutorial</h1>

      <form noValidate onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input type="text" id='firstName' placeholder='Enter your first name' autoComplete="new-lastname" { ...getFieldProps('firstName') }
              className={`${ touched.firstName && errors.firstName && 'has-error' }`}/>
          { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input type="text" id='lastName' placeholder='Enter your last name' autoComplete="new-lastname" { ...getFieldProps('lastName') }
              className={`${touched.lastName && errors.lastName && 'has-error' }`}/>
          { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" id='email' placeholder='Enter your email address' autoComplete="new-email" { ...getFieldProps('email') }
            className={`${ touched.email && errors.email && 'has-error' }`}/>
          { touched.email && errors.email && <span>{ errors.email }</span>}
        </div>
        <button type="submit">Register</button>
      </form>

    </div>
  )
}

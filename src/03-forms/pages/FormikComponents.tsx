
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {

  return (
    <div>
       <h1>Formik Components Tutorial</h1>

       <Formik initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            terms: false,
            jobType: ''
          }}
          onSubmit={(values) => {
            console.log(values)
          }}
          validationSchema= {
            Yup.object({
              firstName: Yup.string().max(15, 'First name must be 15 characters or less').required('First name is required'),
              lastName: Yup.string().required('Last name is required'),
              email: Yup.string().email('Invalid email address').required('Email is required'),
              terms: Yup.boolean().oneOf([true], 'You must accept the terms and coditions'),
              jobType: Yup.string().required('Job type is required')
            })
          }
        >
          {({errors, touched}) => (
              <Form noValidate autoComplete='off'>
                <div className="form-group">
                  <label htmlFor="firstName">First name</label>
                  <Field type='text' name='firstName' id='firstName' placeholder='Enter your first name'
                    className={`${ touched.firstName && errors.firstName && 'has-error' }`}/>
                  <ErrorMessage name='firstName' component='span'/>
                </div>
                <div className="form-group">
                  <label htmlFor="lastName">Last name</label>
                  <Field type='text' name='lastName' id='lastName' placeholder='Enter your last name'
                    className={`${ touched.lastName && errors.lastName && 'has-error' }`}/>
                  <ErrorMessage name='lastName' component='span'/>
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email address</label>
                  <Field type='email' name='email' id='email' placeholder='Enter your email address'
                    className={`${ touched.email && errors.email && 'has-error' }`}/>
                  <ErrorMessage name='email' component='span'/>
                </div>
                <div className="form-group">
                  <label htmlFor="jobType">Job type</label>
                  <Field as='select' name='jobType' id='jobType' className={`${ touched.jobType && errors.jobType && 'has-error' }`}>
                      <option value="">Choose a job type</option>
                      <option value="developer">Developer</option>
                      <option value="designer">Designer</option>
                      <option value="it-senior">IT Senior</option>
                      <option value="it-jr">IT Junior</option>
                  </Field>
                  <ErrorMessage name='jobType' component='span'/>
                </div>
                <div className="form-group">
                  <label htmlFor="terms">
                    <Field type='checkbox' name='terms' id='terms'/>
                    Accept terms and coditions
                  </label>
                  <ErrorMessage name='terms' component='span'/>
                </div>
                <button type="submit">Register</button>
              </Form>
            )
          }
       </Formik>
    </div>
  )
}

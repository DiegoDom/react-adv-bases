
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckboxInput, MySelectInput, MyTextInput } from '../components';

import '../styles/styles.css';

export const FormikAbstraction = () => {

  return (
    <div>
       <h1>Formik Abstraction</h1>

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
          {() => (
              <Form noValidate autoComplete='off'>

                <MyTextInput label='First name' name='firstName' id='firstName' placeholder='Enter your first name'/>
                <MyTextInput label='Last name' name='lastName' id='lastName' placeholder='Enter your last name'/>
                <MyTextInput type='email' label='Email address' name='email' id='email' placeholder='Enter your email address'/>
                <MySelectInput label='Job type' name='jobType' id='jobType'>
                  <option value="">Choose a job type</option>
                  <option value="developer">Developer</option>
                  <option value="designer">Designer</option>
                  <option value="it-senior">IT Senior</option>
                  <option value="it-jr">IT Junior</option>
                </MySelectInput>
                <MyCheckboxInput label='Accept terms & coditions' name='terms' id='terms'/>
                <button type="submit">Register</button>
              </Form>
            )
          }
       </Formik>
    </div>
  )
}

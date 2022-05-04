
import { FormikErrors, useFormik } from 'formik';

import '../styles/styles.css';

interface FormValues {
  firstName: string,
  lastName: string,
  email: string
}

export const FormikBasicPage = () => {

  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};
    if (!firstName) {
      errors.firstName = 'First name is required';
    } else if(firstName.length > 15) {
      errors.firstName = 'First name must be 15 characters or less';
    }

    if (!lastName) {
      errors.lastName = 'Last name is required';
    }
    
    if (!email) {
      errors.email = 'Email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }

    return errors;
  };

  const { handleChange, handleSubmit, values: { firstName, lastName, email }, errors, touched, handleBlur } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: ''
    },
    onSubmit: (values) => {  
      console.log(values);
    },
    validate
  });


  return (
    <div>
       <h1>Formik Basic Tutorial</h1>

      <form noValidate autoComplete='none' onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First name</label>
          <input type="text" name="firstName" id="firstName" placeholder='Enter your first name' autoComplete="new-lastname"
            onChange={ handleChange } value={ firstName } onBlur={ handleBlur } className={`${ errors.firstName && 'has-error' }`}/>
          { touched.firstName && errors.firstName && <span>{ errors.firstName }</span>}
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last name</label>
          <input type="text" name="lastName" id="lastName" placeholder='Enter your last name' autoComplete="new-lastname"
            onChange={ handleChange } value={ lastName } onBlur={ handleBlur } className={`${ errors.lastName && 'has-error' }`}/>
          { touched.lastName && errors.lastName && <span>{ errors.lastName }</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input type="email" name="email" id="email" placeholder='Enter your email address' autoComplete="new-email"
           onChange={ handleChange } value={ email } onBlur={ handleBlur } className={`${ errors.email && 'has-error' }`}/>
          { touched.email && errors.email && <span>{ errors.email }</span>}
        </div>
        <button type="submit">Register</button>
      </form>

    </div>
  )
}

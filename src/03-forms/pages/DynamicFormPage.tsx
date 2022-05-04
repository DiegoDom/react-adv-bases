
import { Formik, Form } from 'formik'
import * as Yup from 'yup';

import { MySelectInput, MyTextInput } from '../components';
import formJson from '../data/custom-form.json';

interface Fields {
  [key: string]: any
}

const initialValues: Fields = {};
const requiredFields: Fields = {};

for (const input of formJson) {
  initialValues[input.name] = input.value;
  
  if (!input.validations) continue;
  
  let schema = Yup.string();

  for (const rule of input.validations) {
    if (rule.type === 'required') {
      schema = schema.required('This field is required')
    }

    if (rule.type === 'minLength') {
      schema = schema.min((rule as any).value || 2, `Enter at leats ${ (rule as any).value || 2 } characters`)
    }

    if (rule.type === 'email') {
      schema = schema.email('Invalid email address')
    }
  }

  requiredFields[input.name] = schema;
}

const validationSchema = Yup.object({ ...requiredFields });

export const DynamicFormPage = () => {
  return (
    <div>
      <h1>DynamicFormPage</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={ (values) => {
          console.log(values)
        }}
        validationSchema={ validationSchema }
      >
        {(formik) => (
          <Form noValidate>
            
            {
              formJson.map(({type, label, name, placeholder, options}) => {

                const props = {
                  key: name,
                  label,
                  name,
                  placeholder,
                  options,
                  type: (type as any)
                }

                const fields: Fields = {
                  input: <MyTextInput { ...props }/>,
                  text: <MyTextInput { ...props }/>,
                  email: <MyTextInput { ...props }/>,
                  password: <MyTextInput { ...props }/>,
                  select: (<MySelectInput {...props}>
                    <option value="">Select an option</option>
                    {
                      props.options?.map(({ id, label }) => (
                        <option key={id} value={ id }>{ label }</option>
                      ))
                    }
                  </MySelectInput>)
                }
                
                return fields[type];
              })
            }

            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  placeholder?: string;
  [x: string]: any;
}

export const MyTextInput = ({ label, ...props }: Props) => {

  const [ field, meta ] = useField(props);

  return (
    <div className="form-group">
      <label htmlFor={ props.id || props.name }>{ label }</label>
      <input { ...field } { ...props } className={`${  meta.touched && meta.error && 'has-error' }`} />
      <ErrorMessage name={ props.name } component='span'/>
    </div>
  )
}

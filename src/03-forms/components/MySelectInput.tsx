import { ErrorMessage, useField } from 'formik';

interface Props {
  label: string;
  name: string;
  placeholder?: string;
  [x: string]: any;
}

export const MySelectInput = ({ label, ...props }: Props) => {

  const [ field, meta ] = useField(props);

  return (
    <div className="form-group">
      <label htmlFor={ props.id || props.name }>{ label }</label>
      <select { ...field } { ...props } className={`${  meta.touched && meta.error && 'has-error' }`} />
      <ErrorMessage name={ props.name } component='span'/>
    </div>
  )
}

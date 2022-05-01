import { FormEvent } from 'react';
import { useForm } from '../hooks/useForm';

import '../styles/styles.css';

export const RegisterPage = () => {

  const { name, email, password, password2, onChange, reset, isValidEmail } = useForm({
    name: '',
    email: 'ddominguez@dev.com',
    password: '',
    password2: ''
  });
  
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(name, email, password, password2);
    reset();
  };

  return (
    <div>
      <h1>Register Page</h1> 
      <form noValidate onSubmit={ onSubmit }>
        <input type="text" name="name" id="name" value={name} onChange={ onChange }
          placeholder="Enter your name" autoComplete="new-lastname" className={ `${ name.trim().length <= 0 && 'has-error' }` } />
        { name.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        <input type="email" name="email" id="email" value={email} onChange={ onChange } placeholder="Enter your email" 
          autoComplete="new-email" className={ `${ !isValidEmail(email) && 'has-error' }` }/>
        { !isValidEmail(email) && <span>Este email no es válido</span>}
        <input type="password" name="password" id="password" value={password} onChange={ onChange } placeholder="Enter your password"/>
        { password.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        { password.trim().length < 6 && password.trim().length > 0 && <span>Ingrese al menos 6 caracteres</span>}
        <input type="password" name="password2" id="password2" value={password2} onChange={ onChange } placeholder="Confirm your password"/>
        { password2.trim().length <= 0 && <span>Este campo es obligatorio</span>}
        { password2.trim().length > 0 && password !== password2 && <span>Las contraseñas no coinciden</span>}
        <button type="submit">Register</button>
      </form>
    </div> 
  )
}

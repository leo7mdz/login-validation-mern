import React from "react";
import { Link } from "react-router-dom";
import useFormLogin from "../hooks/useFormLogin";
import { regexEmail, regexPassword } from "../regex/regEx";

const FormLogin = () => {
  const initialValue = {
    email: "",
    password: "",
  };

  const validateForm = (form) => {
    const errors = {};

    if (!form.email.trim()) {
      errors.email = "El campo es requerido";
    } else if (!regexEmail.test(form.email)) {
      errors.email = "Formato no valido";
    }

    if (!form.password.trim()) {
      errors.password = "El campo es requerido";
    } /* else if (!regexPassword.test(form.password)) {
      errors.password = "Password incorrecto";
    }
 */
    return errors;
  };

  const {
    formValue,
    errors,
    response,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useFormLogin(initialValue, validateForm);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="ingrese su email.."
            onChange={handleChange}
            value={formValue.email}
            required
            onBlur={handleBlur}
          />
        </div>
        {errors.email && <p>{errors.email}</p>}
        <div>
          <input
            type="password"
            name="password"
            placeholder="ingrese su password.."
            onChange={handleChange}
            value={formValue.password}
            required
            onBlur={handleBlur}
          />
        </div>
        {errors.password && <p>{errors.password}</p>}
        <input type="submit" value="Enviar" />
      </form>
      <p className="paragraph-login">{response.message}</p>
      <p className="paragraph-login">Or</p>
      <Link className="link-login" to="/register">
        Register
      </Link>
    </div>
  );
};

export default FormLogin;

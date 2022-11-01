import useForm from "../hooks/useFormRegister";
import style from "./register.module.css";
import {
  regexEmail,
  regexLastName,
  regexName,
  regexPassword,
} from "../regex/regEx";

const Register = () => {
  const initialValue = {
    name: "",
    lastname: "",
    age: "",
    profession: "",
    email: "",
    password: "",
  };

  const validateForm = (form) => {
    const errors = {};
    if (!form.name.trim()) {
      errors.name = "El campo es requerdo";
    } else if (!regexName.test(form.name)) {
      errors.name = "no es correcto";
    }

    if (!form.lastname.trim()) {
      errors.lastname = "El campo es requerdo";
    } else if (!regexLastName.test(form.lastname)) {
      errors.lastname = "no es correcto";
    }

    if (!form.age.trim()) {
      errors.age = "El campo es requerdo";
    } else if (form.age.length < 1 || form.age.length > 3) {
      errors.age = "valor incorrecto";
    } else if (form.age < 1) {
      errors.age = "el Valor no puede ser 0, ni un numero negativo";
    }

    if (!form.profession.trim()) {
      errors.profession = "El campo es requerido";
    }

    if (!form.email.trim()) {
      errors.email = "El campo es requerdo";
    } else if (!regexEmail.test(form.email)) {
      errors.email = "no es correcto";
    }

    if (!form.password.trim()) {
      errors.password = "El campo es requerdo";
    } else if (!regexPassword.test(form.password)) {
      errors.password = "no es correcto";
    }
    //console.log(errores);
    return errors;
  };

  const {
    formValue: form,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
  } = useForm(initialValue, validateForm);

  return (
    <div>
      <h2>Registro</h2>
      <form className={style.form} onSubmit={handleSubmit}>
        <div>
          <input
            className={style.formInput}
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="ingrese su nombre/s"
            value={form.name}
            onBlur={handleBlur}
            required
          />
        </div>
        {errors.name && <p className={style.errors}>{errors.name}</p>}
        <div>
          <input
            className={style.formInput}
            onChange={handleChange}
            type="text"
            name="lastname"
            placeholder="ingrese su apellido"
            value={form.lastname}
            onBlur={handleBlur}
            required
          />
        </div>
        {errors.lastname && <p className={style.errors}>{errors.lastname}</p>}
        <div>
          <input
            className={style.formInput}
            onChange={handleChange}
            type="number"
            value={form.age}
            name="age"
            placeholder="ingrese su edad"
            onBlur={handleBlur}
            required
          />
        </div>
        {errors.age && <p className={style.errors}>{errors.age}</p>}
        <div>
          <input
            className={style.formInput}
            onChange={handleChange}
            type="text"
            name="profession"
            placeholder="ingrese su profesion"
            value={form.profession}
            onBlur={handleBlur}
            required
          />
        </div>
        {errors.profession && (
          <p className={style.errors}>{errors.profession}</p>
        )}
        <div>
          <input
            className={style.formInput}
            onChange={handleChange}
            type="email"
            name="email"
            placeholder="ingrese su email.."
            value={form.email}
            onBlur={handleBlur}
            required
          />
        </div>
        {errors.email && <p className={style.errors}>{errors.email}</p>}
        <div>
          <input
            className={style.formInput}
            onChange={handleChange}
            type="password"
            name="password"
            placeholder="ingrese su password.."
            value={form.password}
            onBlur={handleBlur}
            required
          />
        </div>
        {errors.password && <p className={style.errors}>{errors.password}</p>}
        <input className={style.button} type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default Register;

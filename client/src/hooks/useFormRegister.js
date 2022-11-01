import { useState } from "react";

const useForm = (initialValue, validate) => {
  const [formValue, setFormValue] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    handleChange(e);

    setErrors(validate(formValue));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(formValue));

    console.log(formValue);
    console.log(errors);
    if (Object.keys(errors).length === 0) {
      const res = await fetch("http://localhost:4000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
      });
      const data = await res.json();
      console.log(data);
      console.log("formulario enviado");
      setFormValue(initialValue);
    }
  };

  return {
    formValue,
    errors,
    handleChange,
    handleSubmit,
    handleBlur,
  };
};

export default useForm;

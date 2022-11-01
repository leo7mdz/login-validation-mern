import { useState } from "react";
import { useNavigate } from "react-router-dom";

const useFormLogin = (initialValue, validate) => {
  const [formValue, setFormValue] = useState(initialValue);
  const [errors, setErrors] = useState({});
  const [response, setResponse] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleBlur = (e) => {
    handleChange(e);
    setErrors(validate(formValue));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validate(formValue));
    console.log(errors);

    if (Object.keys(errors).length === 0) {
      const res = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
      });
      console.log("formulario enviado");

      const data = await res.json();
      setResponse(data);

      setFormValue(initialValue);
      if (data.token) {
        localStorage.setItem("jwt", JSON.stringify(data));
        navigate("/profile");
      }

      console.log(data);
    }
  };

  return {
    formValue,
    errors,
    response,
    handleChange,
    handleSubmit,
    handleBlur,
  };
};

export default useFormLogin;

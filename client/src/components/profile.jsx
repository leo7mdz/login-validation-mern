import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const token = localStorage.getItem("jwt")
    ? Object.values(JSON.parse(localStorage.getItem("jwt")))
    : "";
  const navigate = useNavigate();

  console.log(token);
  const [userInfo, setUserInfo] = useState("");
  const [userJwt, setUserJwt] = useState(token);

  if (!userJwt) {
    return <p>no tiene acceso</p>;
  }

  console.log(userJwt);

  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:4000/user/profile", {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userJwt}`,
        },
      });
      const data = await res.json();

      setUserInfo(data);
    })();
  }, []);
  const { name, lastname, age, profession, email } = userInfo;
  console.log(userInfo);

  const handleClick = () => {
    const option = confirm("¿Desea cerrar sesion?");
    if (option === true) {
      localStorage.removeItem("jwt");
      navigate("/");
    }
  };

  return (
    <div>
      <h2>Informacion</h2>
      <ul>
        <li>{name}</li>
        <li>{lastname}</li>
        <li>{age}</li>
        <li>{profession}</li>
        <li>{email}</li>
      </ul>
      <button onClick={handleClick}>Cerrar sesion</button>
    </div>
  );
};

export default Profile;

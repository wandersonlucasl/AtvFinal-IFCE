import { useState, useEffect } from "react";
import "./Usuarios.css"
import blogPweb from "../axios/config";

const Usuarios = () => {
    const [usuarios, setUsuarios] = useState([]);

  const getUsuarios = async() => {
    try {
      const response = await blogPweb.get("/users");

      const data = response.data;

      setUsuarios(data);
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    getUsuarios();

  }, []);
  return <div className="usuario">
    <h1> Usuários </h1>
    {usuarios.length === 0 ? <p>Carregando...</p> : (
      usuarios.map((user) => (
        <div className="user" key={user.id}>
          <h2>Nome: {user.name}</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Site: {user.website}</p>
          
        </div>
      ))
    )}
  </div>
};

export default Usuarios;

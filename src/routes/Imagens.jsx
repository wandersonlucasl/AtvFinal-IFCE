import { useState, useEffect } from "react";
import "./Imagens.css";
import blogPweb from "../axios/config";


const Imagens = () => {
    const [imagens, setImagens] = useState([]);

  const getImagens = async() => {
    try {
      const response = await blogPweb.get("/photos");

      const data = response.data;

      setImagens(data);
    } catch (error) {
      console.log(error);
    }

  }
  useEffect(() => {
    getImagens();

  }, []);
  return <div className="imagens">
    <h1> Imagens</h1>
    {imagens.length === 0 ? <p>Carregando...</p> : (
      imagens.map((photo) => (
        <div className="photo" key={photo.id}>
          <h2>{photo.title}</h2>
          <img src={photo.url} alt="photo2" className="foto"/>
        </div>
      ))
    )}
  </div>
};

export default Imagens

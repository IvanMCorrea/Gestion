import React, {useState, useEffect} from 'react'
import listaProductos from '../data/db.json';
//import { traerProductos } from "../services/firestore";

const Main = () => {
  const [productos, setProductos] = useState([]);
  const [renderizar, setRenderizar] = useState(false);
  useEffect(() => {
    setProductos(listaProductos);
    if(productos !== ""){
      setRenderizar(true)
    }
  }, [productos]);
  const renderizarCod = ()=>{
    if((productos !== "")){
      return (
      <>
        <h1>{productos[0].name}</h1>
        <p>{productos[0].category}</p>
      </>)
    }else{
      return(
        <div>NADA</div>
    )}
  }
  return (
    <div>
      {(renderizar === true) ? renderizarCod() : null}
    </div>
  )
}

export default Main
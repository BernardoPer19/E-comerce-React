import  { useEffect, useState } from "react";



export const useFetch = () =>{
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((rspJson) => {
            // Verifica la estructura de la respuesta JSON y ajusta según sea necesario
            const productos = Array.isArray(rspJson) ? rspJson : [];
            setData(productos);
          })
          .catch((error) => {
            console.log("hubo un error", error);
          });
      }, []);

      console.log(data);

      return {data}
}

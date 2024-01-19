import { useFetch } from "../hooks/useFetch";
import React, { useContext } from "react";
import ContextFilter from "../context/ContextFilter";
import FilterButtons from "./FilterButtons";

const Producto = () => {
  const { data } = useFetch();

  const { filterproduct } = useContext(ContextFilter);

  const filtrado = data.filter((item) => {
    return(
      (item.category === filterproduct.category ||
      filterproduct.category === "all") && item.price>=filterproduct.minPrice
    )
  });

  console.log(filtrado);

  return (
    <>
      <h1 className="hunu">Productos</h1>

      <FilterButtons></FilterButtons>
      <div className="cardContainer container">
        {filtrado.map((producto) => (
          <div key={producto.id} className="containerProd">
            <h4>{producto.title}</h4>
            <div className="containerImgProd">
              <img src={producto.image} alt="" className="imgCard" />
            </div>
            <div className="contentCart">
              <p>
                Precio: <span> {producto.price}</span>$
              </p>
              <button className="btn3">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Producto;

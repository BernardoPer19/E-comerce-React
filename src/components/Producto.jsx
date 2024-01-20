import { useFetch } from "../hooks/useFetch";
import React, { useContext } from "react";
import ContextFilter from "../context/ContextFilter";
import FilterButtons from "./FilterButtons";

const Producto = () => {
  const { data, loading, error } = useFetch();
  const { filterproduct } = useContext(ContextFilter);

  if (loading) {
    return <p>Loading...</p>; // Add a loading indicator
  }

  if (error) {
    return <p>Error fetching data.</p>; // Handle errors
  }

  const filtrado = data.filter((item) => {
    return (
      (item.category === filterproduct.category ||
        filterproduct.category === "all") &&
      item.price >= filterproduct.minPrice
    );
  });

  return (
    <div className="tienda">
      <h1 className="hunu">Productos</h1>

      <FilterButtons />

      <div className="cardContainer container">
        {filtrado.length > 0 ? (
          filtrado.map((producto) => (
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
          ))
        ) : (
          <p>No products found.</p>
        )}
      </div>
    </div>
  );
};

export default Producto;

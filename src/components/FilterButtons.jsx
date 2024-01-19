import { useContext } from "react";
import ContextFilter from "../context/ContextFilter";

const FilterButtons = () => {
    const { filterproduct, setFilterProduct } = useContext(ContextFilter);
    
const handleSelect = (e) =>{
   setFilterProduct(prevState=>({
    ...prevState,
    category: e.target.value
   }))
}

const handleInput = (e) =>{
    setFilterProduct(prevState=>({
     ...prevState,
     minPrice: e.target.value
    }))
 }
     
    

    

  return (
        <div className="containerFilters">
            <select onChange={handleSelect}>
        <option value="all">Todos</option>
        <option value="jewelery">Accesorios</option>
        <option value="electronics">Electricos</option>
        <option value="women's clothing">Ropa Mujer</option>
        <option value="men's clothing">Ropa Hombre</option>
    </select>

    <div className="preciosFIl">
    <input type="range"  value={filterproduct.minPrice}   onChange={handleInput} min={7.95} max={999}/>

<span>{filterproduct.minPrice}</span>
    </div>
    </div>
  );
};

export default FilterButtons;

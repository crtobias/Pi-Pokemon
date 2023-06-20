
import TypesFilter from "../TypesFilter/TypesFilter";
import Ordenator from "../Ordenator/Ordenator";
import "./Navbar.css";
import { Link } from "react-router-dom";

//los handel son traidas del componente home para el render en busqueda y filtrado
function Navbar({ handleChange, handleSubmit, setPage, handleClear }) {
  return (
    <div class="nav-bars">
      <form class="searchabrnashe" onChange={handleChange}>
          <input placeholder="Busqueda" type="search" className="input-search" />
          <button type="submit" onClick={handleSubmit} class="buttonss">
            BUSCAR
          </button>
      </form>
      <div className="types">
        <TypesFilter setPage={setPage} />
        <Ordenator setPage={setPage}/>
      </div>
      <div className="button-container">
        <button onClick={handleClear} className="button" >CLEAR</button>
        <Link to={`/createPoke`}>
          <button className="button">CREATE POKÉMON</button>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

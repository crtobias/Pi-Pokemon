import { Link } from "react-router-dom";

import "./Card.css";

function Card({ pokemon }) {
  const { id, name, img, attack, types } = pokemon;

  return (
    <div class="card-container">
      <Link to={`/details/${id}`}>
        <div className="info">
          <h2>{name.toUpperCase()}</h2> 
          <h2>
            {types
              ?.map((t) => {
                return t.name;
              })
              .join(", ")}
          </h2>
        </div>
        <div >
          <img class="imgcard" src={img} alt="imagenpoke" />
        </div>
      </Link>
    </div>
  );
}

export default Card;

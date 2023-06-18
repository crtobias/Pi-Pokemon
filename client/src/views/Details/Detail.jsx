import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { cleanDetails, getDetails } from "../../redux/actions";
import './Detail.css';

function DetailsPage() {
  const dispatch = useDispatch();
  const details = useSelector((state) => state.details);
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  useEffect(() => {
    return () => {
      dispatch(cleanDetails());
    };
  }, [dispatch]);

  if (details.id) {
    return (
      <div className="detail-wrapper">
        <div>
          <Link to={`/home`}>
            <button className="to-home">HOME</button>
          </Link>
        </div>
        <div className="container-detail">
          <section className="img">
            <img
              src={details.img}
              alt={`${details.name} sprite`}
              className="poke-img"
            />
          </section>
          <section className="info-poke">
            <h1 className="poke-name">{`${details.name[0].toUpperCase()}${details.name.slice(
              1
            )}`}</h1>
            <div className="type-name">
              {details?.types?.map((t, i) => (
                <p key={i}>{t.name.toUpperCase()}</p>
              ))}
            </div>
            <div className="details">
              <p>Health: {details.health}</p>
              <p>Speed: {details.speed}</p>
              <p>Defense: {details.defense}</p>
              <p>Attack: {details.attack}</p>
              <p>Height: {details.height}</p>
              <p>Weight: {details.weight}</p>
            </div>
          </section>
        </div>
      </div>
    );
  } else {
    return <h1>Loading...</h1>;
  }
}

export default DetailsPage;

import React from "react";
import "./index.scss";
import { useSelector } from "react-redux/es/exports";
import { useNavigate } from "react-router";

const Card = (props) => {
  const mode = useSelector((state) => state.mode);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/country-details/${props.name}`);
  };

  return (
    <div
      className="card-container light-bg"
      data-dark={`${mode.darkMode}`}
      onClick={handleNavigate}
    >
      <img src={props.flag} alt={props.name} />
      <section className="data">
        <h3 className="ternary-heading" data-dark={`${mode.darkMode}`}>
          {props.name}
        </h3>
        <section className="data-item">
          <span className="bold primary-text" data-dark={`${mode.darkMode}`}>
            Population: &nbsp;
          </span>
          <span className="primary-text" data-dark={`${mode.darkMode}`}>
            {props.population}
          </span>
        </section>
        <section className="data-item">
          <span className="bold primary-text" data-dark={`${mode.darkMode}`}>
            Region:&nbsp;
          </span>
          <span className="primary-text" data-dark={`${mode.darkMode}`}>
            {props.region}
          </span>
        </section>
        <section className="data-item">
          <span className="bold primary-text" data-dark={`${mode.darkMode}`}>
            Capital:&nbsp;
          </span>
          <span className="primary-text" data-dark={`${mode.darkMode}`}>
            {props.capital}
          </span>
        </section>
      </section>
    </div>
  );
};

export default Card;

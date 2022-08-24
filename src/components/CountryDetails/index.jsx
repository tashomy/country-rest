import React, { useEffect, useState } from "react";
import "./index.scss";
import { useParams } from "react-router";
import { fetchFullName } from "../../services";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "../Loader";

const CountryDetails = () => {
  const country = useParams();
  const mode = useSelector((state) => state.mode);
  const [currCountry, setCurrCountry] = useState([]);
  console.log(country);

  useEffect(() => {
    fetchFullName(country.countryId).then((data) => {
      setCurrCountry(data.data);
    });
  }, []);

  if (currCountry.length !== 0) {
    return (
      <div
        className="country-details-wrap light-bg "
        data-dark={`${mode.darkMode}`}
      >
        <div className="container">
          <Link to={"/"} className="detail-back">
            &#x2190; &nbsp;Back
          </Link>
          <img src={currCountry[0].flags.svg} alt="" />
          <div className="content">
            <h1 className="primary-heading" data-dark={`${mode.darkMode}`}>
              {currCountry[0].name.common}
            </h1>
            <section className="details-item">
              <span
                className="bold primary-text"
                data-dark={`${mode.darkMode}`}
              >
                Native Name: &nbsp;
              </span>
              <span className="primary-text" data-dark={`${mode.darkMode}`}>
                {Object.values(currCountry[0].name.nativeName)
                  ? Object.values(currCountry[0].name.nativeName).map((i) => {
                      return (
                        <span
                          className="primary-text"
                          data-dark={`${mode.darkMode}`}
                        >
                          {i.official} &nbsp;
                        </span>
                      );
                    })
                  : "unknown"}
              </span>
            </section>
            <section className="details-item">
              <span
                className="bold primary-text"
                data-dark={`${mode.darkMode}`}
              >
                Population: &nbsp;
              </span>
              <span className="primary-text" data-dark={`${mode.darkMode}`}>
                {currCountry[0].population
                  ? currCountry[0].population
                  : "unknown"}
              </span>
            </section>
            <section className="details-item">
              <span
                className="bold primary-text"
                data-dark={`${mode.darkMode}`}
              >
                Region: &nbsp;
              </span>
              <span className="primary-text" data-dark={`${mode.darkMode}`}>
                {currCountry[0].region ? currCountry[0].region : "unknown"}
              </span>
            </section>
            <section className="details-item">
              <span
                className="bold primary-text"
                data-dark={`${mode.darkMode}`}
              >
                Subregion: &nbsp;
              </span>
              <span className="primary-text" data-dark={`${mode.darkMode}`}>
                {currCountry[0].subregion
                  ? currCountry[0].subregion
                  : "unknown"}
              </span>
            </section>
            <section className="details-item">
              <span
                className="bold primary-text"
                data-dark={`${mode.darkMode}`}
              >
                Capital: &nbsp;
              </span>
              <span className="primary-text" data-dark={`${mode.darkMode}`}>
                {currCountry[0].capital ? currCountry[0].capital : "unknown"}
              </span>
            </section>
            <section className="details-item">
              <span
                className="bold primary-text"
                data-dark={`${mode.darkMode}`}
              >
                Top level domain: &nbsp;
              </span>
              <span className="primary-text" data-dark={`${mode.darkMode}`}>
                {currCountry[0].tld[0] ? currCountry[0].tld[0] : "unknown"}
              </span>
            </section>
            <section className="details-item">
              <span
                className="bold primary-text"
                data-dark={`${mode.darkMode}`}
              >
                Currencies: &nbsp;
              </span>
              {Object.values(currCountry[0].currencies)
                ? Object.values(currCountry[0].currencies).map((curr) => {
                    return (
                      <span
                        className="primary-text"
                        data-dark={`${mode.darkMode}`}
                      >
                        {curr.name} &nbsp;
                      </span>
                    );
                  })
                : "unknown"}
            </section>
            <section className="details-item">
              <span
                className="bold primary-text"
                data-dark={`${mode.darkMode}`}
              >
                Languages: &nbsp;
              </span>
              {Object.values(currCountry[0].languages)
                ? Object.values(currCountry[0].languages).map((lan) => {
                    return (
                      <span
                        className="primary-text"
                        data-dark={`${mode.darkMode}`}
                      >
                        {lan} &nbsp;
                      </span>
                    );
                  })
                : ""}
            </section>
            <section className="details-item border-section">
              <span
                className="primary-text bold"
                data-dark={`${mode.darkMode}`}
              >
                Border countries: &nbsp;
              </span>

              {currCountry[0].borders
                ? currCountry[0].borders.map((border) => {
                    return (
                      <span
                        className="primary-text details-border"
                        data-dark={`${mode.darkMode}`}
                      >
                        {border} &nbsp;
                      </span>
                    );
                  })
                : "unknown"}
            </section>
          </div>
        </div>
      </div>
    );
  } else return <Loader />;
};

export default CountryDetails;

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./index.scss";
import { AiOutlineSearch } from "react-icons/ai";
import {
  fetchAllCountries,
  fetchContinents,
  fetchSearch,
} from "../../services";
import Paginate from "../PaginateCountry";
import Loader from "../Loader";

const Home = () => {
  const mode = useSelector((state) => state.mode);
  const [loading, setLoading] = useState(false);
  const [currCountries, setCurrCountries] = useState([]);

  useEffect(() => {
    if (currCountries === "no") return;
    setLoading(true);
    fetchAllCountries().then((data) => {
      setCurrCountries(data.data);
      setLoading(false);
      if (document.querySelector(".react-paginate")) {
        if (mode.darkMode === true) {
          document.querySelector(".react-paginate").classList.add("dark");
        } else {
          document.querySelector(".react-paginate").classList.remove("dark");
        }
      }
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (mode.darkMode === true) {
        document.querySelector(".react-paginate").classList.add("dark");
      } else {
        document.querySelector(".react-paginate").classList.remove("dark");
      }
    }, 500);
  }, [currCountries, mode.darkMode]);

  //this is making sure that no matter how fast someone is typing we only make one call based on the last change

  var delayTimer;

  const handleSearch = (e) => {
    setLoading(true);

    clearTimeout(delayTimer);
    delayTimer = setTimeout(function () {
      if (e.target.value === "") {
        fetchAllCountries().then((data) => {
          setCurrCountries(data.data);
          setLoading(false);
        });

        return;
      }
      fetchSearch(e.target.value).then((data) => {
        if (data === "no") {
          setCurrCountries(data);
          setLoading(false);
          return;
        }
        setCurrCountries(data.data);
        setLoading(false);
      });
    }, 1000);
  };

  const handleContinents = (e) => {
    setLoading(true);
    if (e.target.value === "all") {
      fetchAllCountries().then((data) => {
        setCurrCountries(data.data);
        setLoading(false);
      });
    } else {
      fetchContinents(e.target.value).then((data) => {
        setCurrCountries(data.data);
        setLoading(false);
      });
    }
  };

  if (currCountries === "no") {
    return (
      <div className="hero light-bg" data-dark={`${mode.darkMode}`}>
        <div className="container">
          <div className="search-filter">
            <section className="search-bar">
              <button>
                <AiOutlineSearch />
              </button>
              <input
                type="text"
                placeholder="Search for a country"
                onChange={handleSearch}
              />
            </section>
            <select name="region" id="region" onChange={handleContinents}>
              <option value="all">All continents</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
          <div className="card-wrap">
            {loading && <Loader />}
            <h1
              className="primary-heading error-search"
              data-dark={`${mode.darkMode}`}
            >
              Not found
            </h1>
            <div className="card-wrap">
              {/* {loading && <Loader />} */}
              {/* <Paginate countries={currCountries} itemsPerPage={8} /> */}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="hero light-bg" data-dark={`${mode.darkMode}`}>
      <div className="container">
        <div className="search-filter">
          <section className="search-bar">
            <button>
              <AiOutlineSearch />
            </button>
            <input
              type="text"
              placeholder="Search for a country"
              onChange={handleSearch}
            />
          </section>
          <select name="region" id="region" onChange={handleContinents}>
            <option value="all">All continents</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </select>
        </div>
        <div className="card-wrap">
          {loading && <Loader />}
          <Paginate countries={currCountries} itemsPerPage={8} />
        </div>
      </div>
    </div>
  );
};

export default Home;

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

  // greska je to sto ako ukucam sf brzo on ce prvo da zavrsi upit za sf
  //taj upit jeste not found ali ce iz nekog razloga tek nakon toga da
  //odradi upit za samo s i taj ce da ima rezultat i onda ono
  //not found za sf ponistava to s
  useEffect(() => {
    if (currCountries === "no") return;
    setLoading(true);
    fetchAllCountries().then((data) => {
      setCurrCountries(data.data);
      setLoading(false);
      if (mode.darkMode === true) {
        document.querySelector(".react-paginate").classList.add("dark");
      } else {
        document.querySelector(".react-paginate").classList.remove("dark");
      }
    });
  }, []);

  const handleSearch = (e) => {
    setLoading(true);
    if (e.target.value === "") {
      fetchAllCountries().then((data) => {
        setCurrCountries(data.data);
        setLoading(false);
        console.log("all");
      });
      return;
    }
    fetchSearch(e.target.value).then((data) => {
      if (data === "no") {
        setCurrCountries(data);
        setLoading(false);
        console.log("not found");
        return;
      }
      setCurrCountries(data.data);
      console.log("found");
      setLoading(false);
    });
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
            <h1
              className="primary-heading error-search"
              data-dark={`${mode.darkMode}`}
            >
              Not found
            </h1>
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

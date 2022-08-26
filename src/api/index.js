import axios from "axios";

export const fetchAllCountries = () =>
  axios.get("https://restcountries.com/v3.1/all");

export const fetchSearch = (name) =>
  axios.get(`https://restcountries.com/v3.1/name/${name}`);

export const fetchContinents = (name) =>
  axios.get(`https://restcountries.com/v3.1/region/${name}`);

export const fetchFullName = (name) =>
  axios.get(`https://restcountries.com/v3.1/name/${name}?fullText=true`);

export const fetchMultipleCodes = (codes) => {
  let url = "https://restcountries.com/v3.1/alpha?codes=";
  for (let i = 0; i < codes.length; i++) {
    if (i === codes.length - 1) {
      url += codes[i];
    } else {
      url += codes[i] + ",";
    }
  }
  return axios.get(url);
};

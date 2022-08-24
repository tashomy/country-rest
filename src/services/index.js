import * as api from "../api/index";

export const fetchAllCountries = async () => {
  try {
    const data = await api.fetchAllCountries();

    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};
export const fetchSearch = async (name) => {
  try {
    const data = await api.fetchSearch(name);
    return data;
  } catch (error) {
    console.log(error);
    return "no";
  }
};
export const fetchContinents = async (name) => {
  try {
    const data = await api.fetchContinents(name);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const fetchFullName = async (name) => {
  try {
    const data = await api.fetchFullName(name);
    return data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

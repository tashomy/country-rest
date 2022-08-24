import { Route, Routes } from "react-router";
import "./App.scss";
import CountryDetails from "./components/CountryDetails";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route
          exact
          path="/country-details/:countryId"
          element={<CountryDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { modeActions } from "../../slices/mode";
import "./index.scss";

const Navbar = () => {
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.mode);

  const handleMode = () => {
    dispatch(modeActions.setDarkMode());
    dispatch(modeActions.setDarkModeValue());
  };

  return (
    <div className="navbar light-bg" data-dark={`${mode.darkMode}`}>
      <div className="container">
        <h2 className="secondary-heading" data-dark={`${mode.darkMode}`}>
          Where in the world?
        </h2>
        <button
          onClick={handleMode}
          className="primary-text"
          data-dark={`${mode.darkMode}`}
        >
          {mode.modeValue}
        </button>
      </div>
    </div>
  );
};

export default Navbar;

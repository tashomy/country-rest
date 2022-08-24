import React from "react";
import "./index.scss";
import { Audio } from "react-loader-spinner";
import { useSelector } from "react-redux";

const Loader = () => {
  const mode = useSelector((state) => state.mode);
  return (
    <div className="audio-loading" data-dark={`${mode.darkMode}`}>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="grey"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
};

export default Loader;

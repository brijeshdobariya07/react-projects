import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index }) => {
  const [alert, setAlert] = useState(false);
  const bcg = rgb.join(",");
  const hex = rgbToHex(...rgb);

  useEffect(() => {
    const timout = setTimeout(() => {
      setAlert(false);
    }, 3000);

    return () => clearTimeout(timout);
  }, [alert]);

  const copyColor = () => {
    setAlert(true);
    navigator.clipboard.writeText(hex);
  };

  return (
    <article
      onClick={copyColor}
      className={`color `}
      style={{ backgroundColor: `rgb(${bcg})` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hex}</p>
      {alert && <p className="alert">Copied to Clipboard</p>}
    </article>
  );
};

export default SingleColor;

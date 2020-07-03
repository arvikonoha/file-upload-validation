import React from "react";
import "./style.css";

function FileError({ error }) {
  return <>{error && <p className="error">{error}</p>}</>;
}

export default FileError;

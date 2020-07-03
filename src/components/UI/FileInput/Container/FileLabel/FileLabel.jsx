import React from "react";
import "./style.css";

function FileLabel({ addFile }) {
  return (
    <label htmlFor="file-input">
      Click here or drop file here to add a file
      <input
        onChange={(event) => {
          let [file] = event.target.files;
          addFile(file);
        }}
        type="file"
        id="file-input"
      />
    </label>
  );
}

export default FileLabel;

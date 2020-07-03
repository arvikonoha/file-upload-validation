import React from "react";
import "./style.css";

function FileList({ files, removeFile }) {
  return (
    <>
      {files.length > 0 &&
        files.map((file) => (
          <p className="file-item" key={file}>
            {file.name}{" "}
            <span className="close-icon" onClick={removeFile.bind(null, file)}>
              x
            </span>
          </p>
        ))}
    </>
  );
}

export default FileList;

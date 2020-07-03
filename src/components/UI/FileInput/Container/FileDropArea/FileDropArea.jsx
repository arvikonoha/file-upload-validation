import React from "react";
import "./style.css";

function FileDropArea({ children, addFile }) {
  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  return (
    <div
      onDrop={(event) => {
        preventDefaults(event);
        let [file] = event.dataTransfer.files;
        addFile(file);
      }}
      onDragOver={(event) => preventDefaults(event)}
      onDragEnter={(event) => preventDefaults(event)}
      onDragLeave={(event) => preventDefaults(event)}
      className="file-container"
    >
      {children}
    </div>
  );
}

export default FileDropArea;

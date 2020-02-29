import React from "react";
import { styles } from "./fileActionStyles";

function FileActions({ setFiles }) {
  return (
    <div className="file-action">
      <button
        type="submit"
        style={{ ...styles.buttonStyles, ...styles.deleteButton }}
        onClick={event => {
          setFiles([]);
        }}
      >
        Cancel
      </button>
      <button
        type="submit"
        style={{ ...styles.buttonStyles, ...styles.uploadButton }}
      >
        Upload
      </button>
    </div>
  );
}

export default FileActions;

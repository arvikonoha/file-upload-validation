import React from "react";
import FileActions from "./FileActions/FileActions";
import { styles } from "./fileListsStyles";

function FileList({ files, setFiles, isUploading }) {
  if (isUploading)
    return (
      <div style={styles.uploadingCard}>
        <p style={styles.loadingParagraph}>Uploading file</p>
        <img alt="loading icon" width="50px" src="./loading.gif" />;
      </div>
    );
  else
    return (
      <ul style={styles.fileList}>
        {files.length ? (
          files.map(file => (
            <li key={file} style={styles.fileListItem}>
              <p>{file.name}</p>
              <FileActions setFiles={setFiles} />
            </li>
          ))
        ) : (
          <li style={{ ...styles.fileListItem, ...styles.fileListEmpty }}>
            No files selected
          </li>
        )}
      </ul>
    );
}

export default FileList;

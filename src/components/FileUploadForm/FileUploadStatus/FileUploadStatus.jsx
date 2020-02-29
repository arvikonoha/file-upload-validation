import React from "react";
import { styles } from "./fileUploadStatusStyles";

function FileUploadStatus({ fileUploadStatus }) {
  return fileUploadStatus.length ? (
    <p style={styles.fileStatus}>{fileUploadStatus}</p>
  ) : null;
}

export default FileUploadStatus;

import React from "react";
import { styles } from "./fileErrorsStyles";

function FileErrors({ fileErrors }) {
  return fileErrors.length
    ? fileErrors.map(error => (
        <p key={error} style={styles.fileError}>
          {error}
        </p>
      ))
    : null;
}

export default FileErrors;

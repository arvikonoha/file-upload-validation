import React from "react";
import Container from "./Container/Container";

function FileInput({ filesChanged, multiple, formats, size }) {
  return (
    <Container
      filesChanged={filesChanged}
      multiple={multiple}
      formats={formats}
      size={size}
    />
  );
}

export default FileInput;

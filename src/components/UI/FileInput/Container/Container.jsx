import React, { useState } from "react";
import FileLabel from "./FileLabel/FileLabel";
import FileDropArea from "./FileDropArea/FileDropArea";
import FileError from "./FileError/FileError";
import FileList from "./FileList/FileList";

function Container({ filesChanged, multiple, formats, size }) {
  let [files, setFiles] = useState([]);
  let [error, setError] = useState("");

  function addFile(file) {
    if (file.size > size * 1024 * 1024)
      handleError(`File is too big, select file within ${size}Mb(s) range.`);
    else if (!formats.some((format) => file.name.endsWith(`${format}`)))
      handleError(`File format is not supported`);
    else if (multiple) {
      setFiles([...files, file], (files) => filesChanged(files));
    } else {
      setFiles([file], (files) => filesChanged(files));
    }
  }

  function handleError(error) {
    setError(error);
    setTimeout(() => setError(""), 3000);
  }

  function removeFile(file) {
    setFiles(
      (files) => files.filter((fileInner) => fileInner !== file),
      (files) => filesChanged(files)
    );
  }

  return (
    <>
      <FileDropArea addFile={addFile}>
        <FileLabel addFile={addFile} />
      </FileDropArea>
      <FileError error={error} />
      <FileList files={files} removeFile={removeFile} />
    </>
  );
}

export default Container;

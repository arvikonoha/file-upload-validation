import React from "react";
import { useState } from "react";
import { styles } from "./fileReaderStyles";

function FileReader({ setFileErrors, setFiles, files, errors }) {
  let [fileOver, setFileOver] = useState(false);

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function containerStyleResolver() {
    return fileOver
      ? { ...styles.dropfileContainer, ...styles.dropfileContainerActive }
      : errors.length
      ? { ...styles.dropfileContainer, ...styles.dropfileContainerErrors }
      : styles.dropfileContainer;
  }

  function labelStyleResolver() {
    return fileOver
      ? { ...styles.fileInputLabel, ...styles.fileInputLabelActive }
      : errors.length
      ? { ...styles.fileInputLabel, ...styles.fileInputLabelErrors }
      : styles.fileInputLabel;
  }

  function resolveFile(file) {
    if (file.size > 5 * 2 ** 20) fileReject();
    else fileSubmit(file);
  }

  function fileSubmit(file) {
    setFileErrors([]);
    setFiles([file]);
  }

  function fileReject() {
    setFileErrors(["File size should not exceed 5Mbs"]);
    setTimeout(() => setFileErrors([]), 3000);
  }

  return (
    <section
      style={containerStyleResolver()}
      onDragOver={event => {
        preventDefaults(event);
        if (!fileOver) setFileOver(true);
      }}
      onDragEnter={event => {
        preventDefaults(event);
      }}
      onDragLeave={event => {
        preventDefaults(event);
        if (fileOver) setFileOver(false);
      }}
      onDrop={event => {
        preventDefaults(event);
        let [submittedFile] = event.dataTransfer.files;
        setFileOver(false);
        resolveFile(submittedFile);
      }}
    >
      <input
        type="file"
        name="invoice-file"
        style={styles.fileInput}
        id="invoice-file"
        onChange={event => {
          let [submittedFile] = event.target.files;

          resolveFile(submittedFile);
        }}
      />
      <label htmlFor="invoice-file" style={labelStyleResolver()}>
        Click on this or drop file here to {files.length ? "change" : "upload"}{" "}
        the file
      </label>
    </section>
  );
}

export default FileReader;

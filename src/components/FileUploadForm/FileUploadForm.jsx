import React from "react";
import FileReader from "./FileReader/FileReader";
import FileErrors from "./FileErrors/FileErrors";
import { useState } from "react";
import FileList from "./FileList/FileList";
import FileUploadStatus from "./FileUploadStatus/FileUploadStatus";

function FileUploadForm() {
  let [fileErrors, setFileErrors] = useState([]);
  let [files, setFiles] = useState([]);
  let [isUploading, setUploading] = useState(false);
  let [uploadStatus, setUploadStatus] = useState("");

  function fileSubmit(e) {
    e.preventDefault();

    const formData = new FormData();

    let [uploadableFile] = files;

    formData.append("invoice-file", uploadableFile);

    const options = {
      method: "POST",
      body: formData
    };
    setUploading(true);
    fetch("https://lit-ocean-31382.herokuapp.com/api/upload", options)
      .then(data => data.json())
      .then(json => {
        setFiles([]);
        setFileErrors([]);
        setUploading(false);
        setUploadStatus("File upload successful");
        setTimeout(() => setUploadStatus(""), 3000);
      })
      .catch(err => {
        console.log(err);
        setUploading(false);
      });
  }

  return (
    <form
      method="POST"
      onSubmit={event => {
        event.preventDefault();
        fileSubmit(event);
      }}
    >
      <FileReader
        errors={fileErrors}
        setFileErrors={setFileErrors}
        setFiles={setFiles}
        files={files}
      />
      <FileErrors fileErrors={fileErrors} />
      <FileUploadStatus fileUploadStatus={uploadStatus} />
      <FileList isUploading={isUploading} files={files} setFiles={setFiles} />
    </form>
  );
}

export default FileUploadForm;

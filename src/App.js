import React from "react";
import FileUploadForm from "./components/FileUploadForm/FileUploadForm";

function App() {
  return (
    <>
      <p style={{ margin: "8px auto", width: "90%" }}>
        Please ensure that the files are equal to/below 5Mbs in size
      </p>
      <FileUploadForm />
    </>
  );
}

export default App;

import React from "react";
// import FileUploadForm from "./components/FileUploadForm/FileUploadForm";
import FileInput from "./components/UI/FileInput/FileInput";

function App() {
  function fileChanged(file) {
    console.log(file);
  }

  return (
    <>
      <FileInput
        multiple={false}
        filesChanged={fileChanged}
        formats={[".pdf", ".jpg", ".png"]}
        size={"3"}
      />
      {/* <FileUploadForm /> */}
    </>
  );
}

export default App;

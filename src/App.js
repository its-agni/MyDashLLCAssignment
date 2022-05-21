import React from "react";
import "./App.scss";
import Form from "./components/Form";
import Image from "./image_background.png";

function App() {
  return (
    <div className="App">
      <div className="row">
        <div className="column img">
          <img src={Image} alt="Something" />
        </div>
        <div className="column form">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import ReactPlayer from "react-player";
import eggs from "./Img/téléchargé.jpg";
import "./App.css";
import "./Style.css";

function App() {
  return (
    <div className="App">
      <div
        className="firstdiv"
        style={{ border: "1px solid black", maxWidth: "50%" }}
      >
        <h1 className="title red">Manai Bilel</h1>
        <div className="divimg">
          <img src="/Img/thumb.png" style={{ width: "40%", height: "200px" }} />
          <img
            src={eggs}
            alt="pathetic"
            style={{ width: "40%", height: "200px" }}
          />
        </div>
        <div className="video">
          <ReactPlayer
            controls
            url="https://www.youtube.com/watch?v=uelHwf8o7_U"
          />
        </div>
      </div>
    </div>
  );
}

export default App;

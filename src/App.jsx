import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import MainRouter from "../MainRouter";
import DotGrid from "./DotGrid";

const App = () => {
  return (
    <>
      <div style={{ position: "fixed", inset: 0, zIndex: 0, width: "100vw", height: "100vh" }}>
        <DotGrid
          dotSize={10}
          gap={15}
          baseColor="#131313ff"
          activeColor="#a2a1a7ff"
          proximity={120}
          shockRadius={250}
          shockStrength={5}
          resistance={750}
          returnDuration={1.5}
        />
      </div>
      <div style={{ position: "relative", zIndex: 1 }}>
        <Router>
          <MainRouter />
        </Router>
      </div>
    </>
  );
};

export default App;

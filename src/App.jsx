import { useState } from "react";
import Signup from "./Componentsss/Signup";
import { AppBar } from "@mui/material";
import Appbar from "./Componentsss/Appbar";

function App() {
  return (
    <div
      style={{
        backgroundColor: "#eeeeee",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Appbar />
      <Signup />
    </div>
  );
}

export default App;

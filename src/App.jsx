import { useState } from "react";
import Signup from "./Components/Signup";
import { AppBar } from "@mui/material";
import Appbar from "./Components/Appbar";

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

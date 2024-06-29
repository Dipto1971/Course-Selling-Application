import { useState } from "react";
import Signup from "./Components/Signup";
import { AppBar } from "@mui/material";
import Appbar from "./Components/Appbar";
import Signin from "./Components/Signin";

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
      <Signin />
    </div>
  );
}

export default App;

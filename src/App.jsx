import { useState } from "react";
import Signup from "./Components/Signup";
import Appbar from "./Components/Appbar";
import Signin from "./Components/Signin";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      backgroundColor: "#eeeeee ",
    
    }}>
      <Appbar />
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import { useState } from "react";
import Signup from "./Components/Signup";
import Appbar from "./Components/Appbar";
import Signin from "./Components/Signin";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

// import BrowserRouter as Router means that we are importing 
// BrowserRouter as Router from the react-router-dom library.

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

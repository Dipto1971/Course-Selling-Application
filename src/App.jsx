import Signup from "./Components/Signup";
import Appbar from "./Components/Appbar";
import Signin from "./Components/Signin";
import AddCourse from "./Components/AddCourse";
import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";

// import BrowserRouter as Router means that we are importing
// BrowserRouter as Router from the react-router-dom library.

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#eeeeee ",
        }}
      >
        <Appbar />
        <Routes>
          <Route path="/addcourse" element={<AddCourse />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Signin />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

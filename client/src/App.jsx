import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from "./components/Signin.jsx";
import Signup from "./Components/Signup.jsx";
import AppBar from "./Components/Appbar.jsx";
import AddCourse from "./Components/AddCourse.jsx";
import Courses from "./Courses";
import Course from "./Components/Course";
import {Landing} from "./Components/Landing.jsx";
import { userState } from "./store/atoms/user.js";
import {
    RecoilRoot,
    useSetRecoilState
} from 'recoil';
import axios from "axios";
import {BASE_URL} from "./config.js";
import {useEffect} from "react";


function App() {
  return (
    <RecoilRoot>
      <div
        style={{
          width: "100vw",
          backgroundColor: "#eeeeee",
        }}
      >
        <Router>
          <AppBar />
          <InitUser />
          <Routes>
            
            <Route path={"/addcourse"} element={<AddCourse />} />
            <Route path={"/course/:courseId"} element={<Course />} />
            <Route path={"/courses"} element={<Courses />} />
            <Route path={"/signin"} element={<Signin />} />
            <Route path={"/signup"} element={<Signup />} />
            <Route path={"/"} element={<Landing />} />
          </Routes>
        </Router>
      </div>
    </RecoilRoot>
  );
}

function InitUser() {
  const setUser = useSetRecoilState(userState);
  const init = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/admin/me`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.data.username) {
        setUser({
          isLoading: false,
          userEmail: response.data.username,
        });
      }
    } catch (e) {
      setUser({
        isLoading: false,
        userEmail: null,
      });
    }
  };

  useEffect(() => {
    init();
  }, []);

  return <></>;
}

export default App;

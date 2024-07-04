import React from "react";
import { useEffect } from "react";
const Courses = () => {
  const [courses, setCourses] = React.useState([]);

  const callback1 = (response) => {
    response.json().then((data) => {
        console.log(data);
        setCourses(data.courses);
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/admin/courses", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(callback1);
  }, []);

  return <div>
    {courses.map((course) => {
      return <div key={course.name}>
        <h1>{course.title}</h1>
        <p>{course.description}</p>
      </div>;
    })}
  </div>;
};

export default Courses;

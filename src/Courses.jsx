import { Card, Typography } from "@mui/material";
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

  return (
    <div style={{display: "flex", justifyContent: "center"}}>
      {courses.map((course) => {
        return <Course course={course}/>;
      })}
    </div>
  );
};

function Course(props) {
  return (
    <Card
      style={{
        margin: "10",
        width: "300",
        minHeight: "200",
      }}
    >
      <Typography textAlign={"center"} variant={"h5"}>{props.course.title}</Typography>
      <Typography textAlign={"center"} variant={"body1"}>{props.course.description}</Typography>
      <img
      style={{
        width: "100%",
        height: "100%",
      }}
        src={props.course.imageLink}
        alt={props.course.title}
      />
    </Card>
  );
}

export default Courses;

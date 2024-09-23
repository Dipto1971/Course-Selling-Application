import { Button, Card, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import React from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  // Checking if the user is logged in
  if (!localStorage.getItem("token") || localStorage.getItem("token") == 'null') {
    return (
      <div>
        <h1>You are not logged in</h1>
      </div>
    );
  }
    useEffect(() => {
      const fetchdata = async () => {
        try {
          const res = await axios.get("http://localhost:3000/admin/courses", {
            headers: {
              Authorization: "Bearer " + localStorage.getItem("token"),
            },
          });
          const data = res.data;
          setCourses(data.courses);
        } catch (e) {
          console.log(e);
        }
      }
      fetchdata();
    }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {courses.map((course, index) => {
        return <Course course={course} key={index} />;
      })}
    </div>
  );
};

export function Course({ course }) {
  const navigate = useNavigate();

  return (
    <Card
      style={{
        margin: 10,
        width: 300,
        minHeight: 200,
        padding: 20,
      }}
    >
      <Typography textAlign={"center"} variant="h5">
        {course.title}
      </Typography>
      <Typography textAlign={"center"} variant="subtitle1">
        {course.description}
      </Typography>
      <img
        src={course.imageLink}
        style={{ width: 300 }}
        alt={course.title}
      ></img>
      <div style={{ display: "flex", justifyContent: "center", marginTop: 20 }}>
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            navigate("/course/" + course._id);
          }}
        >
          Edit
        </Button>
      </div>
    </Card>
  );
}

export default Courses;

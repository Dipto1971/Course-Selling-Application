import { Card, Typography, CardContent, CardMedia, Grid } from "@mui/material";
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
    <Grid container spacing={4} style={{ padding: "20px" }}>
      {courses.map((course) => (
        <Grid item key={course.id} xs={12} sm={6} md={4}>
          <Course course={course} />
        </Grid>
      ))}
    </Grid>
  );
};

function Course(props) {
  return (
    <Card
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        transition: "0.3s",
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={props.course.imageLink}
        alt={props.course.title}
        style={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" textAlign={"center"}>
          {props.course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={"center"}>
          {props.course.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Courses;
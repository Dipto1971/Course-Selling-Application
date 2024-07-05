import { Card } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Course = () => {
  let { courseId } = useParams();
  const [course, setCourse] = React.useState(null);

  useEffect(() => {
    function callback1(response) {
      response.json().then((data) => {
        console.log(data);
        setCourse(data.course);
      }).catch((error) => {
        console.error('Error parsing JSON:', error);
      });
    }
  
    fetch(`http://localhost:3000/admin/courses/${courseId}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(callback1).catch((error) => {
      console.error('Fetch error:', error);
    });
  }, []); // Correct placement of the dependency array

  console.log(course);

  if (!course) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <CourseTable course={course} />
    </div>
  );
};

function CourseTable(props) {
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
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          textAlign={"center"}
        >
          {props.course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" textAlign={"center"}>
          {props.course.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Course;

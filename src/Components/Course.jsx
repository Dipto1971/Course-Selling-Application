import { Card } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { CardContent, CardMedia, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";


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
  
    fetch(`http://localhost:3000/admin/course/${courseId}`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(callback1).catch((error) => {
      console.error('Fetch error:', error);
    });
  }, [courseId]); // Correct placement of the dependency array


  if (!course) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <CourseCard course={course} />
      <UpdateCard course={course}/>
    </div>
  );
};

function CourseCard(props) {
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



function UpdateCard(props) {
  const course = props.course;
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [image, setImage] = React.useState("");

  console.log(course);

  return<div>
  <div
    style={{
      width: "400px",
      margin: "auto",
      padding: "20px",
      marginTop: "100px",
      alignItems: "center",
    }}
  >
    <Typography variant={"h5"} align="center">
      Update Course Details!
    </Typography>
    <Card
      varient={"outlined"}
      style={{
        width: "400px",
        margin: "auto",
        padding: "20px",
      }}
    >
      <TextField
        onChange={(e) => setTitle(e.target.value)}
        id={"courseName"}
        label="Change Course Name"
        variant="outlined"
        fullWidth
      />
      <br /> <br />
      <TextField
        onChange={(e) => {
          setDescription(e.target.value);
        }}
        id={"courseDescription"}
        label="Change Course Description"
        variant="outlined"
        fullWidth
      />
      <br /> <br />
      <TextField
        onChange={(e) => {
          setImage(e.target.value);
        }}
        id={"courseDescription"}
        label="Change Image Link"
        variant="outlined"
        fullWidth
      />
      <br /> <br />
      <Button
        variant="contained"
        onClick={() => {

          
          function callback2(data) {
            console.log(data);
            alert("Course updated successfully");
          }

          function callback1(response) {
            response.json().then(callback2);
          }

          // Connection to backend
          fetch(`http://localhost:3000/admin/course/${course._id}`, {
            method: "PUT",
            headers: {
              "Authorization": "Bearer " + localStorage.getItem("token"),
              "Content-Type": "application/json", // Helps to understand the type of data - if not provided, the server might not understand the data
            },
            body: JSON.stringify({
              title: title,
              description: description,
              imageLink: image,
            }),
          }).then(callback1)
        }}
      >
        Change Course Details
      </Button>
    </Card>
  </div>
</div>
}

export default Course;

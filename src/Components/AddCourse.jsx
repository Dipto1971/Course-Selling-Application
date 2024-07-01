import { Button, Card, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

const AddCourse = () => {
  const [courseID, setCourseID] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [successfullMsg, setSuccessfullMsg] = useState("");

  return (
    <div>
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
          Welcome to Coursera!
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
            onChange={(e) => setCourseID(e.target.value)}
            id={"courseName"}
            label="Course Name"
            variant="outlined"
            fullWidth
          />
          <br /> <br />
          <TextField
            onChange={(e) => {
              setCourseDescription(e.target.value);
            }}
            id={"courseDescription"}
            label="Course Description"
            variant="outlined"
            fullWidth
          />
          <br /> <br />
          <Button
            variant="contained"
            onClick={() => {
              // Connection to backend
              fetch("http://localhost:3000/admin/courses", {
                method: "POST",
                headers: {
                  "Content-type": "application/json",
                },
                body: JSON.stringify({
                  courseId: courseId,
                  courseDescription: courseDescription,
                }),
              }).then((res) => {
                console.log(res);
                setSuccessfullMsg(res);
              });
            }}
          >
            Add Course
          </Button>
          <br /><br />
          <Typography variant={"h6"} align="center">
            {successfullMsg}
          </Typography>
        </Card>
      </div>
    </div>
  );
};

export default AddCourse;

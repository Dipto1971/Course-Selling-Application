import { Button, Card, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

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
            onChange={(e) => setTitle(e.target.value)}
            id={"courseName"}
            label="Course Name"
            variant="outlined"
            fullWidth
          />
          <br /> <br />
          <TextField
            onChange={(e) => {
              setDescription(e.target.value);
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
                  "Authorization": "Bearer " + localStorage.getItem("token"),
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  title: title,
                  description: description,
                }),
              }).then((res) => {
                console.log(res);
              });
            }}
          >
            Add Course
          </Button>
        </Card>
      </div>
    </div>
  );
};

export default AddCourse;

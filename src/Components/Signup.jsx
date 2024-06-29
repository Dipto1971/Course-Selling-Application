import { Button, Card, TextField, Typography } from "@mui/material";
import React from "react";

const Signup = () => {
  return (
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
          id= {"usename"}
          label="Username"
          variant="outlined"
          fullWidth
        />
        <br /> <br />
        <TextField
          id= {"password"}
          label="Password"
          variant="outlined"
          fullWidth
        />
        <br /> <br />
        <Button variant="contained" onClick={() => {
          let Username = document.getElementById("usename").value;
          let Password = document.getElementById("password").value;

          console.log(Username, Password);

          fetch ()
        }}>
          Sign up
        </Button>
      </Card>
    </div>
  );
};

export default Signup;

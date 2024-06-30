import { Button, Card, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

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
      <div>
        {username}
        <br />
        {password}
      </div>
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
          onChange={(e) => setUsername(e.target.value)}
          id={"usename"}
          label="Username"
          variant="outlined"
          fullWidth
        />
        <br /> <br />
        <TextField
          onChange={(e) => {
            setPassword(e.target.value)
            console.log(e);
          }}
          id={"password"}
          label="Password"
          variant="outlined"
          fullWidth
        />
        <br /> <br />
        <Button
          variant="contained"
          onClick={(e) => {
            console.log(username, password);
            
            // Connection to backend
            fetch();
          }}
        >
          Sign up
        </Button>
      </Card>
    </div>
  );
};

export default Signup;

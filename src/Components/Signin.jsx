import { Button, Card, TextField, Typography } from "@mui/material";
import React from "react";

const Signin = () => {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

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
          id="outlined-basic"
          label="Username"
          variant="outlined"
          fullWidth
          onChange={(e) => setUsername(e.target.value)}
        />
        <br /> <br />
        <TextField
          id="outlined-basic"
          label="Password"
          variant="outlined"
          fullWidth
          onChange={(e) => setPassword(e.target.value)}
        />
        <br /> <br />
        <Button
          variant="contained"
          onClick={() => {
            function callback1(response) {
              response.json().then((data) => {
                console.log(data);
                localStorage.setItem("token", data.token);
              });
            }

            fetch("http://localhost:3000/admin/login", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username: username,
                password: password,
              }),
            }).then(callback1);
            console.log("Sign in button clicked");
            console.log(username, password);
          }}
        >
          Sign in
        </Button>
      </Card>
    </div>
  );
};

export default Signin;

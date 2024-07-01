import { Button, Card, TextField, Typography } from "@mui/material";
import React from "react";
import { useState } from "react";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successfullMsg, setSuccessfullMsg] = useState("");

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
          onChange={(e) => setUsername(e.target.value)}
          id={"usename"}
          label="Username"
          variant="outlined"
          fullWidth
        />
        <br /> <br />
        <TextField
          onChange={(e) => {
            setPassword(e.target.value);
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
          onClick={() => {
            // Connection to backend
            function callbackToken(data) {
              localStorage.setItem("token", data.token);
            }

            fetch("http://localhost:3000/admin/signup", {
              method: "POST",
              headers: {
                "Content-type": "application/json",
              },
              body: JSON.stringify({ username: username, password: password }),
            })

            .then((res) => {
              res.status === 200
                ? setSuccessfullMsg("Admin created successfully")
                : setSuccessfullMsg(res.message);

                res.json().then(callbackToken)
            });
          }}
        >
          Sign up
        </Button>

        <Typography variant={"h6"} align="center">
          {successfullMsg}
        </Typography>
      </Card>
    </div>
  );
};

export default Signup;

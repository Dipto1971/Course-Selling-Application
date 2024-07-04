import { Button, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Appbar = () => {
  const navigateTo = useNavigate();
  const [userEmail, setUserEmail] = React.useState("");

  useEffect(() => {
    function callback2(data) {
      if (data.usename) {
        setUserEmail(data.username);
      }
      console.log(data);
    }

    function callback1(response) {
      response.json().then(callback2);
    }

    fetch("http://localhost:3000/admin/me", {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    }).then(callback1);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "#000000ff",
        color: "#ffffffff",
      }}
    >
      <div>
        <Typography> Coursera </Typography>
      </div>
      <div
        style={{
          marginRight: "100px",
        }}
      >
        <Button
          color="inherit"
          onClick={() => {
            navigateTo("/login");
          }}
        >
          Login
        </Button>
        <Button
          color="inherit"
          onClick={() => {
            navigateTo("/signup");
          }}
        >
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Appbar;

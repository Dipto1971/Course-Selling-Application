import { Button, Typography } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";

const Appbar = () => {

  const history = useHistory();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
        backgroundColor: "#000",
        color: "#fff",
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
            history.push("/login")
          }}
        >
          Login
        </Button>
        <Button
          color="inherit"
          onClick={() => {
            history.push("/signup")
          }}
        >
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Appbar;

import { Button, Typography } from "@mui/material";
import React from "react";

const Appbar = () => {
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
            window.location = "/login";
          }}
        >
          Login
        </Button>
        <Button
          color="inherit"
          onClick={() => {
            window.location = "/signup";
          }}
        >
          Signup
        </Button>
      </div>
    </div>
  );
};

export default Appbar;

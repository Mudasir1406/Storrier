import React, { useEffect, useState } from "react";
import { Box, Container, CssBaseline, AppBar, Typography } from "@mui/material";
import { AuthButton, AuthHeading, AuthInput } from "../components";
import { signUp } from "../services/Auth";
import { useNavigate } from "react-router-dom";
import { HOMEPAGR_URL } from "../navigation/PageLinks";
const SignUp = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });
  const handleChange = (name, value) => {
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleSubmit = () => {
    if (user.email === "") {
      alert("Email Is Required");
      return;
    } else {
      signUp(user.email, user.password, user?.name).then((user) => {
        navigate(HOMEPAGR_URL);
      });
    }
  };
  return (
    <>
      <CssBaseline />

      <main>
        <div>
          <Container maxWidth="xl">
            <Box
              sx={{
                boxShadow: "1px 2px 9px rgba(0,0,0,0.3)",
                alignItems: "center",
                justifyContent: "space-evenly",
                borderRadius: 4,
                flex: 1,
                display: "flex",
                margin: 6,
                flexDirection: "row",
                padding: 6,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <AuthHeading lable="Sign up" />
                <AuthInput
                  label="Your Name"
                  onChange={(e) => handleChange("name", e.target.value)}
                />
                <AuthInput
                  label="Your Email"
                  onChange={(e) => handleChange("email", e.target.value)}
                />
                <AuthInput
                  label="Password"
                  onChange={(e) => handleChange("password", e.target.value)}
                />
                <AuthButton lable="Register" onClick={handleSubmit} />
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <img
                  src={require("../assets/signup.jpg")}
                  alt=""
                  srcSet={require("../assets/signup.jpg")}
                  style={{
                    height: 600,
                  }}
                ></img>
                <a href="/SignIn">I am already member</a>
              </Box>
            </Box>
          </Container>
        </div>
      </main>
    </>
  );
};

export default SignUp;

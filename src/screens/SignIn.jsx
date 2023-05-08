import React, { useEffect, useState } from "react";
import { AppBar, Box, Container, CssBaseline } from "@mui/material";
import { AuthButton, AuthHeading, AuthInput } from "../components";
import { signUp, signIn } from "../services/Auth";
import { useNavigate } from "react-router-dom";
import { HOMEPAGR_URL } from "../navigation/PageLinks";
const SignIn = () => {
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
    } else if (user.password === "") {
      alert("Password Is Required");
      return;
    } else {
      signIn(user.email, user.password)
        .then(() => {
          navigate(HOMEPAGR_URL);
        })
        .catch((err) => alert(err));
    }
  };
  return (
    <>
      <div>
        <Container maxWidth="xl">
          <Box sx={styles.contanier}>
            <Box sx={styles.inner}>
              <img
                src={require("../assets/signin.jpg")}
                alt=""
                srcSet={require("../assets/signin.jpg")}
                style={{
                  height: 600,
                }}
              ></img>
              <a href="/SignUp">create an account</a>
            </Box>

            <Box sx={styles.inner}>
              <AuthHeading lable="Sign in" />
              <AuthInput
                label="Your Email"
                onChange={(e) => handleChange("email", e.target.value)}
              />
              <AuthInput
                label="Password"
                onChange={(e) => handleChange("password", e.target.value)}
              />
              <AuthButton lable="Log in" onClick={handleSubmit} />
            </Box>
          </Box>
        </Container>
      </div>
    </>
  );
};

export default SignIn;

const styles = {
  contanier: {
    boxShadow: "1px 2px 9px rgba(0,0,0,0.3)",
    alignItems: "center",
    justifyContent: "space-evenly",
    borderRadius: 4,
    flex: 1,
    display: "flex",
    margin: 6,
    flexDirection: "row",
    padding: 6,
  },
  inner: { display: "flex", flexDirection: "column" },
};

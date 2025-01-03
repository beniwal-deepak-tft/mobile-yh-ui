import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Loginform";

const LoginScreen = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn) {
          navigate("/");
        } else {
        localStorage.removeItem("isLoggedIn");
          navigate("/login");
        }
      }, [navigate]);   
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "83vh", // Full height of the viewport
        backgroundColor: "#f5f5f7", // Optional: You can set a background color
      }}
    >
      <LoginForm />
    </div>
  );
};

export default LoginScreen;

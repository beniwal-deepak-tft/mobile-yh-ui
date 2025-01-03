import React, { useState } from "react";
import { Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils/patientsApi";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
 const handleSubmit = async (e) => {
   e.preventDefault();
   if (email && password) {
     try {
       // Call the login API
       const response = await loginUser(email, password);

       // Handle success (e.g., save token and navigate)
       console.log("Login successful:", response);
       localStorage.setItem("isLoggedIn", true);
       console.log("Token:", response.token);
       localStorage.setItem("token", response.token);
       
       navigate("/");
     } catch (error) {
       // Handle API errors
       setErrorMessage(
         error.response?.data?.message || "Failed to login. Please try again."
       );
     }
   } else {
     setErrorMessage("Please fill in both fields");
   }
 };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <Card className="p-4 shadow-lg rounded-lg" style={{ width: "300px" }}>
        <h3 className="text-center mb-4">Login</h3>
        {errorMessage && (
          <div className="alert alert-danger">{errorMessage}</div>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formPassword" className="mt-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="mt-4 w-100">
            Login
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default LoginForm;

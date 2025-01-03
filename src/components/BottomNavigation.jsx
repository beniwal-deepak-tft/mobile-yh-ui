import React from "react";
import { Container, Nav } from "react-bootstrap";
import { FaHome, FaInfoCircle, FaBriefcase } from "react-icons/fa"; // Importing React Icons
import { Link } from "react-router-dom"; // Importing Link from react-router-dom

const BottomNavigation = ({ activeTab, onTabChange }) => {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        backgroundColor: "#f8f9fa",
        boxShadow: "0 -1px 5px rgba(0,0,0,0.1)",
        zIndex: 1000,
      }}
    >
      <Container>
        <Nav
          className="justify-content-around"
          style={{
            padding: "8px", // Reduced padding for more compact layout
          }}
        >
          <Nav.Item>
            <Link
              to="/consult"
              style={{
                padding: "5px 0", // Adjusted padding for each item
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // Center-align the icon and text
                backgroundColor:
                  activeTab === "consult" ? "#d1e7dd" : "transparent", // Change background color when active
                borderRadius: "8px", // Rounded corners for the active link
                transition: "background-color 0.3s ease", // Smooth transition effect
                color: "black", // Set text color to black
                textDecoration: "none", // Remove underline from Link
              }}
              onClick={() => onTabChange("consult")}
            >
              <FaHome style={{ fontSize: "24px", marginBottom: "4px" }} />
              Consultation
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Link
              to="/patients"
              style={{
                padding: "5px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center", // Center-align the icon and text
                backgroundColor:
                  activeTab === "patients" ? "#d1e7dd" : "transparent", // Change background color when active
                borderRadius: "8px", // Rounded corners for the active link
                transition: "background-color 0.3s ease", // Smooth transition effect
                color: "black", // Set text color to black
                textDecoration: "none", // Remove underline from Link
              }}
              onClick={() => onTabChange("patients")}
            >
              <FaInfoCircle style={{ fontSize: "24px", marginBottom: "4px" }} />
              Patients
            </Link>
          </Nav.Item>
        </Nav>
      </Container>
    </div>
  );
};

export default BottomNavigation;

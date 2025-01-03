import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CommentHeader = ({ logo, profilePic, userName }) => {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleProfileClick = () => {
    setShowLogout((prevState) => !prevState); // Toggle logout button visibility
  };

    const handleLogout = () => {
      localStorage.removeItem("isLoggedIn");
      navigate("/login");
      setShowLogout(false);
  };

  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        padding: "10px 15px",
        borderRadius: "8px",
        marginBottom: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Logo */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src={logo}
          alt="Logo"
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            marginRight: "10px",
          }}
        />
      </div>

      {/* Profile Section */}
      <div style={{ display: "flex", alignItems: "center" }}>
        <div
          style={{
            marginRight: "10px",
            textAlign: "right",
          }}
        >
          <div style={{ fontSize: "16px", fontWeight: "bold", color: "#333" }}>
            {userName}
          </div>
          <div style={{ fontSize: "12px", color: "#777" }}>Active Now</div>
        </div>
        <div
          onClick={handleProfileClick}
          title="Click to logout" // Tooltip on hover
          style={{
            cursor: "pointer", // Change cursor on hover
          }}
        >
          <img
            src={profilePic}
            alt="Profile"
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </div>
        {showLogout && (
          <div
            style={{
              position: "absolute",
              top: "70px", // Adjust this value for positioning the logout button
              right: "20px",
              backgroundColor: "#f8d7da", // Red background for the logout button
              color: "#721c24", // Text color for the logout button
              padding: "8px 15px",
              borderRadius: "5px",
              boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
              cursor: "pointer",
            }}
            onClick={handleLogout} // Logout on click
          >
            Logout
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentHeader;

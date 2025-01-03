import React from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const PatientItem = ({ profile }) => {

  const navigate = useNavigate();
  const patientDetail = (id) => {
    console.log("id", id);
    navigate(`/details/${id}`);
  };

  return (
    <div
      style={{
        backgroundColor: "#f9f9f9",
        padding: "10px",
        borderRadius: "8px",
        marginBottom: "10px",
        boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
      }}
      key={profile.id}
      onClick={() => patientDetail(profile.id)}
    >
      <Row className="align-items-center">
        <Col xs={2}>
          <img
            src={profile.profile_photo || "https://via.placeholder.com/150"}
            alt={profile.name || "No Name"}
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        </Col>
        <Col xs={8}>
          <div style={{ fontWeight: "bold", fontSize: "16px" }}>
            {profile.name || "No Name"}
          </div>
          <div style={{ fontSize: "12px", color: "#777" }}>
            {profile.age || "No Age"} years old
          </div>
          <div style={{ fontSize: "14px", color: "#333", marginTop: "5px" }}>
            {profile.phone_number || "No Phone Number"}
          </div>
          <div style={{ fontSize: "14px", color: "#007bff" }}>
            {profile.email || "No Email"}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default PatientItem;

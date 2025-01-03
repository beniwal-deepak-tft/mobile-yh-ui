import React from "react";
import ConsultationItem from "../components/ConsultationItem";

const ConsultationList = () => {
  const profiles = [
    {
      id: 1,
      name: "Rajesh Mehta",
      age: 53,
      phone: "+91 9999999991",
      email: "rajesh.mehta@gmail.com",
      image: "https://via.placeholder.com/50", // Replace with profile image URL
    },
    {
      id: 2,
      name: "Asha Sharma",
      age: 45,
      phone: "+91 8888888888",
      email: "asha.sharma@gmail.com",
      image: "https://via.placeholder.com/50", // Replace with profile image URL
    },
  ];

  return (
    <div style={{ padding: "10px" }}>
      {/* Heading */}
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        Consultation List
      </h1>

      {/* List of Consultation Items */}
      {profiles.map((profile) => (
        <ConsultationItem key={profile.id} profile={profile} />
      ))}
    </div>
  );
};

export default ConsultationList;

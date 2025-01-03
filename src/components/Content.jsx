import React from "react";
import ConsultationList from "../Pages/Consultation";
import PatientDetailsPage from "../Pages/PatientDetailsPage";
import PatientListPage from "../Pages/PatientsListPage";
const Content = ({ activeTab }) => {
  const renderContent = () => {
    switch (activeTab) {
      case "consult":
        return <ConsultationList />;
      case "patients":
        return <PatientListPage />;
      case "details":
        return <PatientDetailsPage />;
      case "profile":
        return <h1>Your Profile</h1>;
      default:
        return <ConsultationList />;
    }
  };

  return <div style={{ padding: "20px" }}>{renderContent()}</div>;
};

export default Content;

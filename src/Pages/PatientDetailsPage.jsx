import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Assuming you're using axios to make API requests
import PatientDetails from "../components/PatientDetails";
import { fetchPatientById } from "../utils/patientsApi";

const PatientDetailsPage = () => {
  const { id } = useParams(); // Get patientId from URL parameters
  const [patient, setPatient] = useState(null); // State to hold the patient data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle error

  // Fetch patient data using the ID from the params
  useEffect(() => {
    const fetchPatientData = async () => {
      try {
        const response = await fetchPatientById(id);
        console.log(response.data , 'response');// Assuming fetchPatientById is a function that fetches patient data
        setPatient(response.data); // Update the state with the fetched data
      } catch (err) {
        setError("Failed to fetch patient data");
      } finally {
        setLoading(false); // Set loading to false once the request is complete
      }
    };

    fetchPatientData();
  }, [id]); // Re-run the effect if patientId changes

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while fetching data
  }

  if (error) {
    return <div>{error}</div>; // Show an error message if there's an issue with the fetch
  }

  return (
    <div style={{ backgroundColor: "#f5f5f7" }}>
      {/* Heading */}
      <h1
        style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "20px" }}
      >
        Patient Details
      </h1>

      {/* Patient Details */}
      {patient ? (
        <PatientDetails patient={patient} />
      ) : (
        <div>No patient data available</div>
      )}
    </div>
  );
};

export default PatientDetailsPage;

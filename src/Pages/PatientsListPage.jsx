import React, { useState, useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import PatientItem from "../components/PatientsList";
import { fetchAllPatients } from "../utils/patientsApi";
import { Form, InputGroup } from "react-bootstrap"; // Import Bootstrap components

const PatientListPage = () => {
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // For storing search query
  const [filteredPatients, setFilteredPatients] = useState([]); // For storing filtered patients

  useEffect(() => {
    const loadPatients = async () => {
      try {
        const data = await fetchAllPatients();
        console.log(data, "data from fetchAllPatients");
        setPatients(data.data.patientList);
        setFilteredPatients(data.data.patientList); // Initialize with all patients
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadPatients();
  }, []);

  // Handle search input change
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // Filter patients based on search query
    const filtered = patients.filter((patient) =>
      patient.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setFilteredPatients(filtered);
  };

  return (
    <div>
      {loading ? (
        <div
          style={{ textAlign: "center", marginTop: "20px", color: "#007bff" }}
        >
          <AiOutlineLoading3Quarters
            size={40}
            style={{
              animation: "spin 1s linear infinite",
              color: "#007bff",
            }}
          />
          <p>Loading...</p>
        </div>
      ) : error ? (
        <p style={{ color: "red" }}>Error: {error}</p>
      ) : (
        <>
          <h1 className="mb-4">Patient List</h1>

          {/* Search Input with Bootstrap styling */}
          <InputGroup className="mb-4">
            <InputGroup.Text id="search-icon">
              <i className="bi bi-search" style={{ fontSize: "18px" }}></i>{" "}
              {/* Bootstrap icon */}
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search by patient name"
              value={searchQuery}
              onChange={handleSearch}
              aria-label="Search"
            />
          </InputGroup>

          {filteredPatients.length === 0 ? (
            <p>No patients found.</p>
          ) : (
            filteredPatients.map((profile) => (
              <PatientItem key={profile.id} profile={profile} />
            ))
          )}
        </>
      )}

      <style>
        {`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
};

export default PatientListPage;

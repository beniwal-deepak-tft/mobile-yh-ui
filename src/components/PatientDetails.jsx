import React, { useState } from "react";
import {
  Card,
  Row,
  Col,
  Form,
  ListGroup,
  Collapse,
  Modal,
  Button,
} from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";

const PatientDetails = ({ patient }) => {
//   const [isEnrolled, setIsEnrolled] = useState(patient.isEnrolledInProgram);
  const [showUpcomingAppointments, setShowUpcomingAppointments] =
    useState(false);
  const [showPatientPrescriptions, setShowPatientPrescriptions] = useState(false);
  const [showHistoricalAppointments, setShowHistoricalAppointments] =
    useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
//   const toggleEnrolledInProgram = () => {
//     setIsEnrolled(!isEnrolled);
//   };

     const handleHistoricalAppointmentClick = (appointment) => {
       setSelectedAppointment(appointment);
       setShowModal(true);
     };

     const closeModal = () => {
       setShowModal(false);
       setSelectedAppointment(null);
  };
  
  const handleBackClick = () => {
    window.history.back(); // Native back navigation
  };
  return (
    <div>
      <Button
        variant="secondary"
        onClick={handleBackClick}
        style={{ marginBottom: "20px", display: "flex", alignItems: "center" }}
      >
        <FaArrowLeft style={{ marginRight: "8px" }} /> {/* Back Icon */}
        Back
      </Button>
      {/* Profile Picture Card */}
      <Card
        className="bg-light shadow-lg rounded-lg mb-4"
        style={{ textAlign: "center" }}
      >
        <Card.Body style={{ display: "flex", alignItems: "center" }}>
          <img
            src={patient.general_info.profile_photo}
            alt="Profile"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              marginRight: "20px", // Space between the image and the name
            }}
          />
          <h4>
            {`${patient.general_info.first_name} ${patient.general_info.last_name}`}
          </h4>
        </Card.Body>
      </Card>

      {/* General Info Card */}
      <Card className="bg-white shadow-md rounded-lg mb-4">
        <Card.Header>
          <h5 style={{ fontSize: "18px" }}>General Information</h5>
        </Card.Header>
        <Card.Body>
          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>Age:</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.general_info.age}
            </Col>
          </Row>

          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>Email:</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.general_info.email}
            </Col>
          </Row>

          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>Gender:</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.general_info.gender}
            </Col>
          </Row>

          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>Location:</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.general_info.location || "N/A"}
            </Col>
          </Row>

          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>Date of Birth:</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.general_info.dob}
            </Col>
          </Row>

          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>ID:</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.general_info.userId}
            </Col>
          </Row>

          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>Mobile Number:</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.general_info.phone_number}
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Anthropometric Measurements Card */}
      <Card className="bg-white shadow-md rounded-lg mb-4">
        <Card.Header>
          <h5 style={{ fontSize: "18px" }}>Anthropometric Measurements</h5>
        </Card.Header>
        <Card.Body>
          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>Height:</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.general_info.height.value}
            </Col>
          </Row>

          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>Weight:</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.general_info.weight.value}
            </Col>
          </Row>

          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>BMI:</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.general_info.bmi}
            </Col>
          </Row>

          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>Waist Circumference:</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {
                patient.static_info.medical_metrics.anthropometric_measurements
                  .waist_circumference
              }
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Blood Sugar Profile Card */}
      <Card className="bg-white shadow-md rounded-lg mb-4">
        <Card.Header>
          <h5 style={{ fontSize: "18px" }}>Blood Sugar Profile</h5>
        </Card.Header>
        <Card.Body>
          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>Fasting:</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.static_info.medical_metrics.blood_sugar_profile.fasting}
            </Col>
          </Row>

          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>Post Prandial:</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {
                patient.static_info.medical_metrics.blood_sugar_profile
                  .post_prandial
              }
            </Col>
          </Row>

          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>HbA1c:</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.static_info.medical_metrics.blood_sugar_profile.hba1c}
            </Col>
          </Row>

          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>Last Checked:</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {
                patient.static_info.medical_metrics.blood_sugar_profile
                  .last_checked
              }
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Enrolled in Program Card */}
      <Card className="bg-white shadow-md rounded-lg mb-4">
        <Card.Header>
          <h5 style={{ fontSize: "18px" }}>Enrolled in Program</h5>
        </Card.Header>
        <Card.Body>
          <Form.Check
            type="switch"
            id="enrolledSwitch"
            checked={patient.general_info.is_mrp_enrolled}
          />
        </Card.Body>
      </Card>
      {/* Disease History Card */}
      <Card className="bg-white shadow-md rounded-lg mb-4">
        <Card.Header>
          <h5 style={{ fontSize: "18px" }}>Disease History</h5>
        </Card.Header>
        <Card.Body>
          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>Primary Conditions:</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.static_info.primary_conditions.map(
                (condition) => condition || "N/A"
              )}
            </Col>
          </Row>

          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>
                Risk Factors/Comorbidities:
              </strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.static_info.risk_factors.map(
                (riskFactor) => riskFactor
              ) || "N/A"}
            </Col>
          </Row>

          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>Management:</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}></Col>
          </Row>

          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>Current Medications:</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.static_info.current_medications.map((medication) => (
                <div key={medication.id}>
                  {medication.name} - {medication.dose} - {medication.frequency}
                </div>
              )) || "N/A"}
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Recent Face Scan Card */}
      <Card className="bg-white shadow-md rounded-lg mb-4">
        <Card.Header>
          <h5 style={{ fontSize: "18px" }}>Recent Face Scan</h5>
        </Card.Header>
        <Card.Body>
          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>Scan Date:</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.face_scan_info[0].createdAt}
            </Col>
          </Row>

          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>SpO2%:</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.face_scan_info[0].oxygen_saturation}
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>Pulse Rate(bpm):</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.face_scan_info[0].heart_rate}
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>
                Blood Pressure(mmHg) :
              </strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.face_scan_info[0].blood_pressure}
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>
                Respiratory Rate(breaths/min) :
              </strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.face_scan_info[0].respiration_rate}
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>HbA1C(%):</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.face_scan_info[0].hba1c}
            </Col>
          </Row>
          <Row style={{ marginBottom: "15px" }}>
            <Col xs={4}>
              <strong style={{ fontSize: "16px" }}>Hemoglobin(g/dL) :</strong>
            </Col>
            <Col xs={8} style={{ fontSize: "16px" }}>
              {patient.face_scan_info[0].hemoglobin}
            </Col>
          </Row>
        </Card.Body>
      </Card>

      {/* Upcoming Appointments Card */}
      <Card className="bg-white shadow-md rounded-lg mb-4">
        <Card.Header
          style={{ cursor: "pointer" }}
          onClick={() => setShowUpcomingAppointments(!showUpcomingAppointments)}
        >
          <h5 style={{ fontSize: "18px" }}>
            Upcoming Appointments {showUpcomingAppointments ? "▲" : "▼"}
          </h5>
        </Card.Header>
        <Collapse in={showUpcomingAppointments}>
          <Card.Body style={{ maxHeight: "200px", overflowY: "auto" }}>
            <ListGroup>
              {patient?.upcomingAppointments?.map((appointment, index) => (
                <ListGroup.Item key={index}>
                  {appointment?.date} - {appointment?.doctorName}
                </ListGroup.Item>
              )) || "No upcoming appointments."}
            </ListGroup>
          </Card.Body>
        </Collapse>
      </Card>

      {/* Historical Appointments Card */}
      <Card className="bg-white shadow-md rounded-lg mb-4">
        <Card.Header
          style={{ cursor: "pointer" }}
          onClick={() =>
            setShowHistoricalAppointments(!showHistoricalAppointments)
          }
        >
          <h5 style={{ fontSize: "18px" }}>
            Historical Appointments {showHistoricalAppointments ? "▲" : "▼"}
          </h5>
        </Card.Header>
        <Collapse in={showHistoricalAppointments}>
          <Card.Body style={{ maxHeight: "200px", overflowY: "auto" }}>
            <ListGroup>
              {patient?.historicalAppointments?.map((appointment, index) => (
                <ListGroup.Item
                  key={index}
                  onClick={() => handleHistoricalAppointmentClick(appointment)}
                >
                  {appointment?.date} - {appointment?.doctorName}
                </ListGroup.Item>
              )) || "No historical appointments."}
            </ListGroup>
          </Card.Body>
        </Collapse>
      </Card>

      {/* Modal for Appointment Details */}
      {selectedAppointment && (
        <Modal show={showModal} onHide={closeModal} centered>
          <Modal.Header closeButton>
            <Modal.Title>Appointment Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row style={{ marginBottom: "15px" }}>
              <Col xs={4}>
                <strong>Requested Date:</strong>
              </Col>
              <Col xs={8}>{selectedAppointment.requestedDate}</Col>
            </Row>

            <Row style={{ marginBottom: "15px" }}>
              <Col xs={4}>
                <strong>Consultation Date:</strong>
              </Col>
              <Col xs={8}>{selectedAppointment.consultationDate}</Col>
            </Row>

            <Row style={{ marginBottom: "15px" }}>
              <Col xs={4}>
                <strong>Notes:</strong>
              </Col>
              <Col xs={8}>{selectedAppointment.notes}</Col>
            </Row>

            <Row style={{ marginBottom: "15px" }}>
              <Col xs={4}>
                <strong>Voice Note:</strong>
              </Col>
              <Col xs={8}>{selectedAppointment.voiceNote}</Col>
            </Row>

            <Row style={{ marginBottom: "15px" }}>
              <Col xs={4}>
                <strong>Status:</strong>
              </Col>
              <Col xs={8}>{selectedAppointment.status}</Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}

      {/* Upcoming Appointments Card */}
      <Card className="bg-white shadow-md rounded-lg mb-4">
        <Card.Header
          style={{ cursor: "pointer" }}
          onClick={() => setShowPatientPrescriptions(!showPatientPrescriptions)}
        >
          <h5 style={{ fontSize: "18px" }}>
            Patient Prescriptions
            {showPatientPrescriptions ? "▲" : "▼"}
          </h5>
        </Card.Header>
        <Collapse in={showPatientPrescriptions}>
          <Card.Body style={{ maxHeight: "200px", overflowY: "auto" }}>
            <ListGroup>
              {patient?.upcomingAppointments?.map((appointment, index) => (
                <ListGroup.Item key={index}>
                  {appointment?.date} - {appointment?.doctorName}
                </ListGroup.Item>
              )) || "No patient prescriptions."}
            </ListGroup>
          </Card.Body>
        </Collapse>
      </Card>
    </div>
  );
};

export default PatientDetails;

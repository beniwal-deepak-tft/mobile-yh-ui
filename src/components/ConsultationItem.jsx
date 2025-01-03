import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Modal, Button, Form } from "react-bootstrap";
import {
  BsSticky,
  BsMic,
  BsStopFill,
  BsArrowRepeat,
  BsTrash,
} from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const ConsultationItem = ({ profile }) => {
    
  const [showModal, setShowModal] = useState(false);
  const [showConfirmModal, setShowConfirmModal] = useState(false); // Confirmation modal state
  const [note, setNote] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [audioURL, setAudioURL] = useState(null);
  const [checkboxChecked, setCheckboxChecked] = useState(false); // Track checkbox state
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const navigate = useNavigate();

  const handleShow = () => setShowModal(true);
  const handleClose = () => {
    setShowModal(false);
    setIsRecording(false);
    setAudioURL(null);
  };

  const handleSend = () => {
    console.log("Text Note:", note);
    if (audioURL) {
      console.log("Voice Note URL:", audioURL); // Replace with API call
    }
    setNote("");
    setAudioURL(null);
    setShowModal(false);
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorderRef.current.ondataavailable = (event) => {
        audioChunksRef.current.push(event.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        const audioURL = URL.createObjectURL(audioBlob);
        setAudioURL(audioURL);
      };

      mediaRecorderRef.current.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  };

  const handleDeleteRecording = () => {
    setAudioURL(null);
  };

  const handleRecordAgain = () => {
    setAudioURL(null);
    startRecording();
  };

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
    setShowConfirmModal(true); // Show confirmation modal when checkbox is clicked
  };

  const handleConfirm = () => {
    setShowConfirmModal(false);
    setShowModal(true); // Show the original modal when confirmed
  };

  const handleCancel = () => {
    setCheckboxChecked(false); // Uncheck the checkbox if the user cancels
    setShowConfirmModal(false); // Close confirmation modal
  };

  const patientDetail = (id) => { 
    console.log("id", id);
    navigate(`/details/${id}`);
  }

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
            src={profile.image}
            alt={profile.name}
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
            {profile.name}
          </div>
          <div style={{ fontSize: "12px", color: "#777" }}>
            {profile.age} years old
          </div>
          <div style={{ fontSize: "14px", color: "#333", marginTop: "5px" }}>
            {profile.phone}
          </div>
          <div style={{ fontSize: "14px", color: "#007bff" }}>
            {profile.email}
          </div>
        </Col>
        <Col xs={2} className="text-end">
          <div>
            <BsSticky
              style={{
                fontSize: "20px",
                marginBottom: "8px",
                cursor: "pointer",
              }}
              onClick={handleShow}
            />
          </div>
          <div>
            <input
              type="checkbox"
              checked={checkboxChecked}
              onChange={handleCheckboxChange}
            />
          </div>
        </Col>
      </Row>

      {/* Confirmation Modal */}
      <Modal show={showConfirmModal} onHide={handleCancel} centered>
        <Modal.Header closeButton>
          <Modal.Title>Are you sure?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to add a note?</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Main Modal for Adding Note */}
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Text Note</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter your text note here"
                value={note}
                onChange={(e) => setNote(e.target.value)}
              />
            </Form.Group>

            <Form.Group style={{ marginTop: "15px" }}>
              <Form.Label>Voice Note</Form.Label>
              <div className="d-flex align-items-center">
                {isRecording ? (
                  <BsStopFill
                    size={32}
                    color="red"
                    onClick={stopRecording}
                    style={{ cursor: "pointer" }}
                  />
                ) : (
                  <BsMic
                    size={32}
                    color="blue"
                    onClick={startRecording}
                    style={{ cursor: "pointer" }}
                  />
                )}
                {audioURL && (
                  <audio
                    controls
                    src={audioURL}
                    style={{ marginLeft: "15px", width: "100%" }}
                  >
                    Your browser does not support the audio element.
                  </audio>
                )}
                {audioURL && (
                  <div style={{ marginLeft: "15px" }}>
                    <BsTrash
                      size={20}
                      color="red"
                      onClick={handleDeleteRecording}
                      style={{ cursor: "pointer", marginRight: "10px" }}
                    />
                    <BsArrowRepeat
                      size={20}
                      color="green"
                      onClick={handleRecordAgain}
                      style={{ cursor: "pointer" }}
                    />
                  </div>
                )}
              </div>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSend}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ConsultationItem;

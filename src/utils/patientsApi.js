import api from "./Api";




export const loginUser = async (email, password) => {
    
  try {
    const response = await api.post(
      `/api/doctor/login`,
      { email, password },
    );
    return response.response;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};

// Fetch all patients
export const fetchAllPatients = async () => {
  const token = localStorage.getItem("token"); // Retrieve token from localStorage
  try {
    const response = await api.get("/api/doctor/patientsList");
    return response;
  } catch (error) {
    console.error("Error fetching patients:", error);
    throw error;
  }
};


// Fetch a single patient by ID
export const fetchPatientById = async (id) => {
  try {
    const response = await api.get(`/api/doctor/patientInfo?patientId=${id}`);
    return response;
  } catch (error) {
    console.error(`Error fetching patient with ID ${id}:`, error);
    throw error;
  }
};

// Add a note for a patient
export const addPatientNote = async (id, noteData) => {
  try {
    const response = await api.post(`/patients/${id}/notes`, noteData);
    return response;
  } catch (error) {
    console.error(`Error adding note for patient with ID ${id}:`, error);
    throw error;
  }
};

// Delete a note for a patient
export const deletePatientNote = async (patientId, noteId) => {
  try {
    const response = await api.delete(`/patients/${patientId}/notes/${noteId}`);
    return response;
  } catch (error) {
    console.error(
      `Error deleting note ${noteId} for patient ${patientId}:`,
      error
    );
    throw error;
  }
};

// Add a voice note
export const addVoiceNote = async (id, voiceNoteBlob) => {
  try {
    const formData = new FormData();
    formData.append("voiceNote", voiceNoteBlob);

    const response = await api.post(`/patients/${id}/voice-notes`, formData, {
      headers: { "Content-Type": "multipart/form-data" },
    });
    return response;
  } catch (error) {
    console.error(`Error adding voice note for patient with ID ${id}:`, error);
    throw error;
  }
};

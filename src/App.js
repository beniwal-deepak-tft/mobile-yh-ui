import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
} from "react-router-dom";
import BottomNavigation from "./components/BottomNavigation";
import Content from "./components/Content";
import CommentHeader from "./components/Header";
import LoginScreen from "./Pages/LoginScreen";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  return isLoggedIn ? children : null;
};

const App = () => {
  const [activeTab, setActiveTab] = useState("home");
  const logo = "./yolomed-logo@2x.png";
  const profilePic = "https://via.placeholder.com/40";
  const userName = "John Doe";
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const location = useLocation(); // Get the current location

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    setIsLoggedIn(!!isLoggedIn);
  }, [isLoggedIn]);

  return (
    <div style={{ backgroundColor: "#f5f5f7" }}>
      <div>
        <CommentHeader
          logo={logo}
          profilePic={profilePic}
          userName={userName}
        />
      </div>

      <div style={{ paddingBottom: "60px", paddingTop: "20px" }}>
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
          <Route
            path="/consult"
            element={
              <ProtectedRoute>
                <Content activeTab="consult" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Content activeTab="consult" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/patients"
            element={
              <ProtectedRoute>
                <Content activeTab="patients" />
              </ProtectedRoute>
            }
          />
          <Route
            path="/details/:id"
            element={
              <ProtectedRoute>
                <Content activeTab="details" />
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>

      {/* Bottom Navigation */}
      {location.pathname !== "/login" && (
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      )}
    </div>
  );
};

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;

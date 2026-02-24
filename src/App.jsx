import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./Pages/Auth/Auth.jsx";
import Dashboard from "./Pages/Dashboard/Dashboard.jsx";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;

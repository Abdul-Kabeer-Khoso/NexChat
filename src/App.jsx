import { Routes, Route, Navigate } from "react-router-dom";
import AuthLayout from "./pages/Auth/AuthLayout";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<AuthLayout />} />
    </Routes>
  );
}

export default App;

import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./components/Auth.jsx";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
}

export default App;

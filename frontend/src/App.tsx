import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Middleware from "./components/Middleware";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route element={<Middleware />}>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Middleware from "./components/Middleware";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Gameplay from "./pages/Gameplay";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route element={<Middleware />}>
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/gameplay" element={<Gameplay />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;

import "./App.css";
import { Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import StartPage from "./Components/StartPage";
import Questionnaires from "./Components/Questionnaires";
import End from "./Components/EndPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/startPage" element={<StartPage />} />
      <Route path="Questionnaires" element={<Questionnaires />} />
      <Route path="End" element={<End />} />
    </Routes>
  );
}

export default App;

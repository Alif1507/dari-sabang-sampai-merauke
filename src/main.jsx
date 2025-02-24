import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router";
// import Map from "./Map.jsx";
import Home from "./Home.jsx";
import Jakarta from "./daerah/Jakarta.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jakarta" element={<Jakarta />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

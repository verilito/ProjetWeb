import React from 'react';
import InitialComponent from "./components/InitialComponent";
import MonProfil from "./components/MonProfil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<InitialComponent />} />
      <Route path="/monprofil" element={<MonProfil />} />
    </Routes>
  </BrowserRouter>
);

export default App;
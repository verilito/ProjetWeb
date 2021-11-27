import React from 'react';
import InitialComponent from "./components/InitialComponent";
import MonProfil from "./components/MonProfil";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//<InitialComponent />
const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<InitialComponent />} />
    </Routes>
  </BrowserRouter>
);


export default App;
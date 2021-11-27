import React from 'react';
import InitialComponent from "./components/InitialComponent";
//import Monprofil from "./components/Monprofil";
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
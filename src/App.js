import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import Home from "./components/Home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/form" element={<Form />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

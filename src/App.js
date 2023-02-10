import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Weather from "./components/Weather";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      {/* <Header /> */}
      {<BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/weather" element={<Weather />} />
          <Route exact path="/" element={<Home />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>}
    </div>
  )
}

export default App
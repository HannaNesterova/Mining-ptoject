import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainPage from "./MainPage";
import Programs from "./Programs/Programs";
import SecondSection from "./SecondSection/SecondSection";
import ShowSectionPic from "./SecondSection/ShowSectionPic";
import UnitBox from "./Unit_box/UnitBox";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/unit" element={<UnitBox />} />
        <Route path="/statistic" element={<SecondSection />} />
        <Route path="/team" element={<ShowSectionPic />} />
        <Route path="/partners" element={<Programs />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

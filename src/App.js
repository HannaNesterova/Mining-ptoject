// import "./App.css";
// import Header from "./Header/Header";

// import Footer from "./Footer/Footer";
// import TopScroll from "./TopScroll/TopScroll";
// import Logo from "./Header/Logo";
// import { HashRouter as Router, Routes, Route } from "react-router-dom";
// import MainPage from "./MainPage";

// function App() {
//   return (
//     <div>
//       <Router>
//         <Header />
//         <Routes>
//           <Route path="/*" element={<MainPage />} />
//         </Routes>
//         <Footer />
//       </Router>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import MainPage from "./MainPage";
import Programs from "./Programs/Programs";
import SecondSection from "./SecondSection/SecondSection";
import Show_section_pic from "./SecondSection/ShowSection_pic";
import Unit_box from "./Unit_box/Unit_box";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/unit" element={<Unit_box />} />
        <Route path="/statistic" element={<SecondSection />} />
        <Route path="/team" element={<Show_section_pic />} />
        <Route path="/partners" element={<Programs />} />
        {/* Ви можете додати інші маршрути за потреби */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;

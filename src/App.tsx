import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import FAQ from "./pages/FAQ/FAQ";
import GetInfo from "./pages/GetInfo/GetInfo";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/getinfo" element={<GetInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import background from "./assets/background.svg";
import Navbar from "./components/homepage/Navbar";
import Home from "./components/homepage/Home";
import Pricing from "./components/Pricing";
import Learnmore from "./components/Learnmore";
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div
      className="bg-cover bg-center overflow-x-hidden sm:bg-top"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/about" element={<Learnmore />} />
      </Routes>
      <h1 className="text-center text-white mt-20 ">2024 @ ALLRIGHTS RESERVED BY EMMAN POGI</h1>
    </div>
  );
};

export default App;

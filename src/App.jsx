import "./css/App.css";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter, Routes, Route } from "react-router";
import MakingOf from "./pages/MakingOf";
import Home from "./pages/Home";
import All from "./pages/All";

function App() {
  return (
    <>
      <BrowserRouter /*basename="/frontEnd-sprookje-JoachimGautama"*/>
        <Header />
        <div className="ctx">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all" element={<All />} />
            <Route path="/MakingOf" element={<MakingOf />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

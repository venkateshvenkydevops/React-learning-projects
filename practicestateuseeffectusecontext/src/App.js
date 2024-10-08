import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import ContextPage from "./Context/Context" // Assuming it's a context provider

function App() {
  return (
    <>
      <Router>
        {/* Wrapping the entire app in ContextProvider */}
        <ContextPage>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
          <Footer />
        </ContextPage>
      </Router>
    </>
  );
}

export default App;

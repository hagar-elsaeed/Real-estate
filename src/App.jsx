import React from "react";
import Header from "./Components/Header";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Testmonails from "./Components/Testmonails";
import Contact from "./Components/Contact";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testmonails />
      <Contact />
      <Footer/>
    </div>
  );
}

export default App;

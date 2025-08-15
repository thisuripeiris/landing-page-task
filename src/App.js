import "./App.css";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Faq />
      <Footer />
    </>
  );
}

export default App;

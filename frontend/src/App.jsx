import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Members from "./components/Members";
import Video from "./components/Video";
import Footer from "./components/Footer";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loader-screen">
        <div className="quest-loader">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <p>Preparing your barangay quest board...</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Members />
      <Video />
      <Footer />
    </>
  );
}

import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Navbar } from "./components/Navbar";
import { ScrollToTop } from "./components/ScrollToTop";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Gallery />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;

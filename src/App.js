import { Routes, Route, Navigate } from "react-router-dom";
import Banner from "./component/Banner";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import ScrollToTop from "./helpers/ScrollToTop";

function App() {
  return (
    <>
      <Banner />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/projects/:slug" element={<Portfolio />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;

import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SvgLoader from "./components/SvgLoader";

import Home from "./pages/Home";
import BookAppointment from "./pages/BookAppointment";
import About from "./pages/About";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

import TherapyOffers from "./pages/TherapyOffers";
import NeuroConditions from "./pages/NeuroConditions";
import NeuroConditionDetail from "./pages/NeuroConditionDetail";
import NeuroSymptoms from "./pages/NeuroSymptoms";
import NeuroSymptomDetail from "./pages/NeuroSymptomDetail";

export const LoaderContext = React.createContext();

function App() {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {loading && <SvgLoader />}

      <div className="bg-white text-black">
        <Topbar />
        <Navbar />
        <ScrollToTop />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />

          {/* NEW ROUTES */}
          <Route path="/therapy-offers" element={<TherapyOffers />} />
          <Route path="/conditions-we-treat" element={<NeuroConditions />} />
          <Route path="/conditions-we-treat/:slug" element={<NeuroConditionDetail />} />
          <Route path="/symptoms-we-treat" element={<NeuroSymptoms />} />
          <Route path="/symptoms-we-treat/:slug" element={<NeuroSymptomDetail />} />
        </Routes>

        <Footer />
      </div>
    </LoaderContext.Provider>
  );
}

export default App;

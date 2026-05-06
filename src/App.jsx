import Navbar from "./components/Navbar";
import Intro from "./components/Intro";

import Hero from "./pages/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonial";
import Leadership from "./pages/Leadership";
import Branches from "./pages/Branches";
import Gallery from "./pages/Gallery";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";

// Branches Pages
import Thiruvalla from "./pages/Thiruvalla";
import Kottayam from "./pages/Kottayam";
import Trivandrum from "./pages/Trivandrum";
import Kollam from "./pages/Kollam";
import Ernakulam from "./pages/Ernakulam";
import Alappuzha from "./pages/Alappuzha";
import Pala from "./pages/Pala";
import Thrissur from "./pages/Thrissur";

// Service Pages
import OurServices from "./pages/OurServices";

// Gallery Page
import OurGallery from "./pages/OurGallery";

// Team Page
import Team from "./pages/Team";

// Blog Main Page
import BlogPage from "./pages/Blog";

// ✅ BLOG DETAILS PAGES
import Blog1 from "./pages/Blog1";
import Blog2 from "./pages/Blog2";
import Blog3 from "./pages/Blog3";
import Blog4 from "./pages/Blog4";
import Blog5 from "./pages/Blog5";
import Blog6 from "./pages/Blog6";
import Blog7 from "./pages/Blog7";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Routes, Route, useLocation } from "react-router-dom";

export default function App() {

  const [showIntro, setShowIntro] = useState(true);

  const location = useLocation();

  // ✅ UPDATED FIX: force homepage on refresh + remove hash
  useEffect(() => {

    if (window.location.pathname !== "/") {
      window.history.replaceState(null, "", "/");
    }

    if (window.location.hash) {
      window.history.replaceState(null, "", "/");
    }

  }, []);

  // ✅ scroll after navigation
  useEffect(() => {

    if (location.state?.scrollTo) {

      const section = document.getElementById(location.state.scrollTo);

      if (section) {

        setTimeout(() => {
          section.scrollIntoView({
            behavior: "smooth",
          });
        }, 100);

      }
    }

  }, [location]);

  const handleIntroFinish = () => {

    setTimeout(() => {
      setShowIntro(false);
    }, 450);

  };

  return (
    <div className="bg-[#0B0B0B] text-white overflow-x-hidden">

      <AnimatePresence mode="wait">

        {showIntro ? (

          <motion.div
            key="intro"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[999]"
          >

            <Intro onFinish={handleIntroFinish} />

          </motion.div>

        ) : (

          <motion.div
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >

            {/* NAVBAR */}
            <Navbar />

            {/* ROUTES */}
            <Routes>

              {/* HOME PAGE */}
              <Route
                path="/"
                element={
                  <>
                    <Hero />
                    <About />
                    <Services />
                    <Gallery />
                    <Testimonials />
                    <Leadership />
                    <Contact />
                  </>
                }
              />

              {/* BRANCHES */}
              <Route path="/branches" element={<Branches />} />

              {/* Branch Pages */}
              <Route path="/branch/thiruvalla" element={<Thiruvalla />} />
              <Route path="/branch/kottayam" element={<Kottayam />} />
              <Route path="/branch/trivandrum" element={<Trivandrum />} />
              <Route path="/branch/kollam" element={<Kollam />} />
              <Route path="/branch/ernakulam" element={<Ernakulam />} />
              <Route path="/branch/alappuzha" element={<Alappuzha />} />
              <Route path="/branch/pala" element={<Pala />} />
              <Route path="/branch/thrissur" element={<Thrissur />} />

              {/* SERVICE PAGE */}
              <Route path="/our-services" element={<OurServices />} />

              {/* GALLERY PAGE */}
              <Route path="/our-gallery" element={<OurGallery />} />

              {/* TEAM PAGE */}
              <Route path="/team" element={<Team />} />

              {/* PORTFOLIO PAGE */}
              <Route path="/portfolio" element={<Portfolio />} />

              {/* BLOG PAGE */}
              <Route path="/blog" element={<BlogPage />} />

              {/* ✅ BLOG DETAIL PAGES */}
              <Route path="/blog/1" element={<Blog1 />} />
              <Route path="/blog/2" element={<Blog2 />} />
              <Route path="/blog/3" element={<Blog3 />} />
              <Route path="/blog/4" element={<Blog4 />} />
              <Route path="/blog/5" element={<Blog5 />} />
              <Route path="/blog/6" element={<Blog6 />} />
              <Route path="/blog/7" element={<Blog7 />} />

            </Routes>

            {/* FOOTER */}
            <Footer />

          </motion.div>

        )}

      </AnimatePresence>

    </div>
  );
}
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "Home", id: "hero" },
    { name: "About", id: "about" },
    { name: "Services", id: "services" },
    { name: "Gallery", id: "gallery" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Our Team", id: "ourteam" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Contact", id: "contact" },
    { name: "Blog", id: "blog" },
  ];

  const handleNavClick = (id) => {

    // ✅ Portfolio Separate Page
    if (id === "portfolio") {
      navigate("/portfolio");
      setOpen(false);
      return;
    }

    // ✅ Blog Separate Page
    if (id === "blog") {
      navigate("/blog");
      setOpen(false);
      return;
    }

    if (location.pathname === "/") {

      // Scroll on homepage
      const section = document.getElementById(id);

      if (section) {
        section.scrollIntoView({
          behavior: "smooth",
        });
      }

    } else {

      // Navigate home then scroll
      navigate("/", {
        state: { scrollTo: id },
      });

      setTimeout(() => {
        const section = document.getElementById(id);

        if (section) {
          section.scrollIntoView({
            behavior: "smooth",
          });
        }
      }, 300);
    }

    setOpen(false);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50">

        <div className="backdrop-blur-xl bg-black/40 border-b border-white/10">

          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">

            {/* LOGO */}
            <div className="relative flex items-center">

              <div className="absolute -inset-4 bg-[#D4A373]/30 blur-xl rounded-full" />

              <img
                src="/images/ruchi-logo.png"
                alt="Ruchi Caterers"
                className="relative h-10 sm:h-12 md:h-14 w-auto object-contain"
              />
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8 text-white/70 text-sm font-medium">

              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.id)}
                  className="hover:text-[#D4A373] transition duration-300"
                >
                  {link.name}
                </button>
              ))}

            </div>

            {/* CTA BUTTON */}
            <button
              onClick={() => handleNavClick("contact")}
              className="hidden md:block px-5 py-2 rounded-full bg-[#D4A373] text-black text-sm font-semibold hover:scale-105 transition duration-300"
            >
              Book Now
            </button>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setOpen(true)}
              className="md:hidden text-white text-2xl"
            >
              ☰
            </button>

          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {open && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{
              duration: 0.4,
              ease: "easeInOut",
            }}
            className="fixed inset-0 z-50 bg-black/95 flex flex-col"
          >

            {/* TOP BAR */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/10">

              <img
                src="/images/ruchi-logo.png"
                className="h-10"
                alt="logo"
              />

              <button
                onClick={() => setOpen(false)}
                className="text-white text-3xl"
              >
                ✕
              </button>

            </div>

            {/* MOBILE LINKS */}
            <div className="flex flex-col items-center justify-center flex-1 gap-6 text-white text-lg">

              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={() => handleNavClick(link.id)}
                  className="hover:text-[#D4A373] transition duration-300"
                >
                  {link.name}
                </button>
              ))}

              {/* MOBILE CTA */}
              <button
                onClick={() => handleNavClick("contact")}
                className="mt-6 px-6 py-3 rounded-full bg-[#D4A373] text-black font-semibold"
              >
                Book Now
              </button>

            </div>

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}

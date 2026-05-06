import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Counter({ end, duration = 2000, suffix = "" }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        clearInterval(timer);
        setCount(end);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
}

export default function Hero() {
  const navigate = useNavigate();

  const handleScrollToServices = () => {
    const section = document.getElementById("services");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    } else {
      // If services is on homepage but user is on another route
      navigate("/");
      setTimeout(() => {
        const retrySection = document.getElementById("services");
        if (retrySection) {
          retrySection.scrollIntoView({ behavior: "smooth" });
        }
      }, 300);
    }
  };

  return (
    <section
      className="relative min-h-screen flex items-center px-4 sm:px-6 pt-28 lg:pt-24 overflow-hidden"
      id="hero"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="/images/mainbg.avif"
          className="w-full h-full object-cover"
          alt="background"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* LEFT */}
        <div className="py-10 lg:py-0">
          <p className="uppercase tracking-[6px] text-[#D4A373] text-sm mb-5">
            Authentic Kerala Catering
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white">
            Taste The <span className="text-[#D4A373]">Tradition</span> Of
            Kerala
          </h1>

          <p className="mt-6 sm:mt-8 text-white/70 text-base sm:text-lg leading-7 sm:leading-8 max-w-xl">
            Premium catering experience with authentic Kerala flavors,
            traditional Sadya, elegant presentation, and unforgettable
            hospitality.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 sm:mt-10">
            <button
              onClick={handleScrollToServices}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-[#D4A373] text-black font-medium hover:scale-105 transition"
            >
              Explore Services
            </button>

            <button
              onClick={() => {
                const section = document.getElementById("gallery");

                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-full border border-white/20 bg-white/5 text-white"
            >
              View Gallery
            </button>
            
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-10 sm:mt-14 text-white">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#D4A373]">
                <Counter end={1200} suffix="+" />
              </h2>
              <p className="text-white/60 text-sm">Events Catered</p>
            </div>

            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#D4A373]">
                4.9★
              </h2>
              <p className="text-white/60 text-sm">Google Rating</p>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#D4A373]">
                Since 1955
              </h2>
              <p className="text-white/60 text-sm">Trusted Service</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex justify-center relative">
          <div className="absolute w-[450px] h-[450px] bg-[#D4A373]/20 blur-3xl rounded-full" />

          <img
            src="/images/heroside.jpg"
            className="relative z-10 w-[420px] h-[550px] object-cover rounded-[35px] border border-white/10 shadow-2xl"
            alt="food"
          />
        </div>
      </div>
    </section>
  );
}

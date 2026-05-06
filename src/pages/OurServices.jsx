import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function OurServices() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const topServices = [
    {
      title: "WEDDING",
      description:
        "On one of the most important days of your life, we provide a full catering program.",
      image: "/images/wedding.jpg",
    },
    {
      title: "CORPORATE",
      description:
        "Corporate dining solutions for meetings, offices, and professional gatherings.",
      image: "/images/corporate.jpg",
    },
    {
      title: "CONVOCATION",
      description:
        "Elegant catering for academic milestones and large celebrations.",
      image: "/images/convocation.jpg",
    },
  ];

  const extraServices = [
    {
      title: "KITTY PARTIES",
      description:
        "A private dining room, or a penthouse catering is one of our many great services.",
      image: "/images/kitty.jpg",
    },
    {
      title: "FESTIVALS",
      description:
        "We are completely capable of serving for big, open, small, adults or kids festivals.",
      image: "/images/festivals.jpg",
    },
    {
      title: "ASSOCIATION",
      description:
        "Social events are highly important to our clients, and we guarantee perfect service.",
      image: "/images/association.jpg",
    },
  ];

  return (
    <section className="bg-[#0e0e0e] text-white px-6 py-24 mt-10 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ===== HERO SECTION ===== */}
        <div className="mb-28 grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>

            <p className="uppercase tracking-[6px] text-[#D4A373] text-sm mb-5">
              Our Services
            </p>

            <h1 className="text-4xl md:text-6xl font-semibold leading-tight mb-8">
              Crafted Culinary Excellence Across Kerala
            </h1>

            <p className="text-white/60 leading-8 text-base md:text-lg mb-8 max-w-xl">
              Ruchi Caterers blends authentic Kerala cuisine with modern
              presentation to create unforgettable dining experiences for
              weddings, corporate events, and premium celebrations.
            </p>

            {/* BRAND LINE */}
            <div className="flex items-center gap-4 text-[#D4A373] text-sm tracking-[4px]">
              <span className="w-12 h-[1px] bg-[#D4A373]" />
              EST. 1955
              <span className="w-12 h-[1px] bg-[#D4A373]" />
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative rounded-[40px] overflow-hidden h-[500px] group">

            <img
              src="/images/service.jpg"
              alt="Ruchi Catering"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            {/* FLOATING GLASS CARD */}
            <div className="absolute bottom-6 left-6 right-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-[28px] p-6">

              <p className="uppercase tracking-[4px] text-[#D4A373] text-xs mb-2">
                Premium Catering
              </p>

              <h3 className="text-2xl font-semibold mb-3">
                Luxury Kerala Dining Experience
              </h3>

              <p className="text-white/60 leading-7 text-sm">
                Every event is crafted with elegance, authenticity, and rich
                culinary tradition.
              </p>

            </div>

          </div>

        </div>

        {/* ===== SIGNATURE SERVICES ===== */}
        <div className="mb-28">

          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#D4A373]">
              Signature Services
            </h2>

            <span className="hidden md:block text-white/30 tracking-[4px] text-sm">
              EXPERIENCE
            </span>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {topServices.map((item, i) => (
              <div
                key={i}
                className="group relative bg-[#151515] rounded-[35px] overflow-hidden border border-white/10 hover:border-[#D4A373]/40 transition-all duration-500"
              >

                {/* IMAGE */}
                <div className="relative h-[280px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

                {/* CONTENT */}
                <div className="p-7">

                  {/* NUMBER */}
                  <p className="text-[#D4A373] text-sm tracking-[4px] mb-4">
                    0{i + 1}
                  </p>

                  <h3 className="text-2xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-white/60 leading-7 text-sm">
                    {item.description}
                  </p>

                  {/* FOOTER */}
                  <div className="mt-7 flex items-center justify-between">

                    <div className="flex items-center gap-3">
                      <span className="w-12 h-[1px] bg-[#D4A373]" />
                      <span className="text-white/30 text-xs tracking-[3px]">
                        RUCHI CATERERS
                      </span>
                    </div>

                    <Link
                      to="/"
                      onClick={() => {
                        setTimeout(() => {
                          const section = document.getElementById("contact");
                          section?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }, 100);
                      }}
                      className="text-[#D4A373] text-sm tracking-[2px] hover:text-white transition"
                    >
                      Book Now →
                    </Link>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* ===== MORE SERVICES ===== */}
        <div>

          <div className="flex items-center justify-between mb-12">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#D4A373]">
              More Experiences
            </h2>

            <span className="hidden md:block text-white/30 tracking-[4px] text-sm">
              EVENTS
            </span>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {extraServices.map((item, i) => (
              <div
                key={i}
                className="group relative bg-[#151515] rounded-[35px] overflow-hidden border border-white/10 hover:border-[#D4A373]/40 transition-all duration-500"
              >

                {/* IMAGE */}
                <div className="relative h-[280px] overflow-hidden">

                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

                </div>

                {/* CONTENT */}
                <div className="p-7">

                  {/* NUMBER */}
                  <p className="text-[#D4A373] text-sm tracking-[4px] mb-4">
                    0{i + 4}
                  </p>

                  <h3 className="text-2xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-white/60 leading-7 text-sm">
                    {item.description}
                  </p>

                  {/* FOOTER */}
                  <div className="mt-7 flex items-center justify-between">

                    <div className="flex items-center gap-3">
                      <span className="w-10 h-[1px] bg-[#D4A373]" />
                      <span className="text-white/30 text-xs tracking-[3px]">
                        RUCHI CATERERS
                      </span>
                    </div>

                    <Link
                      to="/"
                      onClick={() => {
                        setTimeout(() => {
                          const section = document.getElementById("contact");
                          section?.scrollIntoView({
                            behavior: "smooth",
                          });
                        }, 100);
                      }}
                      className="text-[#D4A373] text-sm tracking-[2px] hover:text-white transition"
                    >
                      Book Now →
                    </Link>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
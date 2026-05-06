import { Link } from "react-router-dom";

const services = [
  {
    title: "WEDDING",
    description:
      "On one of the most important days of your life, we provide a full catering program.",
    image: "/images/wedding.jpg",
  },

  {
    title: "CORPORATE",
    description:
      "You can order a corporate full time or part-time service for personnel/staff lunches",
    image: "/images/corporate.jpg",
  },

  {
    title: "CONVOCATION",
    description:
      "We offer catering services to Professional students who need catering for special occasions",
    image: "/images/convocation.jpg",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-28 px-6 max-w-7xl mx-auto" id="services">

      {/* HEADING */}
      <div className="text-center mb-20">

        <p className="uppercase tracking-[5px] text-[#D4A373] text-sm mb-4">
          Our Expertise
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          Premium Catering Services
        </h2>

      </div>

      {/* CARDS */}
      <div className="grid lg:grid-cols-3 gap-8">

        {services.map((service, index) => (
          <div
            key={index}
            className="group relative bg-[#151515] rounded-[35px] overflow-hidden border border-white/10 hover:border-[#D4A373]/40 transition-all duration-500"
          >

            {/* IMAGE */}
            <div className="relative h-[280px] overflow-hidden">

              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

            </div>

            {/* CONTENT */}
            <div className="p-7">

              {/* NUMBER */}
              <p className="text-[#D4A373] text-sm tracking-[4px] mb-4">
                0{index + 1}
              </p>

              <h3 className="text-2xl font-semibold mb-4">
                {service.title}
              </h3>

              <p className="text-white/60 leading-7 text-sm">
                {service.description}
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

      {/* BUTTON */}
      <div className="flex justify-center mt-16">

        <Link
          to="/our-services"
          className="px-10 py-4 border border-[#D4A373] text-[#D4A373] uppercase tracking-[4px] text-sm rounded-full hover:bg-[#D4A373] hover:text-black transition-all duration-300"
        >
          All Services
        </Link>

      </div>

    </section>
  );
}
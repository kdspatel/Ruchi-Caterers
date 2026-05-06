import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const leaders = [
  {
    name: "Usman T.A",
    role: "Managing Director",
    image: "/images/Usman.png",
  },
  {
    name: "Haroon Usman",
    role: "Executive Director",
    image: "/images/haroon.png",
  },
];

export default function Leadership() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 md:py-24 px-6 bg-[#0e0e0e] text-white overflow-hidden" id="ourteam">

      {/* Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-[#D4A373]/10 blur-[140px] rounded-full" />
      </div>

      {/* Header */}
      <div className="text-center mb-12 relative z-10">
        <p className="uppercase tracking-[5px] text-[#D4A373] text-xs mb-3">
          Leadership
        </p>

        <h2 className="text-3xl md:text-5xl font-semibold">
          The Faces of Ruchi Caterers
        </h2>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto relative z-10">

        {leaders.map((person, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            whileHover={{ y: -8 }}
            className="text-center group"
          >

            {/* IMAGE */}
            <div className="relative flex justify-center mb-5">

              {/* Glow */}
              <div className="absolute w-[240px] h-[240px] rounded-full bg-[#D4A373]/30 blur-2xl opacity-70 group-hover:scale-110 transition duration-500" />

              {/* Image */}
              <img
                src={person.image}
                alt={person.name}
                className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] rounded-full object-cover border border-white/20 relative z-10 transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* NAME */}
            <h3 className="text-lg md:text-xl font-semibold tracking-wide">
              {person.name}
            </h3>

            {/* ROLE */}
            <p className="text-[#D4A373] text-xs mt-2 tracking-[2px] uppercase">
              {person.role}
            </p>

          </motion.div>
        ))}
      </div>

      {/* SEE MORE BUTTON */}
      <div className="flex justify-center mt-12 relative z-10">
        <button
          onClick={() => navigate("/team")}
          className="px-6 py-3 rounded-full border border-[#D4A373] text-[#D4A373] 
                     hover:bg-[#D4A373] hover:text-black transition duration-300"
        >
          See More
        </button>
      </div>

    </section>
  );
}
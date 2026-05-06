import { motion } from "framer-motion";

const team = [
  { name: "Usman T.A", role: "Managing Director", image: "/images/Usman.png" },
  { name: "Haroon Usman", role: "Executive Director", image: "/images/haroon.png" },
  { name: "Kassim", role: "General Manager", image: "/images/kassim.png" },
  { name: "Satheesh", role: "Chef", image: "/images/satheesh.png" },
  { name: "Rajeev", role: "Executive Chef", image: "/images/rajeev.png" },
  { name: "Nikesh", role: "Service Manager", image: "/images/nikesh.png" },
];

export default function Team() {
  return (
    <section className="relative py-28 px-6 bg-[#0b0b0b] text-white">

      {/* Header */}
      <div className="text-center mb-24">
        <p className="uppercase tracking-[6px] text-[#D4A373] text-xs mb-4">
          Our Team
        </p>

        <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
          Meet The Minds Behind The Magic
        </h2>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-20 gap-x-10 max-w-5xl mx-auto">

        {team.map((person, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center group"
          >

            {/* IMAGE */}
            <div className="relative flex justify-center mb-6">

              {/* soft glow */}
              <div className="absolute w-[180px] h-[180px] bg-[#D4A373]/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition duration-500" />

              <img
                src={person.image}
                alt={person.name}
                className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] 
                           rounded-full object-cover 
                           transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* NAME */}
            <h3 className="text-lg md:text-xl font-medium tracking-wide">
              {person.name}
            </h3>

            {/* ROLE */}
            <p className="text-white/50 text-xs mt-2 tracking-[2px] uppercase">
              {person.role}
            </p>

          </motion.div>
        ))}

      </div>
    </section>
  );
}
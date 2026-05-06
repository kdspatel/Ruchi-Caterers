import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Branches() {
  const branches = [
    { name: "Thiruvalla", slug: "thiruvalla" },
    { name: "Kottayam", slug: "kottayam" },
    { name: "Trivandrum", slug: "trivandrum" },
    { name: "Kollam", slug: "kollam" },
    { name: "Ernakulam", slug: "ernakulam" },
    { name: "Alappuzha", slug: "alappuzha" },
    { name: "Pala", slug: "pala" },
    { name: "Thrissur - Ruchi Caterers", slug: "thrissur" },
  ];

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white px-6 py-24">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">
          Our <span className="text-[#D4A373]">Branches</span>
        </h1>
        <p className="text-white/60 mt-4">
          Serving premium catering across Kerala
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

        {branches.map((b, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="bg-[#141414] border border-white/10 rounded-2xl p-6 hover:border-[#D4A373] transition"
          >
            <h2 className="text-xl font-semibold">{b.name}</h2>

            <p className="text-white/50 mt-2">
              Premium catering service available in {b.name}
            </p>

            {/* CLICK GOES TO DETAIL PAGE */}
            <Link to={`/branch/${b.slug}`}>
              <button className="mt-6 px-4 py-2 bg-[#D4A373]/10 text-[#D4A373] rounded-full text-sm">
                Know More
              </button>
            </Link>

          </motion.div>
        ))}

      </div>
    </div>
  );
}
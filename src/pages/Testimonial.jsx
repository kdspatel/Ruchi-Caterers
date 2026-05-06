import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Farhaan Fazil",
    role: "Client",
    text: "The food of Ruchi taste good and they maintain the quality and taste of their food.",
    image: "/images/farhaan.png",
  },
  {
    name: "Joshy Mathew",
    role: "Film Maker",
    text: "I trusted Ruchi Caterers for my son's wedding reception, and they exceeded expectations.",
    image: "/images/Joshy.jpg",
  },
  {
    name: "Badran",
    role: "Director",
    text: "Ruchi Caterer, with a boss of great taste, first arrives in Pala for my son's wedding. Enjoy their delicious food and exquisite flavors.",
    image: "/images/Badran.jpg",
  },
  {
    name: "Sooraj Santhosh",
    role: "Client",
    text: "Fierce dinner, amazing hospitality & food is great. I love their tikka very much.",
    image: "/images/Sooraj.jpg",
  },
  {
    name: "Santhosh George Kulangara",
    role: "Traveler",
    text: "I tasted their love more than the Ruchi Caterers dishes and wish them all the best.",
    image: "/images/santhosh.jpg",
  },
  {
    name: "Dr. Tina Antony",
    role: "Client",
    text: "Service is excellent, varieties of food & their dessert selection is awesome.",
    image: "/images/Tina.png",
  },
  {
    name: "Pauls Creamery",
    role: "Client",
    text: "Wonderful service, well-organized team & very tasty food.",
    image: "/images/paul.png",
  },
  {
    name: "Maitreyan",
    role: "Client",
    text: "Exceptional food & great service. They have many different food choices.",
    image: "/images/Maitreyan.webp",
  },
  {
    name: "Fazil",
    role: "Director",
    text: "Ruchi’s food is as tasty as the name. I liked the food very much.",
    image: "/images/Fazil.jpg",
  },
  {
    name: "Vaishnavi Venugopal",
    role: "Client",
    text: "Amazing food! Loved it 😋",
    image: "/images/vaishnavi.jpg",
  },
];

function Stars() {
  return (
    <div className="flex gap-1 text-[#D4A373] text-sm mt-1">
      {"★★★★★"}
    </div>
  );
}

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  // 🔁 Auto slide
  useEffect(() => {
    const t = setInterval(() => {
      setIndex((p) => (p + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(t);
  }, []);

  // ⭐ Animated Counter
  const target = 12749;
  const [count, setCount] = useState(0);
  const rating = 4.9;

  useEffect(() => {
    let start = 0;
    const duration = 2000; // total animation time (2s)
    const increment = target / (duration / 16); // smooth frames

    const counter = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, []);

  const current = testimonials[index];

  return (
    <section className="relative py-20 md:py-28 px-4 sm:px-6 bg-[#0e0e0e] text-white overflow-hidden" id="testimonials">

      {/* HEADER */}
      <div className="text-center mb-10 md:mb-16">
        <p className="uppercase tracking-[4px] md:tracking-[6px] text-[#D4A373] text-xs sm:text-sm mb-3">
          Testimonials
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          What Clients Say
        </h2>

        {/* ⭐ GOOGLE STYLE */}
        <div className="flex flex-col items-center mt-5 gap-2">

          <div className="flex items-center gap-2">
            <span className="text-[#D4A373] text-lg">★★★★★</span>

            <span className="text-white/80 text-sm">
              {rating} out of 5
            </span>
          </div>

          <p className="text-white/60 text-sm">
            {count.toLocaleString()}+ Google Reviews
          </p>

        </div>
      </div>

      {/* BG GLOW */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[400px] h-[400px] bg-[#D4A373]/10 blur-[120px] rounded-full" />
      </div>

      {/* CARD */}
      <div className="flex justify-center px-2 sm:px-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            className="relative w-full max-w-xl rounded-3xl p-8 
                       bg-gradient-to-b from-white/10 to-white/5 
                       border border-white/10 backdrop-blur-2xl 
                       shadow-[0_20px_70px_rgba(0,0,0,0.6)]"
          >

            <div className="flex items-center gap-4 mb-6">
              <img
                src={current.image}
                className="w-14 h-14 rounded-full object-cover border border-white/20"
                alt={current.name}
              />

              <div>
                <h4 className="text-lg font-semibold">
                  {current.name}
                </h4>
                <p className="text-white/40 text-sm">
                  {current.role}
                </p>
                <Stars />
              </div>
            </div>

            <p className="text-white/75 leading-7 text-sm">
              {current.text}
            </p>

          </motion.div>
        </AnimatePresence>
      </div>

      {/* DOTS */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              i === index ? "w-6 bg-[#D4A373]" : "w-2 bg-white/20"
            }`}
          />
        ))}
      </div>

    </section>
  );
}
import { useEffect, useState } from "react";

const portfolioData = [
  { id: 1, image: "/images/client (1).png" },
  { id: 2, image: "/images/client (2).png" },
  { id: 3, image: "/images/client (3).png" },
  { id: 4, image: "/images/client (4).png" },
  { id: 5, image: "/images/client (5).png" },
  { id: 6, image: "/images/client (6).png" },
  { id: 7, image: "/images/client (7).png" },
  { id: 8, image: "/images/client (8).png" },
  { id: 9, image: "/images/client (9).png" },
  { id: 10, image: "/images/client (10).png" },
  { id: 11, image: "/images/client (11).png" },
];

export default function Portfolio() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % portfolioData.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // 📱 responsive card width
  const getCardWidth = () => {
    if (window.innerWidth < 640) return 200; // mobile
    if (window.innerWidth < 1024) return 260; // tablet
    return 320; // desktop
  };

  const cardWidth = getCardWidth();

  const getStyle = (i) => {
    const position = i - index;

    return {
      transform: `
        translateX(${position * cardWidth}px)
        scale(${position === 0 ? 1 : 0.75})
      `,
      opacity: position === 0 ? 1 : 0.4,
      zIndex: position === 0 ? 10 : 1,
    };
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-4">

      {/* TITLE */}
      <div className="text-center mb-14">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
          Our <span className="text-yellow-400">Esteemed Clients</span>
        </h1>
        <p className="text-gray-400 mt-3 text-sm sm:text-base">
          Smooth rolling showcase of trust & celebration
        </p>
      </div>

      {/* CAROUSEL */}
      <div className="relative w-full h-[260px] sm:h-[300px] flex items-center justify-center">

        {portfolioData.map((item, i) => (
          <div
            key={item.id}
            className="absolute transition-all duration-700 ease-in-out"
            style={getStyle(i)}
          >
            <div className="
              w-[200px] sm:w-[260px] md:w-[320px]
              h-[150px] sm:h-[180px] md:h-[220px]
              bg-white rounded-2xl
              flex items-center justify-center
              shadow-2xl border border-white/20
              overflow-hidden
            ">
              <img
                src={item.image}
                alt="client"
                className="max-h-[120px] sm:max-h-[140px] md:max-h-[160px] object-contain"
              />
            </div>
          </div>
        ))}

      </div>

      {/* DOTS */}
      <div className="flex gap-2 mt-8">
        {portfolioData.map((_, i) => (
          <div
            key={i}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? "w-6 bg-yellow-400" : "w-2 bg-gray-600"
            }`}
          />
        ))}
      </div>

    </div>
  );
}
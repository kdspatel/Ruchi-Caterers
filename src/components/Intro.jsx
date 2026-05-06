import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Intro({ onFinish }) {
  const [entering, setEntering] = useState(false);
  const [loaded, setLoaded] = useState(false);

  // preload bg for faster reload opening
  useEffect(() => {
    const img = new Image();
    img.src = "/images/bg.webp";
    img.onload = () => setLoaded(true);
  }, []);

  const handleEnter = () => {
    setEntering(true);

    // open website earlier
    setTimeout(() => {
      onFinish();
    }, 150);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: loaded ? 1 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[999] overflow-hidden"
    >

      {/* BACKGROUND */}
      <motion.div
        className="absolute inset-0"
        animate={{
          scale: entering ? 1.08 : 1,
          opacity: entering ? 0 : 1,
        }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <img
          src="/images/bg.webp"
          alt="Background"
          loading="eager"
          fetchpriority="high"
          draggable={false}
          className="w-full h-full object-cover brightness-[0.35]"
        />
      </motion.div>

      {/* GRADIENT OVERLAY */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70"
        animate={{
          opacity: entering ? 0 : 1,
        }}
        transition={{
          duration: 1.5,
        }}
      />

      {/* GRAIN */}
      <motion.div
        className="absolute inset-0 opacity-[0.04] mix-blend-screen bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]"
        animate={{
          opacity: entering ? 0 : 0.04,
        }}
        transition={{
          duration: 1.5,
        }}
      />

      {/* CONTENT */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">

        <div className="flex flex-col items-center">

          {/* SMALL TOP TEXT */}
          {!entering && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="mb-4 text-xs uppercase tracking-[6px] text-white/60"
            >
              Premium Kerala Catering
            </motion.p>
          )}

          {/* MAIN TITLE */}
          <motion.h1
            animate={{
              scale: entering ? 7 : 1,
              opacity: entering ? 0 : 1,
              letterSpacing: entering ? "0.4em" : "0.08em",
            }}
            transition={{
              duration: 1.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif text-5xl font-semibold md:text-8xl will-change-transform"
          >
            Ruchi Caterers
          </motion.h1>

          {/* DIVIDER */}
          {!entering && (
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 120, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="my-6 h-[1px] bg-white/40"
            />
          )}

          {/* TAGLINE */}
          {!entering && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base tracking-[2px] text-white/75 md:text-lg"
            >
              स्वाद जो याद रहे
            </motion.p>
          )}

          {/* BUTTON */}
          {!entering && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              onClick={handleEnter}
              className="group relative mt-10 overflow-hidden rounded-full border border-white/20 bg-white/5 px-10 py-4 backdrop-blur-md transition-all duration-500 hover:scale-105 hover:border-white/60"
            >

              {/* Hover Glow */}
              <span className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Text */}
              <span className="relative z-10 text-sm uppercase tracking-[4px] text-white">
                Step Inside
              </span>

            </motion.button>
          )}

        </div>
      </div>
    </motion.div>
  );
}
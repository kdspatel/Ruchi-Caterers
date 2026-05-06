import { useEffect } from "react";
import { Play, ImageIcon, Video } from "lucide-react";

export default function OurGallery() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const videos = [
    {
      title: "Luxury Wedding Moments",
      link: "https://www.youtube.com/embed/NtPIxseMmfE",
    },
    {
      title: "Authentic Kerala Sadya",
      link: "https://www.youtube.com/embed/jZn3UIBEwkc",
    },
    {
      title: "Premium Catering Experience",
      link: "https://www.youtube.com/embed/korPjhADDoA",
    },
    {
      title: "Outdoor Catering",
      link: "https://www.youtube.com/embed/capdfaZX8xk",
    },
    {
      title: "Traditional Feast",
      link: "https://www.youtube.com/embed/UUJ1IIQekSA",
    },
    {
      title: "Luxury Dining Setup",
      link: "https://www.youtube.com/embed/J4bnavrc_bU",
    },
    {
      title: "Wedding Dining",
      link: "https://www.youtube.com/embed/F43gWMTVm3c",
    },
    {
      title: "Kerala Buffet",
      link: "https://www.youtube.com/embed/VXSknDlAjBU",
    },
    {
      title: "Grand Celebration",
      link: "https://www.youtube.com/embed/DNPLYiIl9j0",
    },
  ];

  const images = [
  "/images/ruchi-img (1).jpg",
  "/images/ruchi-img (2).jpg",
  "/images/ruchi-img (3).jpg",
  "/images/ruchi-img (4).jpg",
  "/images/ruchi-img (5).jpg",
  "/images/ruchi-img (6).jpg",
  "/images/ruchi-img (7).jpg",
  "/images/ruchi-img (8).jpg",
  "/images/ruchi-img (9).jpg",
  "/images/ruchi-img (10).jpg",
  "/images/ruchi-img (11).jpg",
  "/images/ruchi-img (12).jpg",
  "/images/ruchi-img (13).jpg",
  "/images/ruchi-img (14).jpg",
  "/images/ruchi-img (15).jpg",
  "/images/ruchi-img (16).jpg",
  "/images/ruchi-img (17).jpg",
  "/images/ruchi-img (18).jpg",
  "/images/ruchi-img (19).jpg",
  "/images/ruchi-img (20).jpg",
  "/images/ruchi-img (21).jpg",
  "/images/ruchi-img (22).jpg",
  "/images/ruchi-img (23).jpg",
  "/images/ruchi-img (24).jpg",
  "/images/ruchi-img (25).jpg",
];

  return (
    <section className="bg-black text-white overflow-hidden">

      {/* ===== HERO ===== */}
      <div className="relative min-h-[100svh] flex items-center justify-center overflow-hidden px-4 sm:px-6">

        {/* BG */}
        <img
          src="/images/service.jpg"
          alt="Gallery Hero"
          className="absolute inset-0 w-full h-full object-cover opacity-25 scale-110"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/75" />

        {/* GLOW */}
        <div className="absolute top-10 left-0 sm:left-10 w-[220px] sm:w-[400px] h-[220px] sm:h-[400px] bg-[#D4A373]/10 rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute bottom-10 right-0 sm:right-10 w-[220px] sm:w-[400px] h-[220px] sm:h-[400px] bg-[#D4A373]/10 rounded-full blur-[100px] sm:blur-[140px]" />

        {/* CONTENT */}
        <div className="relative z-10 text-center w-full max-w-6xl">

          <p className="uppercase tracking-[5px] sm:tracking-[8px] text-[#D4A373] text-[11px] sm:text-sm mb-5 sm:mb-6">
            Ruchi Gallery
          </p>

          <h1 className="text-[38px] sm:text-6xl md:text-7xl lg:text-8xl font-semibold leading-[1.1] mb-6 sm:mb-8">
            Luxury <span className="text-[#D4A373]">Experiences</span>
            <br />
            Captured Forever
          </h1>

          <p className="text-white/50 max-w-3xl mx-auto leading-7 sm:leading-9 text-sm sm:text-lg px-2">
            Explore premium weddings, Kerala Sadya experiences,
            luxury catering setups, and unforgettable celebrations.
          </p>

          {/* INFO STRIP */}
          <div className="mt-10 sm:mt-14 flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-5">

            <div className="flex items-center gap-3 px-5 sm:px-6 py-4 rounded-2xl sm:rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">

              <div className="w-10 h-10 rounded-full bg-[#D4A373]/10 flex items-center justify-center flex-shrink-0">
                <Video size={18} className="text-[#D4A373]" />
              </div>

              <div className="text-left">
                <p className="text-sm font-medium">
                  Cinematic Videos
                </p>

                <p className="text-white/40 text-xs">
                  Luxury celebrations in motion
                </p>
              </div>

            </div>

            <div className="flex items-center gap-3 px-5 sm:px-6 py-4 rounded-2xl sm:rounded-full border border-white/10 bg-white/5 backdrop-blur-xl">

              <div className="w-10 h-10 rounded-full bg-[#D4A373]/10 flex items-center justify-center flex-shrink-0">
                <ImageIcon size={18} className="text-[#D4A373]" />
              </div>

              <div className="text-left">
                <p className="text-sm font-medium">
                  Premium Gallery
                </p>

                <p className="text-white/40 text-xs">
                  Captured Kerala elegance
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ===== VIDEO EXPERIENCE ===== */}
      <div className="relative py-20 sm:py-24 lg:py-28 border-t border-white/10 overflow-hidden">

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-[#D4A373]/10 rounded-full blur-[100px] sm:blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[250px] sm:w-[450px] h-[250px] sm:h-[450px] bg-[#D4A373]/10 rounded-full blur-[100px] sm:blur-[140px]" />

        {/* TOP */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-14 sm:mb-16 relative z-10">

          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

            <div>

              <p className="uppercase tracking-[5px] sm:tracking-[6px] text-[#D4A373] text-[11px] sm:text-sm mb-4 sm:mb-5">
                Celebration Films
              </p>

              <h2 className="text-[34px] sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1]">
                Watch Ruchi <br />
                <span className="text-[#D4A373]">In Motion</span>
              </h2>

            </div>

            <p className="text-white/40 leading-7 sm:leading-8 max-w-md text-sm sm:text-base">
              Luxury weddings, Kerala Sadya experiences,
              and unforgettable premium celebrations.
            </p>

          </div>

        </div>

        {/* ===== VIDEO SLIDER ===== */}
        <div className="overflow-hidden relative video-wrapper">

          <div className="video-track flex gap-5 sm:gap-8 w-max px-4 sm:px-6">

            {[...videos, ...videos].map((video, i) => (
              <div
                key={i}
                className="group relative w-[250px] sm:w-[300px] md:w-[340px] rounded-[28px] sm:rounded-[35px] overflow-hidden border border-white/10 bg-[#111111] flex-shrink-0 hover:border-[#D4A373]/40 transition-all duration-500"
              >

                {/* VIDEO */}
                <div className="aspect-[4/4.8] overflow-hidden">

                  <iframe
                    className="w-full h-full scale-[1.02]"
                    src={video.link}
                    title={`video-${i}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />

                </div>

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none" />

                {/* CONTENT */}
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">

                  <div className="flex items-center justify-between mb-3 sm:mb-4">

                    <div className="flex items-center gap-2 sm:gap-3">

                      <span className="w-6 sm:w-8 h-[1px] bg-[#D4A373]" />

                      <span className="text-[#D4A373] text-[9px] sm:text-[10px] tracking-[3px] sm:tracking-[4px] uppercase">
                        Ruchi
                      </span>

                    </div>

                    <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center justify-center">

                      <Play
                        size={13}
                        className="text-[#D4A373] ml-[2px]"
                        fill="#D4A373"
                      />

                    </div>

                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold leading-snug mb-2 sm:mb-3">
                    {video.title}
                  </h3>

                  <p className="text-white/50 text-xs sm:text-sm leading-5 sm:leading-6">
                    Premium Kerala catering moments crafted with
                    luxury and unforgettable hospitality.
                  </p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* ===== IMAGE EXPERIENCE ===== */}
      <div className="relative py-20 sm:py-24 lg:py-32 overflow-hidden border-t border-white/10">

        {/* BG GLOW */}
        <div className="absolute top-20 left-0 w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-[#D4A373]/10 rounded-full blur-[90px] sm:blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[220px] sm:w-[300px] h-[220px] sm:h-[300px] bg-[#D4A373]/10 rounded-full blur-[90px] sm:blur-[120px]" />

        {/* TITLE */}
        <div className="text-center mb-14 sm:mb-20 relative z-10 px-4 sm:px-6">

          <p className="uppercase tracking-[4px] sm:tracking-[5px] text-[#D4A373] text-[11px] sm:text-sm mb-3 sm:mb-4">
            Luxury Image Showcase
          </p>

          <h2 className="text-[34px] sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight">
            Captured <span className="text-[#D4A373]">Elegance</span>
          </h2>

        </div>

        {/* ROW 1 */}
        <div className="overflow-hidden image-wrapper mb-5 sm:mb-8">

          <div className="image-track flex gap-5 sm:gap-8 w-max">

            {[...images, ...images].map((img, i) => (
              <div
                key={i}
                className="group relative w-[220px] sm:w-[280px] md:w-[320px] h-[300px] sm:h-[360px] md:h-[420px] rounded-[24px] sm:rounded-[35px] overflow-hidden border border-white/10 flex-shrink-0"
              >

                <img
                  src={img}
                  alt="Gallery"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                <div className="absolute bottom-5 sm:bottom-6 left-5 sm:left-6 right-5 sm:right-6 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition duration-500">

                  <p className="uppercase tracking-[3px] sm:tracking-[4px] text-[#D4A373] text-[10px] sm:text-xs mb-2">
                    Ruchi Moments
                  </p>

                  <h3 className="text-lg sm:text-2xl font-semibold">
                    Premium Celebration
                  </h3>

                </div>

              </div>
            ))}

          </div>

        </div>

        {/* ROW 2 */}
        <div className="overflow-hidden image-wrapper-reverse">

          <div className="image-track-reverse flex gap-5 sm:gap-8 w-max">

            {[...images, ...images].map((img, i) => (
              <div
                key={i}
                className="group relative w-[200px] sm:w-[240px] md:w-[280px] h-[260px] sm:h-[320px] md:h-[360px] rounded-[24px] sm:rounded-[35px] overflow-hidden border border-white/10 flex-shrink-0"
              >

                <img
                  src={img}
                  alt="Gallery"
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* ===== CSS ===== */}
      <style>
        {`
          /* VIDEO */
          .video-track {
            animation: videoScroll 45s linear infinite;
          }

          .video-wrapper:hover .video-track {
            animation-play-state: paused;
          }

          @keyframes videoScroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          /* IMAGE ROW 1 */
          .image-track {
            animation: scroll 35s linear infinite;
          }

          .image-wrapper:hover .image-track {
            animation-play-state: paused;
          }

          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          /* IMAGE ROW 2 */
          .image-track-reverse {
            animation: scrollReverse 40s linear infinite;
          }

          .image-wrapper-reverse:hover .image-track-reverse {
            animation-play-state: paused;
          }

          @keyframes scrollReverse {
            0% {
              transform: translateX(-50%);
            }
            100% {
              transform: translateX(0);
            }
          }

          /* MOBILE PERFORMANCE */
          @media (max-width: 640px) {
            .video-track {
              animation-duration: 30s;
            }

            .image-track {
              animation-duration: 45s;
            }

            .image-track-reverse {
              animation-duration: 50s;
            }
          }
        `}
      </style>

    </section>
  );
}
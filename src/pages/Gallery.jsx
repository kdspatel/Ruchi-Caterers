import { Link } from "react-router-dom";

export default function Gallery() {
  const videos = [
    {
      link: "https://www.youtube.com/embed/NtPIxseMmfE",
      title: "Luxury Wedding Moments",
    },
    {
      link: "https://www.youtube.com/embed/jZn3UIBEwkc",
      title: "Authentic Kerala Sadya",
    },
    {
      link: "https://www.youtube.com/embed/korPjhADDoA",
      title: "Premium Catering Experience",
    },
  ];

  return (
    <section className="py-32 px-6 bg-[#0d0d0d] text-white overflow-hidden" id="gallery">

      <div className="max-w-7xl mx-auto">

        {/* ===== TOP SECTION ===== */}
        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-[#D4A373] text-sm mb-5">
            Experience Ruchi Live
          </p>

          <h2 className="text-4xl md:text-6xl font-semibold leading-tight mb-6">
            Real Celebrations <br /> Crafted By Ruchi
          </h2>

          <p className="text-white/50 leading-8 max-w-3xl mx-auto">
            Discover luxury weddings, authentic Kerala Sadya experiences,
            and unforgettable premium catering moments created with
            elegance, tradition, and hospitality.
          </p>

        </div>

        {/* ===== VIDEOS GRID ===== */}
        <div className="grid lg:grid-cols-3 gap-8">

          {videos.map((video, i) => (
            <div
              key={i}
              className="group bg-[#151515] rounded-[35px] overflow-hidden border border-white/10 hover:border-[#D4A373]/40 transition-all duration-500"
            >

              {/* VIDEO */}
              <div className="aspect-video overflow-hidden">
                <iframe
                  className="w-full h-full scale-[1.01]"
                  src={video.link}
                  title={`video-${i}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* CONTENT */}
              <div className="p-7">

                {/* TOP ROW */}
                <div className="flex items-center justify-between mb-5">

                  <div className="flex items-center gap-3">
                    <span className="w-10 h-[1px] bg-[#D4A373]" />

                    <span className="text-[#D4A373] text-xs tracking-[4px]">
                      RUCHI CATERERS
                    </span>
                  </div>

                  <span className="text-white/30 text-xs tracking-[3px] uppercase">
                    Live Experience
                  </span>

                </div>

                {/* TITLE */}
                <h3 className="text-2xl font-semibold mb-4 leading-snug">
                  {video.title}
                </h3>

                {/* TEXT */}
                <p className="text-white/60 text-sm leading-7">
                  Watch premium catering moments, luxury events,
                  and authentic Kerala hospitality brought to life.
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* ===== BUTTON ===== */}
        <div className="flex justify-center mt-16">

          <Link
            to="/our-gallery"
            className="px-10 py-4 rounded-full border border-[#D4A373] text-[#D4A373] uppercase tracking-[4px] text-sm hover:bg-[#D4A373] hover:text-black transition-all duration-300"
          >
            View More
          </Link>

        </div>

      </div>

    </section>
  );
}
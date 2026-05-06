import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-32 px-6 bg-[#111111]" id="about">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* LEFT SIDE - IMAGE */}
        <div className="relative h-[450px] sm:h-[550px] lg:h-[650px]">
          {/* glow */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#D4A373]/20 rounded-full blur-3xl" />

          <div className="h-full w-full overflow-hidden rounded-[35px] shadow-2xl">
            <img
              src="/images/about.jpg"
              alt="Kerala Food Aesthetic"
              className="h-full w-full object-cover scale-105 hover:scale-110 transition duration-700"
              onError={(e) => {
                e.target.src =
                  "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg";
              }}
            />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="text-center lg:text-left">
          <p className="uppercase tracking-[5px] text-[#D4A373] text-sm mb-5">
            About Us
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            A Legacy of{" "}
            <span className="text-[#D4A373]">Culinary Excellence</span>
          </h2>

          <p className="mt-6 sm:mt-8 text-white/70 leading-7 sm:leading-9 text-base sm:text-lg">
            Ruchi Caterers is a legacy-driven catering brand rooted in Kerala’s
            rich culinary heritage since 1955. We specialize in crafting
            unforgettable dining experiences that blend authentic Kerala flavors
            with modern presentation and elegance.
          </p>

          <p className="mt-4 text-white/60 leading-7 sm:leading-8 text-sm sm:text-base">
            From intimate gatherings to grand celebrations across Kerala, we
            deliver bespoke menus made with the freshest ingredients, ensuring
            every event is a perfect balance of taste, tradition, and
            sophistication.
          </p>
          <Link
            to="/branches"
            className="mt-8 sm:mt-10 inline-flex px-6 sm:px-8 py-3 sm:py-4 rounded-full 
              border border-[#D4A373] text-[#D4A373] 
              uppercase tracking-[4px] text-sm
              hover:bg-[#D4A373] hover:text-black 
              transition-all duration-300"
          >
            Our Branches
          </Link>

          {/* SOCIAL ICONS */}
          <div className="fixed right-4 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/ruchicaterersofficial?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full 
                   bg-white/10 backdrop-blur-md border border-white/10 
                   text-white/70 hover:text-[#D4A373] hover:scale-110 
                   transition-all duration-300"
            >
              <FaFacebookF size={16} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/ruchi.caterers/?igshid=MjEwN2IyYWYwYw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full 
                   bg-white/10 backdrop-blur-md border border-white/10 
                   text-white/70 hover:text-[#D4A373] hover:scale-110 
                   transition-all duration-300"
            >
              <FaInstagram size={16} />
            </a>

            {/* Twitter */}
            <a
              href="https://x.com/ruchicatering/status/1681992138916245504?s=46"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full 
                   bg-white/10 backdrop-blur-md border border-white/10 
                   text-white/70 hover:text-[#D4A373] hover:scale-110 
                   transition-all duration-300"
            >
              <FaTwitter size={16} />
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@ruchicaterers"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-full 
                   bg-white/10 backdrop-blur-md border border-white/10 
                   text-white/70 hover:text-[#D4A373] hover:scale-110 
                   transition-all duration-300"
            >
              <FaYoutube size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

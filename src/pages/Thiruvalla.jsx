export default function Thiruvalla() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <div className="relative h-[85vh] w-full overflow-hidden">

        <img
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
          alt="Thiruvalla Branch"
          className="w-full h-full object-cover scale-110"
        />

        {/* cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />

        {/* hero content */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-20 max-w-3xl">

            <p className="text-[#D4A373] tracking-[0.3em] text-xs md:text-sm mb-4">
              RUCHI CATERERS • THIRUVALLA BRANCH
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Thiruvalla <br />
              <span className="text-[#D4A373]">Branch</span>
            </h1>

            <p className="text-white/70 mt-6 leading-relaxed text-sm md:text-base">
              Authentic Kerala catering crafted with tradition, elegance, and unforgettable taste.
            </p>

          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="px-6 md:px-20 py-20">

        <div className="max-w-4xl mx-auto space-y-10">

          {/* SECTION 1 (YOUR ORIGINAL CONTENT) */}
          <div className="border-l-4 border-[#D4A373] pl-6">
            <h2 className="text-2xl font-bold mb-3">
              Best Catering Services in Thiruvalla
            </h2>

            <p className="text-white/70 leading-relaxed">
              Ruchi Caterers proudly stands as the premier choice for best
              catering services in Thiruvalla, setting the standard for
              excellence in culinary artistry and unparalleled service. With a
              legacy of culinary expertise and a passion for creating memorable
              dining experiences, we are dedicated to surpassing our clients’
              expectations on every occasion.

              From extravagant weddings to intimate gatherings, our team of
              skilled chefs and attentive staff craft bespoke menus that cater
              to every palate and preference. We meticulously select the finest
              ingredients, ensuring each dish is a harmonious blend of flavor,
              texture, and presentation.

              With our unwavering commitment to quality, attention to detail,
              and personalized service, Ruchi Caterers guarantees an
              unforgettable culinary journey for you and your guests,
              transforming every event into a celebration of taste and elegance.
            </p>
          </div>

          {/* SECTION 2 (YOUR ORIGINAL CONTENT) */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
            <h2 className="text-xl font-semibold text-[#D4A373] mb-3">
              Best Caterers in Thiruvalla
            </h2>

            <p className="text-white/70 leading-relaxed">
              Ruchi Caterers takes pride in delivering a seamless and
              stress-free catering experience for our clients in Thiruvalla.
              From the initial consultation to the final execution, our
              dedicated team works tirelessly to ensure that every aspect of
              your event is flawlessly orchestrated. We understand the
              significance of each occasion and tailor our services to meet your
              unique requirements and preferences. Whether it’s a traditional
              Kerala feast, a contemporary fusion menu, or specialized dietary
              needs, we strive to accommodate every request with professionalism
              and attention to detail. With Ruchi Caterers, you can trust that
              your event will be executed with precision and care, allowing you
              to relax and savor the festivities while creating cherished
              memories with your loved ones.
            </p>
          </div>

          {/* FINAL LINE */}
          <div className="text-center py-6">
            <p className="text-white/60 italic">
              Every Thiruvalla event becomes a refined culinary celebration with Ruchi Caterers.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
export default function Pala() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <div className="relative h-[85vh] w-full overflow-hidden">

        <img
          src="/images/pa-main.png"
          alt="Pala Branch"
          className="w-full h-full object-cover scale-110"
        />

        {/* cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />

        {/* hero content */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-20 max-w-3xl">

            <p className="text-[#D4A373] tracking-[0.3em] text-xs md:text-sm mb-4">
              RUCHI CATERERS • PALA BRANCH
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Pala <br />
              <span className="text-[#D4A373]">Branch</span>
            </h1>

            <p className="text-white/70 mt-6 leading-relaxed text-sm md:text-base">
              Where tradition, taste, and perfection come together.
            </p>

          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="px-6 md:px-20 py-20">

        <div className="max-w-4xl mx-auto space-y-10">

          {/* SECTION 1 (FULL YOUR CONTENT) */}
          <div className="border-l-4 border-[#D4A373] pl-6">
            <p className="text-white/70 leading-relaxed">

              we are proud to stand as the leading catering service in Pala, setting the standard for excellence in culinary experiences.
              With a rich heritage of delivering top-notch catering services, we have earned the esteemed reputation of being the best caterers
              in the area.

              Our dedication to quality, innovation, and personalized service is evident in every event we undertake, whether it’s a lavish wedding,
              a corporate function, or a private celebration. From meticulously crafted menus featuring a blend of traditional Kerala flavors and
              contemporary cuisine to flawless execution and impeccable presentation, we ensure that every aspect of your event exceeds expectations.

              With attention to detail, creativity, and a passion for perfection, we tailor our services to suit the unique preferences and requirements
              of each client, ensuring a truly bespoke and memorable event.

              When you choose Ruchi Caterers, you’re not just hiring a catering service, you’re embarking on a culinary journey of unparalleled excellence
              and satisfaction.

            </p>
          </div>

          {/* SECTION 2 TITLE */}
          <div className="text-2xl font-bold text-[#D4A373]">
            Best Caterers in Pala
          </div>

          {/* SECTION 2 (FULL YOUR CONTENT) */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
            <p className="text-white/70 leading-relaxed">

              At Ruchi Caterers, our mission is simple: to elevate your event to new heights with exceptional food and service.
              We understand that every occasion is special and deserves the utmost attention to detail.

              That’s why we approach each event with enthusiasm and dedication, working closely with our clients to bring their vision to life.
              Whether it’s an intimate gathering or a grand celebration, we take pride in exceeding expectations and creating memorable experiences
              that leave a lasting impression.

              With Ruchi Caterers by your side, you can relax and enjoy your event knowing that every aspect of your catering needs is in expert hands.

              What distinguishes Ruchi Caterers as the best in Pala is our unwavering commitment to culinary mastery and customer satisfaction.
              Our team of talented chefs and hospitality professionals work tirelessly to create unforgettable dining experiences that delight the senses
              and leave a lasting impression.

            </p>
          </div>

          {/* FINAL LINE */}
          <div className="text-center py-6">
            <p className="text-white/60 italic">
              Pala’s finest catering experience — crafted with passion, served with perfection.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
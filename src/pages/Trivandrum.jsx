export default function Trivandrum() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <div className="relative h-[85vh] w-full overflow-hidden">

        <img
          src="/images/tri-main.jpg"
          alt="Trivandrum Branch"
          className="w-full h-full object-cover scale-110"
        />

        {/* cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />

        {/* hero content */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-20 max-w-3xl">

            <p className="text-[#D4A373] tracking-[0.3em] text-xs md:text-sm mb-4">
              RUCHI CATERERS • TRIVANDRUM BRANCH
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Trivandrum <br />
              <span className="text-[#D4A373]">Branch</span>
            </h1>

            <p className="text-white/70 mt-6 leading-relaxed text-sm md:text-base">
              Where corporate excellence meets premium culinary artistry.
            </p>

          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="px-6 md:px-20 py-20">

        <div className="max-w-4xl mx-auto space-y-10">

          {/* SECTION 1 (YOUR ORIGINAL CONTENT - FULL) */}
          <div className="border-l-4 border-[#D4A373] pl-6">
            <p className="text-white/70 leading-relaxed">

              Ruchi Caterers stands as the epitome of excellence in catering services in Trivandrum.
              With a passion for culinary innovation and a commitment to unparalleled service, we bring
              flavors to life and create unforgettable dining experiences for every occasion. From intimate
              gatherings to grand celebrations, our team of seasoned professionals crafts bespoke menus
              tailored to your preferences and executed with precision.

              With an unwavering focus on quality ingredients, meticulous attention to detail, and seamless
              execution, Ruchi Caterers ensures that every event is a culinary masterpiece. Discover why we are
              recognized as the best catering service in Trivandrum, where every dish tells a story and every
              bite leaves a lasting impression.

            </p>
          </div>

          {/* SECTION 2 TITLE */}
          <div className="text-2xl font-bold text-[#D4A373]">
            Best Corporate Caterers in Trivandrum
          </div>

          {/* SECTION 2 (FULL YOUR CONTENT) */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
            <p className="text-white/70 leading-relaxed">

              Ruchi Caterers stands at the forefront of corporate catering services in Trivandrum,
              setting the standard for excellence and professionalism in every culinary endeavor.
              With a meticulous focus on quality, innovation, and efficiency, we specialize in providing
              tailored catering solutions for corporate events of all sizes and complexities.

              Our experienced team understands the unique needs and expectations of corporate clients,
              whether it’s a business meeting, conference, seminar, or corporate gala. We offer a diverse
              range of menu options, from sophisticated gourmet cuisine to casual corporate buffets, all
              prepared with the finest ingredients and presented with impeccable style.

              With Ruchi Caterers as your trusted partner, you can rest assured that your corporate event
              will be a seamless blend of culinary excellence, attentive service, and unparalleled professionalism,
              leaving a lasting impression on your clients, colleagues, and guests alike.

            </p>
          </div>

          {/* SECTION 3 (YOUR LAST PARAGRAPH FULL) */}
          <div className="bg-black/40 border border-[#D4A373]/20 p-6 rounded-2xl">
            <p className="text-white/70 leading-relaxed">

              Ruchi Caterers is dedicated to delivering seamless and stress-free corporate catering experiences.
              We understand the importance of punctuality and reliability in the corporate world, which is why our
              team works diligently to ensure that every aspect of your event is executed flawlessly and on schedule.

              From initial planning to final execution, we provide personalized attention to detail, working closely
              with each client to tailor our services to their specific needs and preferences. Our commitment to
              excellence extends beyond the dining experience, as we strive to create a professional and polished
              atmosphere that reflects positively on your company.

              With Ruchi Caterers, you can trust that your corporate event will be a resounding success, leaving a
              lasting impression on your guests and reinforcing your company’s reputation for professionalism and hospitality.

            </p>
          </div>

          {/* FINAL LINE */}
          <div className="text-center py-6">
            <p className="text-white/60 italic">
              Trivandrum corporate catering refined — precision, professionalism, perfection.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
export default function Thrissur() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <div className="relative h-[85vh] w-full overflow-hidden">

        <img
          src="/images/thri-main.jpg"
          alt="Thrissur Branch"
          className="w-full h-full object-cover scale-110"
        />

        {/* cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />

        {/* hero content */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-20 max-w-3xl">

            <p className="text-[#D4A373] tracking-[0.3em] text-xs md:text-sm mb-4">
              RUCHI CATERERS • THRISSUR BRANCH
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Thrissur <br />
              <span className="text-[#D4A373]">Branch</span>
            </h1>

            <p className="text-white/70 mt-6 leading-relaxed text-sm md:text-base">
              Where culinary artistry meets unforgettable celebrations.
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

              Ruchi Caterers proudly stands as the epitome of excellence among catering services in Thrissur,
              renowned for delivering unparalleled culinary experiences that elevate every event to new heights.

              With a passion for culinary innovation and a dedication to impeccable service, we specialize in crafting
              bespoke menus that cater to the diverse tastes and preferences of our clients.

              From traditional Kerala cuisine to international delicacies, our experienced chefs use only the finest
              ingredients to create dishes that tantalize the taste buds and leave a lasting impression.

              Whether it’s a wedding, corporate function, or social gathering, our commitment to quality, creativity,
              and professionalism ensures that every event with Ruchi Caterers is a memorable and unforgettable occasion.

            </p>
          </div>

          {/* SECTION 2 TITLE */}
          <div className="text-2xl font-bold text-[#D4A373]">
            Best Catering Service In Thrissur
          </div>

          {/* SECTION 2 (FULL YOUR CONTENT) */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
            <p className="text-white/70 leading-relaxed">

              Ruchi Caterers proudly stands as the epitome of exceptional catering services in Thrissur,
              setting the standard for excellence in culinary craftsmanship and impeccable hospitality.

              With a rich legacy of culinary expertise and a passion for creating unforgettable dining experiences,
              we are dedicated to exceeding our clients’ expectations on every occasion.

              From lavish weddings to intimate gatherings, our team of skilled chefs and dedicated staff meticulously
              curate bespoke menus tailored to suit every palate and preference.

              We source only the finest ingredients, ensuring each dish is a masterpiece of flavor and presentation.

              With our unwavering commitment to quality, attention to detail, and personalized service, Ruchi Caterers
              guarantees a memorable and delightful culinary journey for you and your guests, making every event an
              unforgettable celebration of taste and elegance.

            </p>
          </div>

          {/* SECTION 3 (FULL YOUR CONTENT) */}
          <div className="bg-black/40 border border-[#D4A373]/20 p-6 rounded-2xl">
            <p className="text-white/70 leading-relaxed">

              Ruchi Caterers prides itself on providing a seamless and stress-free catering experience for our clients in Thrissur.
              From the initial consultation to the final execution, our dedicated team works tirelessly to ensure that every aspect
              of your event is flawlessly executed.

              We understand the importance of each occasion and tailor our services to meet your unique needs and preferences.
              Whether it’s a traditional Kerala feast, a contemporary fusion menu, or specialized dietary requirements, we strive
              to accommodate every request with professionalism and attention to detail.

              With Ruchi Caterers, you can trust that your event will be executed with precision and care, leaving you free to enjoy
              the festivities and create lasting memories with your loved ones.

            </p>
          </div>

          {/* FINAL LINE */}
          <div className="text-center py-6">
            <p className="text-white/60 italic">
              Thrissur’s premium catering experience — where every event becomes a masterpiece.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
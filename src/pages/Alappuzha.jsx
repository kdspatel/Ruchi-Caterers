export default function Alappuzha() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <div className="relative h-[85vh] w-full overflow-hidden">

        <img
          src="/images/a-main.jpg"
          alt="Alappuzha Branch"
          className="w-full h-full object-cover scale-110"
        />

        {/* overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />

        {/* hero text */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-20 max-w-3xl">

            <p className="text-[#D4A373] tracking-[0.3em] text-xs md:text-sm mb-4">
              RUCHI CATERERS • ALAPPUZHA BRANCH
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Alappuzha <br />
              <span className="text-[#D4A373]">Branch</span>
            </h1>

            <p className="text-white/70 mt-6 leading-relaxed text-sm md:text-base">
              Best catering services in Alappuzha delivering unforgettable Kerala dining experiences
              with tradition, taste, and perfection.
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
              Best Catering Services in Alappuzha
            </h2>

            <p className="text-white/70 leading-relaxed">
              We take immense pride in being recognized as the premier catering
              service in Alappuzha, setting the standard for excellence in
              culinary experiences. With our commitment to quality, innovation,
              and personalized service, we have earned the esteemed reputation
              of being the best catering service provider in the area. Our team
              of experienced chefs and dedicated staff work tirelessly to ensure
              that every event, whether it’s a wedding, corporate function, or
              special celebration, is a memorable culinary experience. From
              exquisite dishes prepared with the freshest ingredients to
              impeccable service tailored to your needs, Ruchi Caterers delivers
              nothing short of perfection. Choose Ruchi Caterers for your next
              event in Alappuzha and experience the finest in catering excellence.
            </p>
          </div>

          {/* SECTION 2 (YOUR ORIGINAL CONTENT) */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
            <h2 className="text-xl font-semibold text-[#D4A373] mb-3">
              Best Catering Services in Alappuzha
            </h2>

            <p className="text-white/70 leading-relaxed">
              What sets Ruchi Caterers apart as the best catering service in
              Alappuzha is our unwavering dedication to exceeding expectations
              and creating unforgettable dining experiences. We understand that
              every event is unique, and we approach each one with creativity
              and attention to detail. Whether you’re hosting an intimate
              gathering or a grand banquet, we tailor our menu selections and
              services to suit your specific needs and budget. With a focus on
              quality, creativity, and professionalism, Ruchi Caterers strives
              to surpass all expectations and ensure that your event is a
              resounding success. Our team works closely with you to understand
              your vision and preferences, crafting bespoke menus and
              personalized service that reflect your unique style and tastes.
            </p>
          </div>

          {/* FINAL LINE */}
          <div className="text-center py-6">
            <p className="text-white/60 italic">
              With Ruchi Caterers, your Alappuzha event becomes an unforgettable culinary journey.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
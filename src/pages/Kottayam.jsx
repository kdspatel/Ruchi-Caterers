export default function Kottayam() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <div className="relative h-[85vh] w-full overflow-hidden">

        <img
          src="/images/k-main.jpg"
          alt="Kottayam Branch"
          className="w-full h-full object-cover scale-110"
        />

        {/* cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />

        {/* hero content */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-20 max-w-3xl">

            <p className="text-[#D4A373] tracking-[0.3em] text-xs md:text-sm mb-4">
              RUCHI CATERERS • KOTTAYAM BRANCH
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Kottayam <br />
              <span className="text-[#D4A373]">Branch</span>
            </h1>

            <p className="text-white/70 mt-6 leading-relaxed text-sm md:text-base">
              Premium catering experience crafted with elegance, tradition, and perfection.
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

              Ruchi Caterers stands as the epitome of premium catering services in Kottayam,
              offering a distinguished culinary experience that surpasses expectations.
              With a passion for culinary innovation and a commitment to excellence,
              we specialize in curating bespoke menus that delight the senses and elevate
              any occasion to new heights of sophistication.

              Our team of experienced chefs combines traditional flavors with modern techniques
              to create culinary masterpieces that leave a lasting impression on every palate.
              From intimate gatherings to lavish celebrations, we pride ourselves on delivering
              unparalleled service, meticulous attention to detail, and flawless execution.

              With Ruchi Caterers, your event is more than just a meal – it’s an unforgettable
              gastronomic journey that embodies elegance, refinement, and unparalleled hospitality.

            </p>
          </div>

          {/* SECTION 2 TITLE */}
          <div className="text-2xl font-bold text-[#D4A373]">
            Premium Caterers in Kottayam
          </div>

          {/* SECTION 2 (FULL YOUR CONTENT) */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
            <p className="text-white/70 leading-relaxed">

              Ruchi Caterers offers a comprehensive range of premium services to ensure a seamless
              and memorable event experience. From personalized menu consultations to exquisite
              presentation and attentive service, we tailor every aspect of our catering service
              to exceed the expectations of our discerning clientele.

              Whether it’s a wedding, corporate event, or social gathering, our dedicated team is
              committed to providing impeccable service and creating a sophisticated ambiance that
              reflects the unique style and vision of each client.

              With Ruchi Caterers as your trusted partner, you can relax and enjoy every moment of
              your event, knowing that every detail has been meticulously planned and executed to perfection.

            </p>
          </div>

          {/* FINAL LINE */}
          <div className="text-center py-6">
            <p className="text-white/60 italic">
              Kottayam’s finest catering experience — where every event becomes a masterpiece.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
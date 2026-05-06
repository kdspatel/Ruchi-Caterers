export default function Ernakulam() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <div className="relative h-[85vh] w-full overflow-hidden">

        <img
          src="/images/er-main.jpg"
          alt="Ernakulam Branch"
          className="w-full h-full object-cover scale-110"
        />

        {/* cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />

        {/* hero content */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-20 max-w-3xl">

            <p className="text-[#D4A373] tracking-[0.3em] text-xs md:text-sm mb-4">
              RUCHI CATERERS • ERNAKULAM (KOCHI) BRANCH
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Ernakulam <br />
              <span className="text-[#D4A373]">Branch</span>
            </h1>

            <p className="text-white/70 mt-6 leading-relaxed text-sm md:text-base">
              Kochi’s finest catering experience — where innovation meets tradition.
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

              Ruchi Caterers, renowned as the premier catering service in Ernakulam. With a commitment to excellence
              and a passion for culinary innovation, we have earned the reputation of being the best caterers in the region.

              Our team of experienced chefs and dedicated staff work tirelessly to ensure that every event, whether it’s a wedding,
              corporate gathering, or special celebration, is a memorable culinary experience. From exquisite dishes prepared with the
              freshest ingredients to impeccable service tailored to your needs, we delivers nothing short of perfection.

              We take pride in our ability to exceed expectations and create unforgettable dining experiences that leave a lasting impression.
              Whether you’re hosting an intimate gathering or a grand banquet, we tailor our menu selections and services to suit your specific
              needs and budget.

              With a focus on quality and professionalism, We strives to exceed expectations and leave a lasting impression on you and your guests.

            </p>
          </div>

          {/* SECTION 2 TITLE */}
          <div className="text-2xl font-bold text-[#D4A373]">
            Best Caterers in Kochi
          </div>

          {/* SECTION 2 (FULL YOUR CONTENT) */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
            <p className="text-white/70 leading-relaxed">

              At Ruchi Caterers, our dedication to culinary excellence goes beyond just serving delicious food.
              We strive to create memorable experiences that resonate with our clients and their guests long after the event has ended.

              From the moment you engage with us, you’ll experience personalized attention and a commitment to fulfilling your unique vision.
              Whether it’s a traditional Kerala feast, a fusion extravaganza, or an international culinary journey, we work closely with you
              to curate a menu that reflects your tastes and preferences, ensuring that every dish is a reflection of your personality and style.

              What truly sets Ruchi Caterers apart is our passion for innovation and creativity. We are constantly exploring new flavors,
              techniques, and presentation styles to push the boundaries of culinary artistry.

              Our team of culinary experts thrives on the challenge of creating bespoke dining experiences that surprise and delight,
              ensuring that each event we cater is a feast for the senses.

              With Ruchi Caterers, you can trust that your event will be elevated to new heights of culinary excellence,
              making it an unforgettable occasion for you and your guests.

            </p>
          </div>

          {/* FINAL LINE */}
          <div className="text-center py-6">
            <p className="text-white/60 italic">
              Ernakulam’s premium catering experience — crafted with passion, served with perfection.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
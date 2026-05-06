export default function Kollam() {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* HERO SECTION */}
      <div className="relative h-[85vh] w-full overflow-hidden">

        <img
          src="/images/ko-main.jpg"
          alt="Kollam Branch"
          className="w-full h-full object-cover scale-110"
        />

        {/* cinematic overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/70" />

        {/* hero content */}
        <div className="absolute inset-0 flex items-center">
          <div className="px-6 md:px-20 max-w-3xl">

            <p className="text-[#D4A373] tracking-[0.3em] text-xs md:text-sm mb-4">
              RUCHI CATERERS • KOLLAM BRANCH
            </p>

            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
              Kollam <br />
              <span className="text-[#D4A373]">Branch</span>
            </h1>

            <p className="text-white/70 mt-6 leading-relaxed text-sm md:text-base">
              Where culinary excellence meets unforgettable celebrations.
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

              At Ruchi Caterers, we take immense pride in being recognized as the premier catering service in Kollam.
              With our unwavering dedication to excellence and a passion for culinary innovation, we have earned the esteemed
              title of the best caterers in the region.

              Our commitment to delivering exceptional dining experiences is evident in every aspect of our service, from the
              meticulously curated menus to the impeccable presentation and attentive hospitality. Whether it’s a wedding celebration,
              a corporate event, or a special occasion, we go above and beyond to ensure that every moment is infused with the flavors
              of perfection and the warmth of hospitality.

              With a team of highly skilled chefs and professionals, we strive to create bespoke menus that showcase the best of local
              flavors and global cuisines. From traditional Kerala delicacies to contemporary fusion creations, our diverse offerings
              cater to a myriad of tastes and preferences, ensuring that every guest is treated to a culinary journey that delights the
              senses and leaves a lasting impression.

              When you choose Ruchi Caterers, you can trust that your event will be elevated to new heights of gastronomic excellence,
              making it a memorable and unforgettable experience for you and your guests.

            </p>
          </div>

          {/* SECTION 2 TITLE */}
          <div className="text-2xl font-bold text-[#D4A373]">
            Best Catering Services in Kollam
          </div>

          {/* SECTION 2 (FULL YOUR CONTENT AGAIN) */}
          <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-md">
            <p className="text-white/70 leading-relaxed">

              At Ruchi Caterers, we take immense pride in being recognized as the premier catering service in Kollam.
              With our unwavering dedication to excellence and a passion for culinary innovation, we have earned the esteemed
              title of the best caterers in the region.

              Our commitment to delivering exceptional dining experiences is evident in every aspect of our service, from the
              meticulously curated menus to the impeccable presentation and attentive hospitality. Whether it’s a wedding celebration,
              a corporate event, or a special occasion, we go above and beyond to ensure that every moment is infused with the flavors
              of perfection and the warmth of hospitality.

              What sets Ruchi Caterers apart is our relentless pursuit of culinary excellence and our dedication to exceeding the
              expectations of our clients. With a team of highly skilled chefs and professionals, we strive to create bespoke menus
              that showcase the best of local flavors and global cuisines.

              From traditional Kerala delicacies to contemporary fusion creations, our diverse offerings cater to a myriad of tastes
              and preferences, ensuring that every guest is treated to a culinary journey that delights the senses and leaves a lasting impression.

              When you choose Ruchi Caterers, you can trust that your event will be elevated to new heights of gastronomic excellence,
              making it a memorable and unforgettable experience for you and your guests.

            </p>
          </div>

          {/* FINAL LINE */}
          <div className="text-center py-6">
            <p className="text-white/60 italic">
              Kollam’s finest catering experience — crafted with passion, served with perfection.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
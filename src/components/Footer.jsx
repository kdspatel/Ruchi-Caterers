export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] text-white overflow-hidden border-t border-white/10">

      {/* Luxury Glow Background */}
      <div className="absolute inset-0">
        <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-orange-500/20 blur-[180px] rounded-full"></div>
        <div className="absolute bottom-[-250px] right-[-150px] w-[450px] h-[450px] bg-yellow-500/10 blur-[160px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center">

        {/* BRAND */}
        <h1 className="text-4xl font-bold tracking-wide">
          Ruchi <span className="text-orange-500">Caterers</span>
        </h1>

        {/* TAGLINE */}
        <p className="text-white/60 mt-4 text-sm max-w-xl mx-auto leading-relaxed">
          Crafting luxury catering experiences for weddings, events, and celebrations with authentic taste and unforgettable presentation.
        </p>

        {/* CONTACT BLOCK */}
        <div className="mt-10 space-y-4 text-white/70 text-sm">

          <div>
            <p className="text-white/40 text-xs tracking-widest">PHONE</p>
            <p className="text-lg">+91 97806 66611</p>
          </div>

          <div>
            <p className="text-white/40 text-xs tracking-widest">PHONE</p>
            <p className="text-lg">+91 90379 32658</p>
          </div>

          <div>
            <p className="text-white/40 text-xs tracking-widest">EMAIL</p>
            <p className="text-lg">Ruchikkm@gmail.com</p>
          </div>

        </div>

        {/* SMALL LINE */}
        <div className="mt-10 h-[1px] w-24 bg-orange-500/50 mx-auto"></div>

        {/* COPYRIGHT */}
        <div className="mt-6 text-white/40 text-xs">
          © {new Date().getFullYear()} Ruchi Caterers. All rights reserved.
        </div>

      </div>
    </footer>
  );
}
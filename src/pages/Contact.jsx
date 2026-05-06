import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validateStep = () => {
    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
      return newErrors;
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
      return newErrors;
    }

    if (!form.email.includes("@")) {
      newErrors.email = "Enter a valid email (must include @)";
      return newErrors;
    }

    if (!form.service) {
      newErrors.service = "Please select a service";
      return newErrors;
    }

    return {};
  };

  const handleSubmit = () => {
    const validation = validateStep();

    if (Object.keys(validation).length > 0) {
      setErrors(validation);
      return;
    }

    const phoneNumber = "8320116436";

    const text = `Hello, I want to inquire about catering.

      Name: ${form.name}
      Email: ${form.email}
      Service: ${form.service}

      Details:
      ${form.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    setForm({
      name: "",
      email: "",
      service: "",
      message: "",
    });

    setErrors({});
  };

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });

    setErrors((prev) => {
      let updated = { ...prev };

      if (field === "name" && value.trim()) delete updated.name;

      if (field === "email") {
        if (!value.trim()) updated.email = "Email is required";
        else if (!value.includes("@")) updated.email = "Must include @";
        else delete updated.email;
      }

      if (field === "service" && value) delete updated.service;

      return updated;
    });
  };

  return (
    <section className="py-20 px-6 bg-[#0b0b0b] text-white" id="contact">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="uppercase tracking-[5px] text-[#D4A373] text-xs mb-3">
            Contact Us
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Let’s Create Something Memorable
          </h2>
        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-stretch">

          {/* FORM */}
          <div className="bg-[#111] p-8 rounded-2xl shadow-lg space-y-6">

            {/* NAME */}
            <div>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your Name *"
                className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-[#D4A373]"
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1">{errors.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="Email Address *"
                className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-[#D4A373]"
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* SERVICE */}
            <div>
              <select
                value={form.service}
                onChange={(e) => handleChange("service", e.target.value)}
                className="w-full bg-black border-b border-white/20 py-3 outline-none text-white focus:border-[#D4A373]"
              >
                <option value="">Select Service *</option>
                <option>Wedding</option>
                <option>Corporate</option>
                <option>Convocation</option>
                <option>Kitty Parties</option>
                <option>Festivals</option>
                <option>Associations</option>
              </select>
              {errors.service && (
                <p className="text-red-400 text-xs mt-1">{errors.service}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <textarea
                rows={4}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Tell us about your event (optional)"
                className="w-full bg-transparent border-b border-white/20 py-3 outline-none focus:border-[#D4A373]"
              />
            </div>

            {/* BUTTON */}
            <button
              onClick={handleSubmit}
              className="w-full mt-4 py-4 rounded-full bg-[#25D366] text-black font-medium hover:scale-[1.02] transition"
            >
              Send on WhatsApp
            </button>
          </div>

          {/* MAP */}
          <div className="rounded-2xl overflow-hidden shadow-lg min-h-[400px]">
            <iframe
              title="Ruchi Caterers Location"
              src="https://www.google.com/maps?q=Ruchi%20Caterers%20XIII/1B,%20KARUNAKARAN%20ROAD,%20Akkikkavu,%20Thrissur,%20Akathiyoor,%20Kerala%20680519&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
}
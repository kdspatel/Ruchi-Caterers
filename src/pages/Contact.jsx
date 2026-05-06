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

    const phoneNumber = "8320116436"; // 🔥 CHANGE

    const text = `Hello, I want to inquire about catering.

      Name: ${form.name}
      Email: ${form.email}
      Service: ${form.service}

      Details:
      ${form.message}`;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");

    // ✅ Reset form
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

    // 🔥 LIVE VALIDATION (removes error instantly)
    setErrors((prev) => {
      let updated = { ...prev };

      if (field === "name" && value.trim()) {
        delete updated.name;
      }

      if (field === "email") {
        if (!value.trim()) {
          updated.email = "Email is required";
        } else if (!value.includes("@")) {
          updated.email = "Must include @";
        } else {
          delete updated.email;
        }
      }

      if (field === "service" && value) {
        delete updated.service;
      }

      return updated;
    });
  };

  return (
    <section className="py-32 px-6 bg-[#0b0b0b] text-white" id="contact">
      <div className="max-w-3xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-[#D4A373] text-xs mb-3">
            Contact Us
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold">
            Let’s Create Something Memorable
          </h2>
        </div>

        <div className="space-y-8">
          {/* NAME */}
          <div>
            <input
              type="text"
              autoComplete="off"
              value={form.name}
              onChange={(e) => handleChange("name", e.target.value)}
              placeholder="Your Name *"
              className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#D4A373]"
            />
            {errors.name && (
              <p className="text-red-400 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <input
              type="email"
              autoComplete="off"
              value={form.email}
              onChange={(e) => handleChange("email", e.target.value)}
              placeholder="Email Address *"
              className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#D4A373]"
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
              className="w-full bg-transparent border-b border-white/20 py-4 outline-none text-white focus:border-[#D4A373]"
            >
              <option value="" className="bg-black">
                Select Service *
              </option>
              <option className="bg-black">Wedding</option>
              <option className="bg-black">Corporate</option>
              <option className="bg-black">Convocation</option>
              <option className="bg-black">Kitty Parties</option>
              <option className="bg-black">Festivals</option>
              <option className="bg-black">Associations</option>
            </select>
            {errors.service && (
              <p className="text-red-400 text-xs mt-1">{errors.service}</p>
            )}
          </div>

          {/* MESSAGE */}
          <div>
            <textarea
              rows={4}
              autoComplete="off"
              value={form.message}
              onChange={(e) => handleChange("message", e.target.value)}
              placeholder="Tell us about your event (optional)"
              className="w-full bg-transparent border-b border-white/20 py-4 outline-none focus:border-[#D4A373]"
            />
          </div>

          {/* BUTTON */}
          <button
            onClick={handleSubmit}
            className="w-full mt-6 py-4 rounded-full bg-[#25D366] text-black font-medium 
                       hover:scale-[1.02] transition"
          >
            Send on WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}
